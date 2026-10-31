# Kết nối đăng nhập dùng chung (GitHub Pages + Supabase)

## Mô hình
- GitHub Pages chỉ lưu/giao trang web; Supabase Auth lưu tài khoản và xác thực tập trung.
- Người dùng đăng nhập bằng nickname + mật khẩu.
- Chỉ tài khoản có `app_metadata.role = admin` mới thấy nút **Quản lý tài khoản** và gọi được Edge Function tạo người dùng.
- Không có đăng ký công khai.
- Mật khẩu do Supabase Auth quản lý; không lưu mật khẩu dạng rõ trong file HTML/JSON.
- Tuyệt đối không đưa `secret/service_role` key vào `index.html` hoặc GitHub.

## A. Tạo dự án Supabase
1. Vào https://supabase.com/ và tạo một project.
2. Trong Project Settings > API Keys, lấy:
   - Project URL
   - Publishable key (hoặc anon key legacy)
3. Mở `Mo_Phong_Dien_Cong_Nghiep/index.html`, tìm:
   `YOUR_SUPABASE_PROJECT_URL` và `YOUR_SUPABASE_PUBLISHABLE_OR_ANON_KEY`
   rồi thay bằng URL và publishable/anon key của dự án.
   Publishable/anon key được phép nằm trong frontend; secret key thì không.

## B. Tắt tự đăng ký công khai và tạo tài khoản admin đầu tiên
1. Trong Supabase Dashboard > Authentication > Settings, tắt tùy chọn cho phép người dùng tự đăng ký (Allow new users to sign up), nếu mục này đang bật.
2. Supabase Dashboard > Authentication > Users > Add user.
2. Tạo người dùng với email nội bộ:
   `nick_admin@users.mophong.invalid`
   và mật khẩu quản trị viên do bạn tự đặt. Chọn xác nhận email/Auto Confirm.
3. Mở SQL Editor, chạy nội dung file `supabase/bootstrap_admin.sql`.
   Nếu nickname admin khác `admin`, thay email trong câu SQL tương ứng:
   `nick_<nickname-chữ-thường>@users.mophong.invalid`
4. Đăng nhập trang bằng nickname `admin` và mật khẩu vừa tạo.
5. Sau khi đăng nhập, nút **Quản lý tài khoản** xuất hiện. Chỉ admin mới nhìn thấy nút này.

## C. Deploy Edge Function tạo tài khoản
Cần cài Supabase CLI và đăng nhập CLI:
```bash
supabase login
supabase link --project-ref YOUR_PROJECT_REF
supabase functions deploy admin-create-user
```
Function dùng `SUPABASE_URL`, `SUPABASE_PUBLISHABLE_KEYS` và `SUPABASE_SECRET_KEYS` do Supabase cung cấp trong môi trường Edge Functions. Secret key không được đưa vào repo.

Nếu dự án/CLI cũ không tự cung cấp `SUPABASE_SECRET_KEYS`, cập nhật Supabase CLI/runtime trước; không thêm secret key vào mã frontend.

## D. Đăng tài liệu lên GitHub
1. Thay URL và publishable key trong `index.html`.
2. Commit/push toàn bộ thư mục dự án lên GitHub.
3. Giữ thư mục `supabase/` trong repo để quản lý mã Edge Function và SQL.
4. Mở URL GitHub Pages. Tất cả thiết bị dùng cùng một Supabase project nên cùng xác thực được tài khoản.

## E. Cách tạo tài khoản cho người dùng
1. Admin đăng nhập.
2. Bấm **Quản lý tài khoản** ở thanh trên cùng.
3. Nhập nickname, mật khẩu và xác nhận mật khẩu.
4. Người dùng mở trang trên thiết bị bất kỳ và đăng nhập bằng nickname/mật khẩu được cấp.

## Ghi chú
- Nickname hỗ trợ 3–24 ký tự ASCII: chữ không dấu, số, `.`, `_`, `-`.
- Mật khẩu tối thiểu 6 ký tự; nên đặt mật khẩu mạnh hơn, không dùng mật khẩu dùng chung với dịch vụ khác.
- Email nội bộ dùng miền `.invalid`, chỉ làm định danh đăng nhập nội bộ, không gửi email.
- Mỗi tài khoản có thể đăng nhập trên nhiều thiết bị. Đăng xuất trên một thiết bị không tự đăng xuất các thiết bị khác.
- Nếu muốn thu hồi tài khoản, admin có thể vô hiệu hóa/xóa user trong Supabase Dashboard > Authentication > Users.
- Lớp khóa giao diện không thay thế phân quyền ở backend. Chức năng mô phỏng chạy ở trình duyệt; đây là cơ chế kiểm soát truy cập giao diện, không phải bảo vệ một máy chủ xử lý mạch.
