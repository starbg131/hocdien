MO PHONG DIEN CONG NGHIEP — BAN 0.4 (TIENG VIET)

CHAY:
- Mo index.html bang Chrome hoac Edge.

CHUC NANG CAP NHAT:
1. Nut nhan NO/NC la nut nhan nhả: moi lan bam tao xung nhan khoang 0,3 giay va tu nha.
   Trong luc nhan, NO dong va NC mo. Khi tha, NO mo va NC dong lai.
2. Mau day:
   - Che do Tu dong theo chan: day pha (L/L1/L2/L3/R/S/T) mau do;
     day trung tinh (N) mau xanh duong; DC+ mau do; 0V mau xanh duong;
     PE mau xanh la; cac ket noi khac mau trang/xam.
   - Co the chon mau day thu cong truoc khi noi.
3. Di day theo diem click:
   - Chon chan dau tien.
   - Click cac diem tren nen so do de tao cac diem be goc/quan dao.
   - Chon chan cuoi de hoan tat duong day.
   - Diem be goc duoc luu trong file JSON cung voi so do.
4. Mo phong logic co ban, cap nguon, contactor/relay, den va tai theo phien ban thu nghiem.

TAO FILE EXE WINDOWS:
- Cai Python 3.11+ va chon Add Python to PATH.
- Tren Windows, giai nen goi nay va chay build_windows.bat.
- File EXE duoc tao tai dist\MoPhongDienCongNghiep.exe.

GIOI HAN / AN TOAN:
Day la bo mo phong logic co ban, chua phai bo giai mach vat ly day du.
Mau day tu dong dua tren ten chan pho bien, khong phai tieu chuan mau day ap dung
cho moi quoc gia/loai he thong. Kiem tra lai quy uoc va tai lieu dung model.
Khong dung phan mem de thi cong/nghiem thu truc tiep. Khong dau dien that dua
tren mo phong nay.


CAP NHAT QUY DAO DAY (BAN 0.5):
- Chon chan dau bang click chuot trai.
- Trong luc dang noi day, click chuot phai tren nen so do de them mot diem quy dao.
- Co the click phai nhieu lan de tao nhieu doan re.
- Click chuot trai vao chan dich de hoan tat day.
- Nhan ESC de huy thao tac noi day dang thuc hien.


PHIÊN BẢN 0.6 - CẬP NHẬT THAO TÁC
- Nút nhấn NO/NC và công tắc hành trình: giữ chuột trái trên thiết bị trong sơ đồ để giữ trạng thái NHẤN; thả chuột để trở về NHẢ.
- Dây nối tự tạo các đoạn ngang/dọc vuông góc, không vẽ chéo.
- Khi đang nối dây: chọn chân đầu, click chuột phải trên nền để thêm góc, chọn chân đích để kết thúc.
- Sau khi nối xong, các chấm xanh tại góc dây có thể kéo để căn chỉnh đường đi.


PHIÊN BẢN 0.7 - SỬA CÁCH ĐIỀU KHIỂN NÚT NHẤN
- Nút chức năng NHẤN nằm trong bảng thuộc tính bên phải.
- Chọn nút nhấn NO/NC trên sơ đồ, sau đó nhấn giữ nút chức năng bên phải để mô phỏng nhấn.
- Thả chuột khỏi nút chức năng để trở về NHẢ.
- Thiết bị trên sơ đồ không còn bị dùng làm nút nhấn; vẫn kéo di chuyển được bình thường.


PHIÊN BẢN 0.8 - THƯ VIỆN ẢNH THIẾT BỊ
- Thư mục assets chứa ảnh riêng cho từng thiết bị: aptomat 1P/2P/3P, contactor 2P/3P, relay nhiệt, relay trung gian, timer, nút nhấn, đèn báo, nguồn 24V, biến tần và motor.
- Thư viện bên trái hiển thị ảnh thiết bị; có thể click để thêm hoặc kéo thả trực tiếp lên bảng.
- Thiết bị trên bảng hiển thị ảnh, nhãn và các chấm chân đấu nối có thể click để nối dây.
- Kéo thân thiết bị để di chuyển; kéo chấm xanh trên dây để căn chỉnh góc.
- Ảnh là hình minh họa tham khảo được tích hợp vào giao diện; bố trí chân trên mô hình là điểm kết nối logic của phần mềm, không khẳng định trùng hoàn toàn với mọi mã sản phẩm thực tế.


