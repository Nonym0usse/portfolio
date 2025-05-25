
interface IFeatureData {
    title: string;
    description: string;
    delay: string;
}
export default function Features({ featureData }: { featureData?: IFeatureData[] }) {
    return (
        <section id="features" className="pt-14 sm:pt-20 lg:pt-[130px]">
            <div className="px-4 xl:container">
                <div
                    className="wow fadeInUp relative mx-auto mb-12 max-w-[620px] pt-6 text-center md:mb-20 lg:pt-16"
                    data-wow-delay=".2s"
                >
                    <span className="title">Avantages</span>
                    <h2 className="font-heading text-dark mb-5 text-3xl font-semibold sm:text-4xl md:text-[50px] md:leading-[60px] dark:text-white">
                        Ce que je vous apporte concrètement
                    </h2>
                    <p className="text-dark-text text-base">
                        En tant que développeur web freelance, je vous livre bien plus qu’un site. Voici 6 raisons de me faire confiance pour votre projet digital.
                    </p>
                </div>

                <div className="-mx-4 flex flex-wrap justify-center">
                    {featureData?.map((feature, index) => (
                        <div key={index} className="w-full px-4 md:w-1/2 lg:w-1/3">
                            <div
                                className="wow fadeInUp group mx-auto mb-10 max-w-[380px] text-center md:mb-16"
                                data-wow-delay={feature.delay}
                            >
                                <div className="bg-primary/5 text-primary group-hover:bg-primary dark:group-hover:bg-primary mx-auto mb-6 flex h-[70px] w-[70px] items-center justify-center rounded-full transition group-hover:text-white group-hover:opacity-100 md:mb-9 md:h-[90px] md:w-[90px] dark:bg-white/5 dark:text-white dark:group-hover:opacity-100">
                                    {/* Icône placeholder — tu peux changer le SVG ici */}
                                    <svg width="44" height="44" viewBox="0 0 44 44" className="fill-current">
                                        <circle cx="22" cy="22" r="20" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-heading text-dark mb-3 text-xl font-medium sm:text-2xl md:mb-5 dark:text-white">
                                        {feature.title}
                                    </h3>
                                    <p className="text-dark-text text-base">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </div>))}
                    ))}
                </div>
            </div>
        </section>
    );
}