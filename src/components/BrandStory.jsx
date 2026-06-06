export default function BrandStory() {
  const pillars = [
    {
      title: "Premium Fabric",
      desc: "We source only the finest cotton and blends for durability and comfort that lasts.",
    },
    {
      title: "Perfect Oversized Fit",
      desc: "Every cut is engineered for that effortless oversized silhouette — relaxed, not baggy.",
    },
    {
      title: "Minimal Design",
      desc: "No logos, no distractions. Just clean lines and timeless pieces for the modern wardrobe.",
    },
  ];

  return (
    <section className="bg-dark py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-smoke font-medium mb-4">Philosophy</p>
          <h2 className="text-4xl md:text-6xl font-black text-off-white tracking-tight">
            MORE THAN
            <br />
            CLOTHING
          </h2>
          <p className="mt-6 text-off-white/60 text-sm md:text-base leading-relaxed font-light">
            BRAVOSTYLE represents confidence, simplicity and premium urban style. We create essential
            oversized pieces designed to last and look good every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {pillars.map((pillar, i) => (
            <div key={i} className="border-t border-off-white/10 pt-8">
              <span className="text-smoke text-xs font-medium tracking-widest uppercase">0{i + 1}</span>
              <h3 className="text-xl font-bold text-off-white mt-4 mb-3">{pillar.title}</h3>
              <p className="text-off-white/50 text-sm leading-relaxed font-light">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
