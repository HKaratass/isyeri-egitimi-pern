cls
@echo off
cd ../server/public
rmdir /s /q Contents
rmdir /s /q Images
xcopy /s /e /y "..\..\zsalt_public_files\" ".\"
pause