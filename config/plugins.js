module.exports = ({ env }) => ({
  "import-export-entries": {
    enabled: true,
    config: {
      serverPublicHostname: env("HOST", "http://localhost:1337"),
    },
  },

  // 🔥 users-permissions 플러그인 설정 추가
  "users-permissions": {
    config: {
      jwtSecret: env("JWT_SECRET"),
    },
  },
});