PHIÊN BẢN 0.9 - CHÂN ĐẤU HAI BÊN VÀ TIẾP ĐIỂM PHỤ
- Aptomat: chân đầu vào IN-L/IN-N ở bên trái; chân đầu ra OUT-L/OUT-N ở bên phải.
- Aptomat 3 pha: R1/S1/T1 bên trái; R2/S2/T2 bên phải.
- Contactor 2P/3P: các chân nguồn L/1L ở bên trái, chân tải T/2T ở bên phải.
- Contactor bổ sung tiếp điểm phụ: 13-14 thường mở (NO), 21-22 thường đóng (NC), cùng chân cuộn hút A1/A2.
- Relay nhiệt: L1/L2/L3 bên trái; T1/T2/T3 bên phải; 95-96 thường đóng và 97-98 thường mở.
- Các điểm đấu dây nằm ở hai cạnh thiết bị; các thiết bị khác cũng chia chân thành hai phía theo nhóm chân.
- Điểm điều chỉnh góc dây được ẩn mặc định. Click vào một đoạn dây để chọn dây; các chấm tròn điều chỉnh mới hiện ra. Click lại đoạn dây hoặc chọn thiết bị khác để bỏ chọn. Dùng nút Xóa thiết bị/dây để xóa dây đang chọn.
- Đây là bố trí chân logic tham khảo; cần đối chiếu sơ đồ terminal của đúng mã thiết bị trước khi áp dụng thực tế.


PHIÊN BẢN 1.0 - SỬA ẢNH VÀ TIẾP ĐIỂM CONTACTOR
- Làm mới ảnh thiết bị trong thư viện bằng các ảnh cắt riêng, độ phân giải cao hơn; bổ sung tham chiếu href và xlink:href để ảnh hiển thị ổn định trong SVG trên Chrome/Edge.
- Contactor 2P/3P có các chân chính chia hai bên: L1/L2/L3 ở bên trái, T1/T2/T3 ở bên phải.
- Chân cuộn hút A1/A2 và tiếp điểm phụ 13-14 (NO), 21-22 (NC) được hiển thị trên hai cạnh thiết bị.
- Mô phỏng tiếp điểm theo đúng tên chân: tiếp điểm chính L1-T1/L2-T2/L3-T3 đóng khi cuộn hút có điện; 13-14 đóng khi hút; 21-22 đóng khi nhả.
- Aptomat 1P/2P: IN-L/IN-N nối với OUT-L/OUT-N khi bật. Aptomat 3P: R1-R2, S1-S2, T1-T2 khi bật.
- Lưu ý: ảnh là hình minh họa sản phẩm, sơ đồ chân logic cần đối chiếu datasheet của mã thiết bị thật.


PHIÊN BẢN 1.1 - CHÂN ĐẤU TRÊN/DƯỚI VÀ KÝ HIỆU SƠ ĐỒ
- Chuyển toàn bộ chân đấu nối từ hai cạnh trái/phải sang hai hàng trên/dưới thiết bị.
- Aptomat: IN-L/IN-N hoặc R1/S1/T1 ở hàng trên; OUT-L/OUT-N hoặc R2/S2/T2 ở hàng dưới.
- Contactor: L1/L2/L3, A1 và các chân đầu vào của tiếp điểm phụ ở hàng trên; T1/T2/T3, A2 và chân đầu ra tương ứng ở hàng dưới.
- Relay nhiệt: L1/L2/L3, 95/97 ở hàng trên; T1/T2/T3, 96/98 ở hàng dưới.
- Các thiết bị còn lại cũng được chia chân theo nhóm đầu vào ở hàng trên, đầu ra ở hàng dưới.
- Bên cạnh ảnh thiết bị có khung ký hiệu sơ đồ (QF, KM, FR, KA, SB, HL, M, VFD, PLC...). Contactor có minh họa tiếp điểm phụ NO 13-14 và NC 21-22 ngay cạnh ảnh.
- Kéo thiết bị để di chuyển; click vào các chân tròn trên/dưới để nối dây.
- Ký hiệu và bố trí chân là mô hình tham khảo; cần đối chiếu sơ đồ terminal/datasheet của đúng mã thiết bị khi học đấu nối thực tế.


