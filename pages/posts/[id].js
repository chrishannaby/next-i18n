import { posts } from "../../utils/data";
import Link from "next/link";

export async function getStaticProps({ params }) {
  return {
    props: {
      id: params.id,
    }, // will be passed to the page component as props
  };
}

export async function getStaticPaths() {
  const paths = posts.map((p) => {
    return {
      params: {
        id: p,
      },
    };
  });
  return { paths, fallback: "blocking" };
}

export default function Post({ title, body }) {
  return (
    <>
      <div className="text-lg max-w-prose mx-auto">
        <h1 className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          {title}
        </h1>
      </div>
      <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
        <p>{body}</p>
      </div>
    </>
  );
}
