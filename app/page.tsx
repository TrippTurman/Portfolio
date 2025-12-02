export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="max-w-4xl mx-auto px-4 py-16 space-y-16">
        {/* Hero */}
        <section className="space-y-4">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
            Software Developer • Robotics Programmer
          </p>
          <h1 className="text-4xl md:text-5xl font-bold">
            Hi, I&apos;m <span className="text-sky-400">Tripp Turman</span>.
          </h1>
          <p className="text-slate-300 max-w-xl">
            I develop software and robotics code for VEX V5 robots and
            tools like VexScoutSheet that help teams collect and use data.
          </p>
        </section>

        {/* Projects */}
        <section id="projects" className="space-y-6">
          <h2 className="text-2xl font-semibold">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-lg border border-slate-800 bg-slate-900/40 p-5 space-y-3">
              <h3 className="text-lg font-semibold">VexScoutSheet</h3>
              <p className="text-sm text-slate-300">
                A custom scout sheet editor for VEX competitions with RobotEvents
                API integration and local persistence.
              </p>
              <p className="text-xs text-slate-400">
                React Native · Expo · RobotEvents API
              </p>
              <div className="flex gap-3 text-sm">
                <a
                  href="https://vexscoutsheet.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:underline"
                >
                  View website
                </a>
              </div>
            </article>

            <article className="rounded-lg border border-slate-800 bg-slate-900/40 p-5 space-y-3">
              <h3 className="text-lg font-semibold">VEX Robotics Autonomous Code</h3>
              <p className="text-sm text-slate-300">
                Autonomous routines, PID tuning, and control code for our
                robots, focusing on consistency and helpful controls for 
                drivers.
              </p>
              <p className="text-xs text-slate-400">
                C++ · VEX V5 · VEXcode
              </p>
              <div className="flex gap-3 text-sm">
                <a
                  href="#"
                  className="text-sky-400 hover:underline"
                >
                  Code available upon request
                </a>
              </div>
            </article>
          </div>
        </section>

        {/* About */}
        <section id="about" className="space-y-3">
          <h2 className="text-2xl font-semibold">About</h2>
          <p className="text-slate-300 max-w-2xl">
            I&apos;m a student developer with a passion for programming. This
            has lead me to be a programmer for my VEX V5RC robotics team 44252C
            and where I program our robot to compete autonomously. When I&apos;m away
            from my team I love to develop useful apps and websites.
          </p>
        </section>

        {/* Contact */}
        <section id="contact" className="space-y-3">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="text-slate-300">
            The best way to reach me is by email.
          </p>
          <ul className="space-y-1 text-slate-300">
            <li>
              Email:{" "}
              <a
                href="mailto:trippturman3@gmail.com"
                className="text-sky-400 hover:underline"
              >
                trippturman3@gmail.com
              </a>
            </li>
            <li>
              GitHub:{" "}
              <a
                href="https://github.com/TrippTurman"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 hover:underline"
              >
                @TrippTurman
              </a>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
