import SectionWrapper from './ui/SectionWrapper';
import CrossLine from './ui/CrossLine';

export default function Education() {
  return (
    <>
      <div id="education" className="scroll-mt-20">
        <div className="w-full h-fit border-b border-zinc-200 dark:border-zinc-800">
          <SectionWrapper>
            <div className="px-4 py-2">
              <h2 className="text-zinc-900 dark:text-zinc-50 font-medium text-3xl">Education</h2>
            </div>
          </SectionWrapper>
        </div>
      </div>
      
      <div className="w-full border-b border-zinc-200 dark:border-zinc-800">
        <SectionWrapper>
          <div className="py-4 px-2 flex flex-col gap-4">
            {/* Degree 1 */}
            <div className="flex items-start justify-between hover:bg-zinc-50 dark:hover:bg-zinc-900 rounded-xl p-2 transition-colors group">
              <div className="flex items-start gap-3">
                <div className="flex size-7 items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-800">
                  <div className="flex size-5 items-center justify-center rounded-md border border-zinc-900 dark:border-zinc-100 bg-white dark:bg-zinc-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6" />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col leading-tight">
                  <h2 className="text-zinc-900 dark:text-zinc-50 font-medium tracking-tighter">B.Tech in Electronics & Communication Engineering</h2>
                  <h2 className="text-zinc-600 dark:text-zinc-400 text-sm tracking-tighter">Lakshmi Narain College of Technology, Bhopal</h2>
                  <h4 className="sm:hidden text-zinc-500 font-medium text-xs mt-1">8.16 CGPA</h4>
                  <span className="text-zinc-400 font-mono text-[10px] mt-1 tracking-tighter">11.2022 - 06.2026</span>
                </div>
              </div>
              <h4 className="hidden sm:block text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-50 transition ease-in-out hover:underline text-sm font-medium">8.16 CGPA</h4>
            </div>

            {/* Degree 2 */}
            <div className="flex items-start justify-between hover:bg-zinc-50 dark:hover:bg-zinc-900 rounded-xl p-2 transition-colors group">
              <div className="flex items-start gap-3">
                <div className="flex size-7 items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-800">
                  <div className="flex size-5 items-center justify-center rounded-md border border-zinc-900 dark:border-zinc-100 bg-white dark:bg-zinc-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6" />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col leading-tight">
                  <h2 className="text-zinc-900 dark:text-zinc-50 font-medium tracking-tighter">Senior Secondary (Class XII)</h2>
                  <h2 className="text-zinc-600 dark:text-zinc-400 text-sm tracking-tighter">Ambuja Vidya Peeth, Rawan</h2>
                  <h4 className="sm:hidden text-zinc-500 font-medium text-xs mt-1">90%</h4>
                  <span className="text-zinc-400 font-mono text-[10px] mt-1 tracking-tighter">03.2020 - 05.2022</span>
                </div>
              </div>
              <h4 className="hidden sm:block text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-50 transition ease-in-out hover:underline text-sm font-medium">90%</h4>
            </div>
          </div>
        </SectionWrapper>
      </div>
      <CrossLine />
    </>
  );
}
