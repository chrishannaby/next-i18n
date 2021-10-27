import Head from "next/head";
import Link from "next/link";
import { posts } from "../utils/data";

export default function Home({ title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <main className="text-lg max-w-prose mx-auto">
        <h1 className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Posts
        </h1>
        <ul>
          {posts.map((post) => {
            return (
              <li key={post}>
                <Link href={`/posts/${post}`}>
                  <a>{post}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
}
