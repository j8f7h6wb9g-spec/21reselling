"use client";

import { useState } from "react";

const categories = [
  { name: "Hot Products", emoji: "🔥", color: "from-orange-500 to-pink-500" },
  { name: "Shoes", emoji: "👟", color: "from-blue-500 to-cyan-400" },
  { name: "Clothes", emoji: "👕", color: "from-purple-500 to-pink-500" },
  { name: "Accessories", emoji: "🧢", color: "from-yellow-400 to-orange-500" },
  { name: "Pants", emoji: "👖", color: "from-indigo-500 to-blue-500" },
  { name: "T-Shirts", emoji: "👔", color: "from-green-400 to-cyan-500" },
  { name: "Perfume", emoji: "🌸", color: "from-pink-400 to-purple-500" },
];

const products = [
  {
    name: "Nike Miler Trainingsanzug",
    category: "Clothes",
    price: "89,99 €",
    emoji: "👕",
    color: "from-pink-500 to-sky-300",
  },
  {
    name: "Premium Running Set",
    category: "Hot Products",
    price: "79,99 €",
    emoji: "🔥",
    color: "from-orange-500 to-red-500",
  },
  {
    name: "Urban Essentials T-Shirt",
    category: "T-Shirts",
    price: "34,99 €",
    emoji: "👔",
    color: "from-purple-500 to-indigo-500",
  },
  {
    name: "Street Cargo Pants",
    category: "Pants",
    price: "59,99 €",
    emoji: "👖",
    color: "from-blue-600 to-indigo-600",
  },
  {
    name: "Everyday Cap",
    category: "Accessories",
    price: "24,99 €",
    emoji: "🧢",
    color: "from-yellow-400 to-orange-500",
  },
  {
    name: "Signature Fragrance",
    category: "Perfume",
    price: "49,99 €",
    emoji: "🌸",
    color: "from-pink-500 to-purple-500",
  },
  {
    name: "Street Runner",
    category: "Shoes",
    price: "99,99 €",
    emoji: "👟",
    color: "from-cyan-400 to-blue-600",
  },
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("Hot Products");
  const [cart, setCart] = useState<string[]>([]);

  const filteredProducts =
    selectedCategory === "Hot Products"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  function addToCart(productName: string) {
    setCart([...cart, productName]);
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#07070a] text-white">
      {/* Background effects */}
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div className="absolute left-[-150px] top-[-150px] h-[400px] w-[400px] rounded-full bg-pink-500/20 blur-[120px]" />
        <div className="absolute right-[-150px] top-[200px] h-[450px] w-[450px] rounded-full bg-blue-500/20 blur-[130px]" />
        <div className="absolute bottom-[-200px] left-[30%] h-[400px] w-[400px] rounded-full bg-purple-500/15 blur-[130px]" />
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/60 px-5 py-4 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <button
            onClick={() => setSelectedCategory("Hot Products")}
            className="text-xl font-black tracking-tight transition hover:scale-105"
          >
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              21RESELLING
            </span>
          </button>

          <button className="rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm font-semibold backdrop-blur-md transition hover:scale-105 hover:bg-white/20">
            🛒 Warenkorb ({cart.length})
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 mx-auto max-w-7xl px-5 pb-14 pt-20 text-center">
        <div className="mb-5 inline-flex animate-pulse rounded-full border border-pink-400/20 bg-pink-400/10 px-4 py-2 text-sm text-pink-300">
          ✨ NEW DROP • 21RESELLING
        </div>

        <h1 className="text-5xl font-black leading-tight tracking-tight sm:text-7xl">
          Dein Style.
          <br />
          <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Dein Drop.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
          Entdecke ausgewählte Fashion, Accessories, Shoes und mehr.
          <br />
          Modern. Fresh. 21RESELLING.
        </p>
      </section>

      {/* Categories */}
      <section className="relative z-10 mx-auto max-w-7xl px-5">
        <h2 className="mb-6 text-2xl font-bold">Shop Categories</h2>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`group relative overflow-hidden rounded-2xl border p-4 text-left transition duration-300 hover:-translate-y-1 hover:scale-[1.02] ${
                selectedCategory === category.name
                  ? "border-white/40 bg-white/15"
                  : "border-white/10 bg-white/[0.04] hover:border-white/20 hover:bg-white/[0.08]"
              }`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 blur-2xl transition group-hover:opacity-20`}
              />

              <div className="relative">
                <div className="mb-3 text-3xl">{category.emoji}</div>
                <p className="text-sm font-bold">{category.name}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="relative z-10 mx-auto max-w-7xl px-5 pb-20 pt-14">
        <div className="mb-7 flex items-end justify-between">
          <div>
            <p className="mb-1 text-sm text-zinc-500">COLLECTION</p>
            <h2 className="text-3xl font-black">{selectedCategory}</h2>
          </div>

          <span className="text-sm text-zinc-500">
            {filteredProducts.length} Produkte
          </span>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-12 text-center">
            <div className="text-5xl">🚀</div>
            <h3 className="mt-4 text-xl font-bold">
              Neue Produkte kommen bald
            </h3>
            <p className="mt-2 text-zinc-500">
              Wir arbeiten gerade an dieser Kategorie.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <div
                key={product.name}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-md transition duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.07]"
              >
                <div
                  className={`relative flex h-64 items-center justify-center bg-gradient-to-br ${product.color} overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/10 transition group-hover:bg-black/0" />

                  <span className="relative text-8xl drop-shadow-2xl transition duration-500 group-hover:scale-125">
                    {product.emoji}
                  </span>

                  <span className="absolute left-4 top-4 rounded-full bg-black/40 px-3 py-1 text-xs font-bold backdrop-blur-md">
                    {product.category}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-bold">{product.name}</h3>

                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-2xl font-black">
                      {product.price}
                    </span>

                    <button
                      onClick={() => addToCart(product.name)}
                      className="rounded-xl bg-white px-4 py-2 text-sm font-bold text-black transition hover:scale-105 hover:bg-pink-200 active:scale-95"
                    >
                      Kaufen
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Socials */}
      <section className="relative z-10 border-t border-white/10 px-5 py-12 text-center">
        <p className="mb-4 text-sm text-zinc-500">FOLLOW 21RESELLING</p>

        <a
          href="https://www.tiktok.com/@youyu21bansky"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 font-semibold transition duration-300 hover:-translate-y-1 hover:bg-white/10"
        >
          <span className="text-2xl">♪</span>
          TikTok: @youyu21bansky
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-zinc-600">
        © 2026 21RESELLING • Made for the next generation
      </footer>
    </main>
  );
}