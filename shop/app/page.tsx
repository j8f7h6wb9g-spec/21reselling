export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="flex items-center justify-between px-6 py-5 border-b border-zinc-800">
        <h1 className="text-2xl font-bold">21RESELLING</h1>

        <button className="rounded-full bg-white px-5 py-2 text-black font-semibold">
          Warenkorb
        </button>
      </nav>

      <section className="px-6 py-16 text-center">
        <p className="text-zinc-400 mb-3">DEIN RESELLING SHOP</p>

        <h2 className="text-5xl font-bold mb-5">
          Gute Produkte.
          <br />
          Gute Preise.
        </h2>

        <p className="mx-auto max-w-xl text-zinc-400">
          Entdecke unsere ausgewählten Produkte und sichere dir deine
          Favoriten.
        </p>
      </section>

      <section className="px-6 pb-16">
        <h2 className="text-3xl font-bold mb-8">Produkte</h2>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
            <div className="h-56 rounded-xl bg-zinc-800 flex items-center justify-center">
              Produkt 1
            </div>

            <h3 className="text-xl font-bold mt-5">Premium Produkt</h3>
            <p className="text-zinc-400 mt-2">Hochwertiges Reselling-Produkt</p>

            <div className="flex items-center justify-between mt-5">
              <span className="text-xl font-bold">29,99 €</span>

              <button className="rounded-xl bg-white px-4 py-2 text-black font-semibold">
                Kaufen
              </button>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
            <div className="h-56 rounded-xl bg-zinc-800 flex items-center justify-center">
              Produkt 2
            </div>

            <h3 className="text-xl font-bold mt-5">Premium Produkt</h3>
            <p className="text-zinc-400 mt-2">Hochwertiges Reselling-Produkt</p>

            <div className="flex items-center justify-between mt-5">
              <span className="text-xl font-bold">39,99 €</span>

              <button className="rounded-xl bg-white px-4 py-2 text-black font-semibold">
                Kaufen
              </button>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
            <div className="h-56 rounded-xl bg-zinc-800 flex items-center justify-center">
              Produkt 3
            </div>

            <h3 className="text-xl font-bold mt-5">Premium Produkt</h3>
            <p className="text-zinc-400 mt-2">Hochwertiges Reselling-Produkt</p>

            <div className="flex items-center justify-between mt-5">
              <span className="text-xl font-bold">49,99 €</span>

              <button className="rounded-xl bg-white px-4 py-2 text-black font-semibold">
                Kaufen
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-800 px-6 py-8 text-center text-zinc-500">
        © 2026 21RESELLING
      </footer>
    </main>
  );
}