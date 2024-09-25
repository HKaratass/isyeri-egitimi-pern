cls
@echo off
cd ../server
echo Database Being Fiiled...
call npm run knex migrate:latest
call npm run knex seed:run
pause