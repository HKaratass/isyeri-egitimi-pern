@echo off
call docker start redis-hk
call docker start postgre-hk
cls
echo Check Running Containers...
call docker ps --format '{{.Names}}'
pause