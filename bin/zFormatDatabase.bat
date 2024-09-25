cls
@echo off
cd ../server
echo Database Formating...
call npm run knex migrate:rollback --all
pause