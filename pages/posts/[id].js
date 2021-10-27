import Head from "next/head";
import { RichText } from "prismic-reactjs";
import { getPosts, getPost } from "../../utils/prismic";

export async function getStaticProps({ params }) {
  const post = await getPost(params.id);
  return {
    props: {
      title: post.data.title[0].text,
      body: post.data.body,
    },
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();
  const paths = posts.results.map((post) => {
    return {
      params: {
        id: post.uid,
      },
    };
  });
  return { paths, fallback: "blocking" };
}

export default function Post({ title, body }) {
  return (
    <>
      <Head>
        <title>Next.js | {title}</title>
      </Head>
      <div className="text-lg max-w-prose mx-auto">
        <h1 className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          {title}
        </h1>
      </div>
      <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
        <RichText render={body} />
      </div>
    </>
  );
}
