module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "local-admin-jwt-secret"),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT", "local-api-token-salt"),
  },
});
