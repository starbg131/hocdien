-- Chạy sau khi đã tạo tài khoản quản trị viên đầu tiên trong Supabase Dashboard.
-- Ví dụ nickname quản trị viên là admin => email đăng nhập nội bộ:
-- nick_admin@users.mophong.invalid
-- Cập nhật app_metadata để cấp quyền admin (không sửa user_metadata).
update auth.users
set raw_app_meta_data =
  coalesce(raw_app_meta_data, '{}'::jsonb) || jsonb_build_object('role', 'admin')
where email = 'nick_admin@users.mophong.invalid';

-- Kiểm tra đã có đúng một tài khoản admin:
select id, email, raw_app_meta_data->>'role' as role
from auth.users
where email = 'nick_admin@users.mophong.invalid';
