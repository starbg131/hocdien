@echo off
setlocal
cd /d "%~dp0"
where python >nul 2>nul
if errorlevel 1 (
  echo Khong tim thay Python. Hay cai Python 3.11+ va chon Add Python to PATH.
  pause
  exit /b 1
)
python -m pip install --upgrade pip
if errorlevel 1 goto error
python -m pip install pyinstaller
if errorlevel 1 goto error
pyinstaller --noconfirm --clean --onefile --windowed --name MoPhongDienCongNghiep --add-data "index.html;." launcher.py
if errorlevel 1 goto error
echo.
echo Tao EXE thanh cong:
echo %CD%\dist\MoPhongDienCongNghiep.exe
pause
exit /b 0
:error
echo.
echo Tao EXE that bai. Hay kiem tra Python va ket noi Internet.
pause
exit /b 1
