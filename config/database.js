const path = require("path");

module.exports = ({ env }) => {
  const isProduction = env("NODE_ENV") === "production";

  // ⭐ 로컬 개발 환경 = SQLite
  if (!isProduction) {
    return {
      connection: {
        client: "sqlite",
        connection: {
          filename: path.join(__dirname, "..", ".tmp/data.db"),
        },
        useNullAsDefault: true,
      },
    };
  }

  // ⭐ Render(배포) 환경 = PostgreSQL
  return {
    connection: {
      client: "postgres",
      connection: {
        connectionString: env("DATABASE_URL"),
        ssl: false,
      },
    },
  };
};
