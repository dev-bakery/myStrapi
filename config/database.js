const path = require("path");

module.exports = ({ env }) => {
  // production일 때만 postgres, 나머지는 무조건 sqlite
  const isProduction = env("NODE_ENV") === "production";

  if (!isProduction) {
    return {
      connection: {
        client: "sqlite",
        connection: {
          filename: path.join(__dirname, "..", env("DATABASE_FILENAME", ".tmp/data.db")),
        },
        useNullAsDefault: true,
      },
    };
  }

  // production → postgres
  return {
    connection: {
      client: "postgres",
      connection: {
        connectionString: env("DATABASE_URL"),
        ssl: env.bool("DATABASE_SSL", false) ? { rejectUnauthorized: false } : false,
      },
      pool: {
        min: 2,
        max: 10,
      },
      acquireConnectionTimeout: 60000,
    },
  };
};
