@echo off
cd ../client
call npm i
cd ../server
call npm i
cd ../captcha
wsl pip install --no-cache-dir -r requirements.txt
pause