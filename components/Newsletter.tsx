export default function Newsletter() {
  return (
    <section className="bg-slate-900 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Don&apos;t Want to
            <br />
            Miss Anything?
          </h2>

          <form className="mx-auto flex w-full max-w-xl flex-col gap-4 sm:flex-row sm:items-center">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full flex-1 rounded-md border border-slate-700 bg-slate-800 px-5 py-3 text-sm focus:border-lime-200 focus:outline-none sm:text-base"
            />
            <button className="inline-flex w-full cursor-pointer items-center justify-center rounded-md bg-lime-200 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-slate-900 transition-colors hover:bg-lime-100 sm:w-auto sm:px-8">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
