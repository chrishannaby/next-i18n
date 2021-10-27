import Head from "next/head";
import Link from "next/link";
import { getHome, getPosts } from "../utils/prismic";

export default function Home({ title, posts }) {
  return (
    <>
      <Head>
        <title>Next.js | {title}</title>
      </Head>

      <main className="text-lg max-w-prose mx-auto">
        <h1 className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          {title}
        </h1>
        <ul className="pt-24 space-y-12">
          {posts.map((post) => {
            return (
              <li className="" key={post.id}>
                <Link href={`/posts/${post.uid}`}>
                  <a className="text-xl font-bold hover:underline">
                    {post.data.title[0].text}
                  </a>
                </Link>
                <p className="">{post.data.excerpt}</p>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
}

export async function getStaticProps({ params }) {
  const homeData = await getHome();
  const posts = await getPosts();
  return {
    props: {
      title: homeData.title[0].text,
      posts: posts.results,
    },
  };
}
