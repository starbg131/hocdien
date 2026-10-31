import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

  try {
    const authHeader = req.headers.get("Authorization") || "";
    const token = authHeader.replace(/^Bearer\s+/i, "");
    if (!token) return json({ error: "Bạn cần đăng nhập." }, 401);

    const url = Deno.env.get("SUPABASE_URL")!;
    const publishableKeys = JSON.parse(Deno.env.get("SUPABASE_PUBLISHABLE_KEYS") || "{}");
    const secretKeys = JSON.parse(Deno.env.get("SUPABASE_SECRET_KEYS") || "{}");
    const publishableKey = publishableKeys.default;
    const secretKey = secretKeys.default;
    if (!url || !publishableKey || !secretKey) {
      return json({ error: "Thiếu cấu hình khóa Supabase phía máy chủ." }, 500);
    }

    const userClient = createClient(url, publishableKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
    const { data: callerData, error: callerError } = await userClient.auth.getUser(token);
    if (callerError || !callerData.user) return json({ error: "Phiên đăng nhập không hợp lệ." }, 401);
    if (callerData.user.app_metadata?.role !== "admin") {
      return json({ error: "Chỉ quản trị viên mới được tạo tài khoản." }, 403);
    }

    const body = await req.json();
    const nickname = String(body.nickname || "").trim();
    const password = String(body.password || "");
    if (!/^[A-Za-z0-9_.-]{3,24}$/.test(nickname)) {
      return json({ error: "Nickname phải gồm 3–24 ký tự chữ không dấu, số, dấu chấm, gạch dưới hoặc gạch ngang." }, 400);
    }
    if (password.length < 6 || password.length > 72) {
      return json({ error: "Mật khẩu phải có từ 6 đến 72 ký tự." }, 400);
    }

    const adminClient = createClient(url, secretKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
    const email = `nick_${nickname.toLowerCase()}@users.mophong.invalid`;
    const { data, error } = await adminClient.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
      user_metadata: { nickname },
      app_metadata: { role: "user" },
    });
    if (error) {
      const duplicate = /already|registered|exists/i.test(error.message);
      return json({ error: duplicate ? "Nickname này đã tồn tại." : error.message }, duplicate ? 409 : 400);
    }
    return json({ ok: true, nickname: data.user.user_metadata?.nickname || nickname });
  } catch (_error) {
    return json({ error: "Có lỗi máy chủ khi tạo tài khoản." }, 500);
  }
});
