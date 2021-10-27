import Link from "next/link";
const { NEXT_PUBLIC_LOCALE } = process.env;

export default function Header() {
  return (
    <nav className="max-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
      <div className="  py-6 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <a>
              <span className="sr-only">Workflow</span>
              <img className="h-10 w-auto" src="/workflow-mark.svg" alt="" />
            </a>
          </Link>
        </div>
        {NEXT_PUBLIC_LOCALE === "en-us" ? (
          <Link href="/de-de">
            <a className="px-3 hover:underline">Deutsch</a>
          </Link>
        ) : (
          <a className="px-3 hover:underline" href="/">
            English
          </a>
        )}
      </div>
    </nav>
  );
}