PHIÊN BẢN 1.2 - THU PHÓNG BẢNG VÀ ĐỔI KÍCH THƯỚC THIẾT BỊ
- Giữ Ctrl và cuộn bánh xe chuột trên bảng mạch để phóng to/thu nhỏ toàn bộ sơ đồ. Tâm thu phóng bám theo vị trí con trỏ; giới hạn 30%-350%.
- Rê chuột lên thiết bị (hoặc chọn thiết bị) để hiện chấm tròn ở góc dưới bên phải.
- Kéo chấm tròn ở góc để thay đổi kích thước riêng thiết bị; giới hạn 55%-220%.
- Các chân đấu dây và dây nối tự cập nhật vị trí khi thay đổi kích thước thiết bị.
- Thả chuột để kết thúc thao tác thay đổi kích thước.


PHIÊN BẢN 1.3 - SỬA MÔ PHỎNG CÓ ĐIỆN VÀ RELAY TRUNG GIAN
- Khi chạy mô phỏng, dây nối thuộc mạng điện đã được cấp nguồn sẽ đổi sang màu vàng sáng, tăng độ dày và có hiệu ứng nhấp nháy nhẹ; dây ở phía sau tiếp điểm đang mở không sáng.
- Thiết bị có cuộn hút (contactor, relay trung gian, timer) hiển thị trạng thái ĐANG HÚT/ĐÓNG khi hai đầu cuộn được nối vào hai cực nguồn khác nhau.
- Tải như đèn, còi, van điện từ hiển thị ĐANG HOẠT ĐỘNG/ĐANG CÓ NGUỒN khi được cấp nguồn qua hai đầu tải.
- Bổ sung logic tiếp điểm relay trung gian: khi cuộn hút chưa có điện, 11-12 và 21-22 đóng (NC), 11-14 và 21-24 mở (NO); khi cuộn hút có điện, trạng thái đảo lại.
- Bổ sung ký hiệu tiếp điểm NO/NC ngay cạnh hình relay trung gian và bảng thuộc tính liệt kê các cặp chân.
- Timer: 15-16 là NC khi chưa tác động; 15-18 là NO khi tác động.
- Lưu ý: bộ mô phỏng hiện là mô hình logic cơ bản, chưa mô phỏng đầy đủ điện áp/dòng điện, định thời thực, quá tải, ngắn mạch hoặc mọi cấu hình dây phức tạp.
\n\nBổ sung phiên bản 2.4:\n- Relay nhiệt FR: đầu động lực L1/L2/L3 và T1/T2/T3; tiếp điểm phụ 95-96 (NC), 97-98 (NO). Có nút mô phỏng quá tải/reset để kiểm tra trạng thái tiếp điểm.\n- Motor 3 pha: hình thiết bị, ký hiệu M 3~, các chân U/V/W/PE và trạng thái chạy khi đủ ba pha.\n

DANG KY / DANG NHAP NICKNAME (BAN WEB TINH):
- Mo trang se hien man hinh Dang nhap / Dang ky.
- Dang ky bang nickname 3-24 ky tu va mat khau toi thieu 6 ky tu.
- Tai khoan va mat khau da bam (PBKDF2) duoc luu trong localStorage cua trinh duyet hien tai.
- Phien dang nhap duoc nho trong tab trinh duyet; co nut Dang xuat tren thanh tren cung.
- Tai khoan khong dong bo giua cac may/trinh duyet va co the mat neu xoa du lieu trang web.
- Day la lop chan giao dien co ban cho ban web tinh, KHONG phai xac thuc bao mat may chu.
  Neu can tai khoan dung chung cho nhieu nguoi/may va phan quyen bao mat that su, can backend
  (vi du Firebase Authentication, Supabase Auth hoac server rieng).
- Nen mo qua HTTPS (GitHub Pages) hoac localhost de su dung Web Crypto.
