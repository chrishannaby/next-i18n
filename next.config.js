const { IS_DEFAULT_LOCALE, LOCALE } = process.env;

module.exports = {
  reactStrictMode: true,
  basePath: IS_DEFAULT_LOCALE ? "" : `/${LOCALE}`,
  async rewrites() {
    if (IS_DEFAULT_LOCALE) {
      return [
        {
          source: "/de",
          destination: "https://next-i18n-zones-de.netlify.app/de",
        },
        {
          source: "/de/:path*",
          destination: "https://next-i18n-zones-de.netlify.app/de/:path*",
        },
      ];
    }
    return [];
  },
};
