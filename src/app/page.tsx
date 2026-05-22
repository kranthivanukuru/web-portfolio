export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816] text-white overflow-hidden">
      <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-[#050816]/80 backdrop-blur-xl">
        <div className="max-w-[2200px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 py-5 flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-bold tracking-wide">
            KV<span className="text-purple-500">.</span>
          </h1>

          <div className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
            <a className="text-purple-400" href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Skills</a>
            <a href="#">Projects</a>
            <a href="#">Experience</a>
            <a href="#">Contact</a>
          </div>

          <button className="hidden sm:block bg-purple-600 hover:bg-purple-500 transition-all duration-300 px-5 py-2 rounded-xl text-sm font-medium">
            Download CV
          </button>
        </div>
      </nav>

      <section className="relative w-full max-w-[2200px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 2xl:px-32 pt-40 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[90vh]">
        <div className="z-10 text-center lg:text-left">
          <p className="text-purple-400 text-lg md:text-xl mb-4">
            Hello, I&apos;m
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-[10rem] font-bold leading-none">
            Kranthi <br />
            <span className="text-purple-500">Vanukuru</span>
          </h1>

          <p className="mt-6 text-xl md:text-2xl text-zinc-300">
            Data Scientist | ML Engineer
          </p>

          <p className="mt-6 max-w-2xl text-zinc-400 leading-8 text-sm sm:text-base mx-auto lg:mx-0">
            I turn data into insights and build intelligent models that drive
            real-world impact using AI, cloud, and scalable data engineering.
          </p>

          <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4">
            <button className="bg-purple-600 hover:bg-purple-500 transition-all duration-300 px-7 py-3 rounded-xl font-medium shadow-[0_0_30px_rgba(168,85,247,0.35)]">
              View My Work →
            </button>

            <button className="border border-purple-500/50 hover:border-purple-400 transition-all duration-300 px-7 py-3 rounded-xl text-purple-300 font-medium">
              Contact Me →
            </button>
          </div>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto lg:mx-0">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4">
              <h3 className="text-2xl font-bold text-purple-400">10M+</h3>
              <p className="text-sm text-zinc-400 mt-1">Records Processed</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4">
              <h3 className="text-2xl font-bold text-purple-400">25+</h3>
              <p className="text-sm text-zinc-400 mt-1">Dashboards Built</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4">
              <h3 className="text-2xl font-bold text-purple-400">15+</h3>
              <p className="text-sm text-zinc-400 mt-1">End-to-End Projects</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4">
              <h3 className="text-2xl font-bold text-purple-400">30%</h3>
              <p className="text-sm text-zinc-400 mt-1">Cost Optimization</p>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-start">
          <div className="absolute inset-0 m-auto w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] bg-purple-600/30 blur-3xl rounded-full" />

          <div className="absolute top-8 right-4 sm:right-10 md:right-16 lg:right-0 z-20 hidden sm:block rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 shadow-xl">
            <p className="text-sm text-zinc-300">Model Performance</p>
            <p className="mt-3 text-3xl font-bold text-purple-400">
              AUC 0.92
            </p>
          </div>

          <img
            src="/profile.png"
            alt="Profile"
            className="relative z-10 w-[280px] sm:w-[360px] md:w-[460px] lg:w-[560px] xl:w-[650px] 2xl:w-[850px] object-contain drop-shadow-[0_0_70px_rgba(168,85,247,0.55)]"
          />
        </div>
      </section>

      <div className="relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent blur-3xl" />
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-pulse" />
      </div>
    </main>
  );
}