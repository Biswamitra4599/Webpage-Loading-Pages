import { Link } from "react-router-dom";
import CategoryDropdown from "./header/CategoryDropdown";
import HeaderButton from "./header/HeaderButton";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="mx-auto max-w-[1440px] h-16 px-10 grid grid-cols-3 items-center">
        {/* Left */}
        <Link to="/" className="text-xl font-bold justify-self-start">
          ⚡ LoaderLab
        </Link>

        {/* Center */}
        <div className="justify-self-center">
          <CategoryDropdown />
        </div>

        {/* Right */}
        <div className="flex gap-3 justify-self-end">
          <HeaderButton
            label="GitHub"
            onClick={() => window.open("https://github.com")}
          />
          <HeaderButton
            label="Theme"
            onClick={() => alert("Theme toggle later")}
          />
          <HeaderButton label="About" onClick={() => alert("About page")} />
        </div>
      </div>
    </header>
  );
}
