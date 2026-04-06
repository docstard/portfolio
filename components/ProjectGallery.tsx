export default function ProjectGallery({ images } : { images: string[] }) {
  return (
    <section className="py-24 px-6 bg-charcoal border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-6">
          Project Gallery
        </h2>

        <p className="text-slate-400 text-center max-w-3xl mx-auto mb-16">
          A visual walkthrough of the product, user flows, and core interfaces.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border border-white/10 cursor-pointer"
            >
              <img
                src={img}
                alt={`Project image ${index + 1}`}
                className="w-full h-64 object-cover transition duration-500 group-hover:scale-105"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <span className="text-white text-sm tracking-widest uppercase">
                  View
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
