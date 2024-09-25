@echo off
echo Download Images...
call docker pull redis
call docker pull postgres
echo Run Containers...
call docker run -p 6379:6379 --name redis-hk -d redis
call docker run -p 5431:5432 --name postgre-hk -e POSTGRES_DB=proje -e POSTGRES_USER=adminhk -e POSTGRES_PASSWORD=12345 -d postgres
cls
echo Check Running Containers...
call docker ps --format '{{.Names}}'
pause