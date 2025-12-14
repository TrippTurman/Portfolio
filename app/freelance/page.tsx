export default function FreelancePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="max-w-3xl mx-auto px-4 py-16 space-y-10">
        <section className="space-y-4">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
            Websites • Apps • Debugging
          </p>
          <h1 className="text-3xl md:text-4xl font-bold">
            Freelance development services
          </h1>
          <p className="text-slate-300">
            I help individuals, small teams, and organizations build clean,
            functional software — from websites and tools to robotics-related
            projects.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">What I can help with</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>Portfolio / personal websites</li>
            <li>Small web apps and tools</li>
            <li>General programming projects and troubleshooting</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">How it works</h2>
          <ol className="list-decimal list-inside space-y-2 text-slate-300">
            <li>You reach out and describe what you need built or fixed.</li>
            <li>I respond with questions, a rough scope, and an estimate.</li>
            <li>We agree on the details and I start building.</li>
          </ol>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Get in touch</h2>
          <p className="text-slate-300">
            If you&apos;re interested in working together, send me an email with a
            short description of your project, budget, and timeline.
          </p>
          <a
            href="mailto:trippturman3@gmail.com?subject=Freelance%20project%20inquiry"
            className="inline-flex px-5 py-2 rounded-md bg-sky-500 text-slate-950 font-medium hover:bg-sky-400 transition"
          >
            Email me about a project
          </a>
          <p className="text-slate-300">
            trippturman3@gmail.com
          </p>
        </section>
      </div>
    </main>
  );
}