const { IS_DEFAULT_LOCALE, NEXT_PUBLIC_LOCALE } = process.env;

module.exports = {
  reactStrictMode: true,
  basePath: IS_DEFAULT_LOCALE ? "" : `/${NEXT_PUBLIC_LOCALE}`,
  async rewrites() {
    if (IS_DEFAULT_LOCALE) {
      return [
        {
          source: "/de-de",
          destination: "https://next-i18n-zones-de.netlify.app/de-de",
        },
        {
          source: "/de-de/:path*",
          destination: "https://next-i18n-zones-de.netlify.app/de-de/:path*",
        },
        {
          source: "/es-es",
          destination: "https://next-i18n-zones-es.netlify.app/es-es",
        },
        {
          source: "/de-de/:path*",
          destination: "https://next-i18n-zones-es.netlify.app/es-es/:path*",
        },
      ];
    }
    return [];
  },
};
