import Link from "next/link";

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
        <div className="flex items-center divide-x divide-gray-900">
          <a className="px-3" href="/">
            English
          </a>
          <Link href="/de">
            <a className="px-3">Deutsch</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
