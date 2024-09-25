@echo off
setlocal enabledelayedexpansion

set desktopPath="%USERPROFILE%\Desktop\Project Events"
mkdir %desktopPath%

set "binPath=%cd%\bin"
set "iconsPath=%cd%\bin\icons"

powershell -Command "& { $WshShell = New-Object -ComObject WScript.Shell; $Shortcut = $WshShell.CreateShortcut('!desktopPath!\Open Code With VS.lnk'); $Shortcut.TargetPath = '!binPath!\openCode.bat'; $Shortcut.IconLocation = '!iconsPath!\vscode.ico'; $Shortcut.WorkingDirectory = '!binPath!'; $Shortcut.Save() }"
echo Created Open Code
powershell -Command "& { $WshShell = New-Object -ComObject WScript.Shell; $Shortcut = $WshShell.CreateShortcut('!desktopPath!\Start Server.lnk'); $Shortcut.TargetPath = '!binPath!\startServer.bat'; $Shortcut.IconLocation = '!iconsPath!\server.ico'; $Shortcut.WorkingDirectory = '!binPath!'; $Shortcut.Save() }"
echo Created Start Server
powershell -Command "& { $WshShell = New-Object -ComObject WScript.Shell; $Shortcut = $WshShell.CreateShortcut('!desktopPath!\Start Client.lnk'); $Shortcut.TargetPath = '!binPath!\startClient.bat'; $Shortcut.IconLocation = '!iconsPath!\client.ico'; $Shortcut.WorkingDirectory = '!binPath!'; $Shortcut.Save() }"
echo Created Start Client
powershell -Command "& { $WshShell = New-Object -ComObject WScript.Shell; $Shortcut = $WshShell.CreateShortcut('!desktopPath!\Start Captcha Server.lnk'); $Shortcut.TargetPath = '!binPath!\startCaptchaServer.bat'; $Shortcut.IconLocation = '!iconsPath!\captcha.ico'; $Shortcut.WorkingDirectory = '!binPath!'; $Shortcut.Save() }"
echo Created Start Captcha
powershell -Command "& { $WshShell = New-Object -ComObject WScript.Shell; $Shortcut = $WshShell.CreateShortcut('!desktopPath!\Add URL to Hosts.lnk'); $Shortcut.TargetPath = '!binPath!\addHosts.bat'; $Shortcut.IconLocation = '!iconsPath!\hosts.ico'; $Shortcut.WorkingDirectory = '!binPath!'; $Shortcut.Save() }"
echo Created Add Hosts
powershell -Command "& { $WshShell = New-Object -ComObject WScript.Shell; $Shortcut = $WshShell.CreateShortcut('!desktopPath!\Format Database.lnk'); $Shortcut.TargetPath = '!binPath!\zFormatDatabase.bat'; $Shortcut.IconLocation = '!iconsPath!\database.ico'; $Shortcut.WorkingDirectory = '!binPath!'; $Shortcut.Save() }"
echo Created Database Formatter
powershell -Command "& { $WshShell = New-Object -ComObject WScript.Shell; $Shortcut = $WshShell.CreateShortcut('!desktopPath!\Fill Database.lnk'); $Shortcut.TargetPath = '!binPath!\zzFillDatabase.bat'; $Shortcut.IconLocation = '!iconsPath!\database.ico'; $Shortcut.WorkingDirectory = '!binPath!'; $Shortcut.Save() }"
echo Created Database Filler
powershell -Command "& { $WshShell = New-Object -ComObject WScript.Shell; $Shortcut = $WshShell.CreateShortcut('!desktopPath!\Format + Fill Database.lnk'); $Shortcut.TargetPath = '!binPath!\zzzFullDatabase.bat'; $Shortcut.IconLocation = '!iconsPath!\database.ico'; $Shortcut.WorkingDirectory = '!binPath!'; $Shortcut.Save() }"
echo Created Database FF
powershell -Command "& { $WshShell = New-Object -ComObject WScript.Shell; $Shortcut = $WshShell.CreateShortcut('!desktopPath!\Format + Fill Public.lnk'); $Shortcut.TargetPath = '!binPath!\zzzzFormatPublic.bat'; $Shortcut.IconLocation = '!iconsPath!\database.ico'; $Shortcut.WorkingDirectory = '!binPath!'; $Shortcut.Save() }"
echo Created Public Copy

powershell -Command "& { $WshShell = New-Object -ComObject WScript.Shell; $Shortcut = $WshShell.CreateShortcut('!desktopPath!\Install Dependecies.lnk'); $Shortcut.TargetPath = '!binPath!\installdependencies.bat'; $Shortcut.IconLocation = '!iconsPath!\install.ico'; $Shortcut.WorkingDirectory = '!binPath!'; $Shortcut.Save() }"
echo Created Install Dependecies
powershell -Command "& { $WshShell = New-Object -ComObject WScript.Shell; $Shortcut = $WshShell.CreateShortcut('!desktopPath!\Docker Setup.lnk'); $Shortcut.TargetPath = '!binPath!\dockersetup.bat'; $Shortcut.IconLocation = '!iconsPath!\dockersetup.ico'; $Shortcut.WorkingDirectory = '!binPath!'; $Shortcut.Save() }"
echo Created Docker Setup
powershell -Command "& { $WshShell = New-Object -ComObject WScript.Shell; $Shortcut = $WshShell.CreateShortcut('!desktopPath!\Docker Start.lnk'); $Shortcut.TargetPath = '!binPath!\dockerstart.bat'; $Shortcut.IconLocation = '!iconsPath!\dockerstart.ico'; $Shortcut.WorkingDirectory = '!binPath!'; $Shortcut.Save() }"
echo Created Docker Start
powershell -Command "& { $WshShell = New-Object -ComObject WScript.Shell; $Shortcut = $WshShell.CreateShortcut('!desktopPath!\Docker Stop.lnk'); $Shortcut.TargetPath = '!binPath!\dockerstop.bat'; $Shortcut.IconLocation = '!iconsPath!\dockerstop.ico'; $Shortcut.WorkingDirectory = '!binPath!'; $Shortcut.Save() }"
echo Created Docker Stop




pause
explorer.exe %desktopPath%