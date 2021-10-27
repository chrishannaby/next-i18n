const Prismic = require("@prismicio/client");
const fetch = require("node-fetch");
const { IS_DEFAULT_LOCALE } = process.env;

var apiEndpoint = "https://next-i18n.cdn.prismic.io/api/v2";

const buildHooks = {
  en: "https://api.netlify.com/build_hooks/60ece721ccc8c3501d62be62",
  de: "https://api.netlify.com/build_hooks/60ece7d77f8b5c5235bd67f3",
};

exports.handler = async (event, context) => {
  if (IS_DEFAULT_LOCALE) {
    const documentId = JSON.parse(event.body).documents[0];
    if (documentId) {
      const api = await Prismic.client(apiEndpoint);
      const document = await api.getByID(documentId);
      const lang = document.lang;
      const buildHook = buildHooks[lang.split("-")[0]];
      if (buildHook) {
        await fetch(buildHook, {
          method: "POST",
        });
      }
    }
  }
  return {
    statusCode: 200,
  };
};
