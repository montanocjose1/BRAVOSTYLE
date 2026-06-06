const sizes = [
  { size: "S", chest: "36-38", length: "28", fit: "Regular" },
  { size: "M", chest: "38-40", length: "29", fit: "Regular" },
  { size: "L", chest: "40-42", length: "30", fit: "Relaxed" },
  { size: "XL", chest: "42-44", length: "31", fit: "Oversize" },
  { size: "2XL", chest: "44-46", length: "32", fit: "Oversize+" },
];

export default function SizeGuide() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-12">
        <p className="text-xs uppercase tracking-[0.3em] text-smoke font-medium mb-3">Fit Guide</p>
        <h2 className="text-4xl md:text-5xl font-black text-dark tracking-tight">Size Guide</h2>
        <p className="mt-4 text-sm text-smoke max-w-md leading-relaxed">
          For an oversized fit, we recommend going one size up from your regular size.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b-2 border-dark">
              <th className="py-4 pr-6 text-xs font-bold uppercase tracking-widest text-dark">Size</th>
              <th className="py-4 pr-6 text-xs font-bold uppercase tracking-widest text-dark">Chest (in)</th>
              <th className="py-4 pr-6 text-xs font-bold uppercase tracking-widest text-dark">Length (in)</th>
              <th className="py-4 text-xs font-bold uppercase tracking-widest text-dark">Fit</th>
            </tr>
          </thead>
          <tbody>
            {sizes.map((s) => (
              <tr key={s.size} className="border-b border-dark/10">
                <td className="py-4 pr-6 text-sm font-semibold text-dark">{s.size}</td>
                <td className="py-4 pr-6 text-sm text-smoke">{s.chest}</td>
                <td className="py-4 pr-6 text-sm text-smoke">{s.length}</td>
                <td className="py-4 text-sm text-dark font-medium">{s.fit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-10 p-6 border border-dark/10 bg-dark/5">
        <p className="text-xs font-bold uppercase tracking-widest text-dark">Oversize Recommendation</p>
        <p className="mt-2 text-sm text-smoke leading-relaxed">
          For our signature oversized look, go with <strong className="text-dark">XL or 2XL</strong> if you usually wear M or L. The fit should feel relaxed through the shoulders and body.
        </p>
      </div>
    </section>
  );
}
