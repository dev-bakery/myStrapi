module.exports = ({ env }) => ({
  "import-export-entries": {
    enabled: true,
    config: {
      serverPublicHostname: env("HOST", "http://localhost:1337"),
    },
  },
});
