@echo off
set "tempFile=.\temp.bat"
set /p ip="Please access IP (127.0.0.1 for Local): "
echo Entrance IP: %ip%
(
    echo @echo off
    echo set "hostsFile=C:\Windows\System32\drivers\etc\hosts"
    echo (
    echo echo #
    echo echo #
    echo echo #
    echo echo # PERN STACK PROJE - Etkinlik v1.1
    echo echo # GAZİ ÜNİVRESİTESİ - İŞYERİ EĞİTİMİ
    echo echo # Author: Hasan Karataş
    echo echo 	%ip%       proje.isyeriegitimi.com
    echo echo 	%ip%       api.proje.isyeriegitimi.com
    echo echo 	%ip%       captcha.proje.isyeriegitimi.com
    echo echo #
    echo echo #
    echo echo #
    echo ^) ^>^> %%hostsFile%%
    echo echo Completed.
    echo echo Completed.
    echo echo Completed.
) >> %tempFile%

powershell -Command "& { Start-Process '.\temp.bat' -Verb RunAs }"
    echo Completed.
    echo Please press enter to finish.
    pause
    del %tempFile%
