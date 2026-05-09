
export default function CrossLine() {
  return (
    <div className="relative w-full border-b border-zinc-200 dark:border-zinc-800 h-10 overflow-hidden">
      <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,#e5e7eb_0,#e5e7eb_2px,transparent_1px,transparent_10px)] dark:bg-[repeating-linear-gradient(45deg,#27272a_0,#27272a_2px,transparent_1px,transparent_10px)] opacity-30"></div>
      <div className="max-w-3xl mx-auto w-[95%] md:w-full h-full border-x border-zinc-200 dark:border-zinc-800 relative z-10"></div>
    </div>
  );
}
