require("dotenv").config();
module.exports = {
    development: {
        client: "pg",
        connection: {
            host: process.env.DATABASE_HOST,
            database: process.env.DATABASE_NAME,
            user: process.env.DATABASE_USER,
            port: process.env.DATABASE_PORT,
            password: process.env.DATABASE_PASSWORD
        },
        migrations: {
            directory: "./models/migrations"
        },
        seeds: {
            directory: "./models/seeds"
        }
    },
    production: {
        
    }
}
