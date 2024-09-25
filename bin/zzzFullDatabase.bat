cls
@echo off
cd ../server
echo Database Formating...
call npm run knex migrate:rollback --all
echo Table Creating...
call npm run knex migrate:latest
echo Database Being Fiiled...
call npm run knex seed:run
pause