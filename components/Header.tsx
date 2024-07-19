"use client";

export default function Header() {
  return (
    <header className="bg-blue-900 shadow-md">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <h2 className="text-md font-bold text-white">Library</h2>
          </a>
        </div>
        <div className="flex flex-1 justify-end">
          <div>
          </div>
        </div>
      </nav>
    </header>
  );
}
