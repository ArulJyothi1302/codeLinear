import CB7Dashboard from "./dashboard/cb7Dashboard";

export default function CB7Section() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-[260px] font-bold text-white/5">CB7</h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 gap-20">
          <div>
            <h2 className="text-5xl font-light">
              A complete cloud-based core banking.
            </h2>
          </div>

          <CB7Dashboard />
        </div>
      </div>
    </section>
  );
}
