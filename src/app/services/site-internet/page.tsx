import Features from "@/app/common/Features";
import featureSiteWeb from "@/app/data/feature-site-web.json";
export default function SiteInternet() {
  return (
    <>
      <section className="relative h-[400px] w-full overflow-hidden bg-black text-white">
        <img
          src="/images/site-web/dev-web.jpg"
          alt="Création de site internet"
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />

        {/* Overlay et contenu */}
        <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
          <div className="max-w-3xl">
            <p className="text-lg font-light uppercase tracking-wide">
              nos solutions de
            </p>
            <h1 className="text-4xl font-extrabold md:text-5xl">
              création de <br className="md:hidden" /> site internet
            </h1>
            <div className="mt-6">
              <a
                href="#contact"
                className="inline-block rounded bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-gray-200"
              >
                Contactez-nous dès à présent →
              </a>
            </div>
          </div>
        </div>
      </section>
      <Features featureData={featureSiteWeb} />
    </>
  );
}