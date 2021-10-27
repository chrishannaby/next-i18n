import Prismic from "@prismicio/client";
const locale = process.env.NEXT_PUBLIC_LOCALE;

async function getApi() {
  return await Prismic.client(process.env.NEXT_PUBLIC_PRISMIC_ENDPOINT);
}

export async function getHome() {
  const api = await getApi();
  const home = await api.getSingle("h", {
    lang: locale,
  });
  return home.data;
}

export async function getPost(slug) {
  const api = await getApi();
  const post = await api.getByUID("post", slug, {
    lang: locale,
  });
  return post;
}

export async function getPosts() {
  const api = await getApi();
  const posts = await api.query(Prismic.Predicates.at("document.type", "post"));
  return posts;
}
