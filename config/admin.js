module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e2da1c3e09bcc40eb8bfa0da8c0b3171'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', '978559a03094657d92ebf34f48d43bb9'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', '7ca1dedae4898b8be0e4efc9fa097dc8'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
