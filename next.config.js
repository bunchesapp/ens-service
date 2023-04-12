/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  rewrites: async () => ({
    beforeFiles: [
      {
        has: [
          {
            type: "host",
            value: "ens.bunches.io",
          },
        ],
        source: "/:path*",
        destination: "/api/:path*",
      },
    ],
  }),
  redirects: async () => [
    {
      has: [
        {
          type: "host",
          value: "ens.bunches.io",
        },
      ],
      source: "/api/:path*",
      destination: "/:path*",
      permanent: true,
    },
  ],
  headers: async () => [
    {
      source: "/api/:path*",
      headers: [
        { key: "Access-Control-Allow-Credentials", value: "true" },
        { key: "Access-Control-Allow-Origin", value: "*" },
        {
          key: "Access-Control-Allow-Methods",
          value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
        },
      ],
    },
    {
      has: [
        {
          type: "host",
          value: "ens.bunches.io",
        },
      ],
      source: "/:path*",
      headers: [
        { key: "Access-Control-Allow-Credentials", value: "true" },
        { key: "Access-Control-Allow-Origin", value: "*" },
        {
          key: "Access-Control-Allow-Methods",
          value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
        },
      ],
    },
  ],
};
