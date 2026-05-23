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

      <section id="about" className="max-w-[2200px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 2xl:px-32 py-28 grid grid-cols-1 lg:grid-cols-2 gap-28 items-center">
        <div>
          <p className="text-purple-400 text-sm uppercase tracking-widest mb-4">
            About Me
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Curious mind. <br />
            <span className="text-purple-500">Data driven.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-zinc-400 leading-8">
            I’m a Data Scientist with a strong foundation in statistics, machine
            learning, and data engineering. I enjoy solving complex problems,
            uncovering patterns, and building data-driven solutions that create
            real business value.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-sm text-zinc-400">
            <span>📍 Chicago, IL</span>
            <span>💼 Data Scientist</span>
            <span>☁️ Cloud & ML</span>
            <span>⚙️ Data Engineering</span>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 max-w-xl">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5">
              <h3 className="text-3xl font-bold text-purple-400">4+</h3>
              <p className="mt-2 text-zinc-400 text-sm">
                Years Experience
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5">
              <h3 className="text-3xl font-bold text-purple-400">AWS</h3>
              <p className="mt-2 text-zinc-400 text-sm">
                Cloud & ML Engineering
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5">
              <h3 className="text-3xl font-bold text-purple-400">PySpark</h3>
              <p className="mt-2 text-zinc-400 text-sm">
                Big Data Processing
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5">
              <h3 className="text-3xl font-bold text-purple-400">AI/ML</h3>
              <p className="mt-2 text-zinc-400 text-sm">
                Predictive Analytics
              </p>
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center">

          {/* Outer Glow */}
          <div className="absolute w-[500px] h-[500px] rounded-full bg-purple-700/20 blur-[140px]" />

          {/* Rotating Container */}
          <div className="relative w-[360px] h-[360px] animate-spin-slow">

            {/* Main Globe */}
            <div className="absolute inset-0 rounded-full border border-purple-500/30 bg-purple-900/10 backdrop-blur-xl overflow-hidden">

              {/* Latitude Rings */}
              <div className="absolute inset-6 rounded-full border border-purple-400/20"></div>
              <div className="absolute inset-14 rounded-full border border-purple-400/15"></div>
              <div className="absolute inset-24 rounded-full border border-purple-400/10"></div>

              {/* Vertical */}
              <div className="absolute left-1/2 top-0 h-full w-px bg-purple-400/20"></div>

              {/* Horizontal */}
              <div className="absolute top-1/2 left-0 w-full h-px bg-purple-400/20"></div>

              {/* Diagonal */}
              <div className="absolute left-1/2 top-0 h-full w-px bg-purple-400/10 rotate-45"></div>

              {/* Glow Dots */}
              <div className="absolute top-10 left-1/2 w-3 h-3 bg-purple-300 rounded-full shadow-[0_0_25px_#c084fc]" />

              <div className="absolute bottom-14 right-12 w-2 h-2 bg-purple-400 rounded-full shadow-[0_0_20px_#a855f7]" />

              <div className="absolute top-24 left-10 w-2 h-2 bg-purple-500 rounded-full shadow-[0_0_20px_#9333ea]" />
            </div>

            {/* Orbit Ring 1 */}
            <div className="absolute inset-[-20px] rounded-full border border-purple-500/10"></div>

            {/* Orbit Ring 2 */}
            <div className="absolute inset-[-40px] rounded-full border border-purple-500/5"></div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section
        id="skills"
        className="max-w-[2200px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 2xl:px-32 py-28"
      >
        <div className="mb-14">
          <p className="text-purple-400 text-sm uppercase tracking-widest mb-4">
            My Tech Stack
          </p>

          <h2 className="text-4xl md:text-6xl font-bold">
            Tools & Technologies <br />
            <span className="text-purple-500">I Work With</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">
          {/* Languages */}
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:border-purple-500/40 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-6">
              Languages
            </h3>

            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl">🐍</div>
                <p className="mt-2 text-sm text-zinc-400">Python</p>
              </div>

              <div>
                <div className="text-4xl">🗄️</div>
                <p className="mt-2 text-sm text-zinc-400">SQL</p>
              </div>

              <div>
                <div className="text-4xl">📊</div>
                <p className="mt-2 text-sm text-zinc-400">R</p>
              </div>
            </div>
          </div>

          {/* Data Science */}
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:border-purple-500/40 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-6">
              Data Science / ML
            </h3>

            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl">📈</div>
                <p className="mt-2 text-sm text-zinc-400">Pandas</p>
              </div>

              <div>
                <div className="text-4xl">🧠</div>
                <p className="mt-2 text-sm text-zinc-400">TensorFlow</p>
              </div>

              <div>
                <div className="text-4xl">🤖</div>
                <p className="mt-2 text-sm text-zinc-400">Scikit</p>
              </div>

              <div>
                <div className="text-4xl">🔥</div>
                <p className="mt-2 text-sm text-zinc-400">PyTorch</p>
              </div>

              <div>
                <div className="text-4xl">📊</div>
                <p className="mt-2 text-sm text-zinc-400">XGBoost</p>
              </div>

              <div>
                <div className="text-4xl">📓</div>
                <p className="mt-2 text-sm text-zinc-400">Jupyter</p>
              </div>
            </div>
          </div>

          {/* Data Engineering */}
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:border-purple-500/40 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-6">
              Data Engineering
            </h3>

            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl">⚡</div>
                <p className="mt-2 text-sm text-zinc-400">PySpark</p>
              </div>

              <div>
                <div className="text-4xl">🔥</div>
                <p className="mt-2 text-sm text-zinc-400">Kafka</p>
              </div>

              <div>
                <div className="text-4xl">🌊</div>
                <p className="mt-2 text-sm text-zinc-400">Airflow</p>
              </div>

              <div>
                <div className="text-4xl">🧊</div>
                <p className="mt-2 text-sm text-zinc-400">Iceberg</p>
              </div>

              <div>
                <div className="text-4xl">🛢️</div>
                <p className="mt-2 text-sm text-zinc-400">Hive</p>
              </div>

              <div>
                <div className="text-4xl">🔄</div>
                <p className="mt-2 text-sm text-zinc-400">ETL</p>
              </div>
            </div>
          </div>

          {/* AWS */}
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:border-purple-500/40 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-6">
              AWS / Cloud
            </h3>

            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl">☁️</div>
                <p className="mt-2 text-sm text-zinc-400">S3</p>
              </div>

              <div>
                <div className="text-4xl">🧠</div>
                <p className="mt-2 text-sm text-zinc-400">SageMaker</p>
              </div>

              <div>
                <div className="text-4xl">📊</div>
                <p className="mt-2 text-sm text-zinc-400">Athena</p>
              </div>

              <div>
                <div className="text-4xl">⚙️</div>
                <p className="mt-2 text-sm text-zinc-400">Lambda</p>
              </div>

              <div>
                <div className="text-4xl">📈</div>
                <p className="mt-2 text-sm text-zinc-400">CloudWatch</p>
              </div>

              <div>
                <div className="text-4xl">🚀</div>
                <p className="mt-2 text-sm text-zinc-400">Step Functions</p>
              </div>
            </div>
          </div>

          {/* Visualization */}
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:border-purple-500/40 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-6">
              Visualization / BI
            </h3>

            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl">📉</div>
                <p className="mt-2 text-sm text-zinc-400">Tableau</p>
              </div>

              <div>
                <div className="text-4xl">📊</div>
                <p className="mt-2 text-sm text-zinc-400">Power BI</p>
              </div>

              <div>
                <div className="text-4xl">📈</div>
                <p className="mt-2 text-sm text-zinc-400">Plotly</p>
              </div>

              <div>
                <div className="text-4xl">📋</div>
                <p className="mt-2 text-sm text-zinc-400">Excel</p>
              </div>

              <div>
                <div className="text-4xl">📉</div>
                <p className="mt-2 text-sm text-zinc-400">Seaborn</p>
              </div>

              <div>
                <div className="text-4xl">📊</div>
                <p className="mt-2 text-sm text-zinc-400">Matplotlib</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section
        id="projects"
        className="max-w-[2200px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 2xl:px-32 py-28"
      >
        <div className="flex items-end justify-between mb-14">
          <div>
            <p className="text-purple-400 text-sm uppercase tracking-widest mb-4">
              Featured Projects
            </p>
            <h2 className="text-4xl md:text-6xl font-bold">
              Selected <span className="text-purple-500">Work</span>
            </h2>
          </div>

          <a href="#" className="hidden md:block text-purple-400 hover:text-purple-300">
            View all projects →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {[
            {
              title: "FEPDO Reconciliation Automation",
              tag: "Data Engineering",
              desc: "Automated FEP data reconciliation using PySpark, Glue, and Athena. Reduced processing time and improved data accuracy.",
              tech: ["PySpark", "Glue", "Athena", "S3"],
            },
            {
              title: "Iceberg Optimization Pipeline",
              tag: "Data Lake",
              desc: "Optimized Iceberg tables with partitioning and compaction strategies for faster analytics queries.",
              tech: ["Iceberg", "AWS Glue", "Athena"],
            },
            {
              title: "Step Function Monitoring Dashboard",
              tag: "Cloud / Observability",
              desc: "Built monitoring dashboards for AWS Step Functions using CloudWatch, Athena, and reporting tables.",
              tech: ["CloudWatch", "Athena", "AWS"],
            },
            {
              title: "Lightbeam Data Pipelines",
              tag: "Healthcare Analytics",
              desc: "Developed scalable eligibility and patient attribute pipelines for healthcare analytics and reporting.",
              tech: ["AWS Glue", "Kafka", "Redshift"],
            },
          ].map((project) => (
            <div
              key={project.title}
              className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-600/20 text-2xl">
                ⚡
              </div>

              <span className="rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300">
                {project.tag}
              </span>

              <h3 className="mt-5 text-2xl font-bold">{project.title}</h3>

              <p className="mt-4 text-sm leading-7 text-zinc-400">{project.desc}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <button className="mt-8 text-purple-400 group-hover:text-purple-300">
                View Case Study →
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}