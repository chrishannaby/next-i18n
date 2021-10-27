const Prismic = require("@prismicio/client");
const fetch = require("node-fetch");
const { IS_DEFAULT_LOCALE, NEXT_PUBLIC_PRISMIC_ENDPOINT } = process.env;

const buildHooks = {
  "en-us": "https://api.netlify.com/build_hooks/60ece721ccc8c3501d62be62",
  "de-de": "https://api.netlify.com/build_hooks/60ece7d77f8b5c5235bd67f3",
};

exports.handler = async (event, context) => {
  if (IS_DEFAULT_LOCALE) {
    const documentId = JSON.parse(event.body).documents[0];
    if (documentId) {
      const api = await Prismic.client(NEXT_PUBLIC_PRISMIC_ENDPOINT);
      const document = await api.getByID(documentId);
      const buildHook = buildHooks[document.lang];
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
