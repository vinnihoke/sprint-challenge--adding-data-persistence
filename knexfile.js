module.exports = {
    development: {
        client: "sqlite3",
        useNullAsDefault: true,
        connection: {
            filename: "./data/project-sprint.db3"
        },
        migrations: {
            directory: "./data/migrations"
        },
        seeds: {
            directory: "./data/seeds"
        },
        pool: {
            afterCreate: (connection, done) => {
                connection.run("PRAGMA foreign_keys = ON", done);
            }
        }
    }
}

// This file must be called knexfile.js or nothing will work.