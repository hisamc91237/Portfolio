import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-[100] backdrop-blur-md bg-zinc-50/80 dark:bg-zinc-950/80 border-b border-zinc-200 dark:border-zinc-800 h-14 md:h-16 transition-colors duration-300">
      <div className="max-w-3xl mx-auto w-[95%] md:w-full h-full flex items-center justify-between border-x border-zinc-200 dark:border-zinc-800 px-4">
        {/* Logo / Branding */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="size-6 rounded-full overflow-hidden group-hover:scale-110 transition-transform">
            <img
              src="/newlogo.webp"
              alt="Logo"
              className="w-full h-full object-cover dark:invert transition-all duration-300"
            />
          </div>
          <span className="text-zinc-900 dark:text-zinc-50 font-medium text-sm hidden sm:block group-hover:opacity-70 transition-opacity">
            Hisamuddin Chandiwala
          </span>
        </Link>

        {/* Links */}
        <div className="flex items-center gap-6 text-xs sm:text-sm font-medium tracking-tighter">
          <Link
            to="/"
            className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/work"
            className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
          >
            Work
          </Link>
          <Link
            to="/resume"
            className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
          >
            Resume
          </Link>
        </div>
      </div>
    </nav>
  );
}
