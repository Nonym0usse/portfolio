export default function Portfolio() {
    return (
        <section id="portfolio" className="pt-14 sm:pt-20 lg:pt-[130px]">
            <div className="px-4 xl:container">
                <div
                    className="wow fadeInUp relative mx-auto mb-12 pt-6 text-center md:mb-20 lg:pt-16"
                    data-wow-delay=".2s"
                >
                    <span className="title"> PORTFOLIO </span>
                    <h2
                        className="font-heading text-dark mx-auto mb-5 max-w-[500px] text-3xl font-semibold sm:text-4xl md:text-[50px] md:leading-[60px] dark:text-white"
                    >
                        Explore Our Latest Case Studies
                    </h2>
                    <p className="text-dark-text mx-auto max-w-[620px] text-base">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                        convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam
                        ante in maximus.
                    </p>
                </div>

                <div className="w-full">
                    <div
                        className="portfolio-btn-wrapper wow fadeInUp mb-16 flex items-center justify-center overflow-x-auto pb-2"
                        data-wow-delay=".2s"
                    >
                        <button
                            className="active font-heading text-dark px-5 text-base whitespace-nowrap dark:text-white"
                            data-filter="*"
                        >
                            All
                        </button>
                        <button
                            className="font-heading text-dark px-5 text-base whitespace-nowrap dark:text-white"
                            data-filter=".branding"
                        >
                            Branding Strategy
                        </button>
                        <button
                            className="font-heading text-dark px-5 text-base whitespace-nowrap dark:text-white"
                            data-filter=".digital"
                        >
                            Digital Experiences
                        </button>
                        <button
                            className="font-heading text-dark px-5 text-base whitespace-nowrap dark:text-white"
                            data-filter=".ecom"
                        >
                            eCommerce
                        </button>
                    </div>

                    <div className="portfolio-grid -mx-4 flex flex-wrap">
                        <div className="grid-sizer"></div>
                        <div className="grid-item ecom w-full px-4 lg:w-2/3">
                            <div
                                className="wow fadeInUp group relative mb-10 overflow-hidden rounded-sm"
                                data-wow-delay=".2s"
                            >
                                <img
                                    src="./images/portfolio/image-1.jpg"
                                    alt="portfolio-image"
                                    className="w-full"
                                />

                                <div
                                    className="absolute bottom-8 left-5 flex translate-y-8 items-center justify-between rounded-sm bg-black/30 px-4 py-5 opacity-0 backdrop-blur-[30px] transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:left-8 sm:px-6 lg:left-5 lg:px-4 xl:px-6 2xl:left-8"
                                >
                                    <div
                                        className="border-r border-[#e9e9e9]/30 pr-4 sm:pr-5 lg:pr-4 xl:pr-5"
                                    >
                                        <h3
                                            className="font-heading text-base font-medium text-white sm:text-xl lg:text-base xl:text-xl"
                                        >
                                            Photo Retouching
                                        </h3>
                                        <p
                                            className="text-sm text-[#d9d9d9] sm:text-base lg:text-sm xl:text-base"
                                        >
                                            Branded Ecommerce
                                        </p>
                                    </div>
                                    <div className="pl-4 sm:pl-5 lg:pl-4 xl:pl-5">
                                        <a
                                            href="javascript:void(0)"
                                            className="dark:hover:bg-primary hover:bg-primary flex h-10 w-10 items-center justify-center rounded-full bg-[#f8f8f8]/15 text-white hover:opacity-100 dark:hover:opacity-100"
                                        >
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                className="fill-current"
                                            >
                                                <path
                                                    d="M13.4767 9.16689L9.00671 4.69689L10.185 3.51855L16.6667 10.0002L10.185 16.4819L9.00671 15.3036L13.4767 10.8336H3.33337V9.16689H13.4767Z"
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid-item branding w-full px-4 md:w-1/2 lg:w-1/3">
                            <div
                                className="wow fadeInUp group relative mb-10 overflow-hidden rounded-sm"
                                data-wow-delay=".25s"
                            >
                                <img
                                    src="./images/portfolio/image-2.jpg"
                                    alt="portfolio-image"
                                    className="w-full"
                                />

                                <div
                                    className="absolute bottom-8 left-5 flex translate-y-8 items-center justify-between rounded-sm bg-black/30 px-4 py-5 opacity-0 backdrop-blur-[30px] transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:left-8 sm:px-6 lg:left-5 lg:px-4 xl:px-6 2xl:left-8"
                                >
                                    <div
                                        className="border-r border-[#e9e9e9]/30 pr-4 sm:pr-5 lg:pr-4 xl:pr-5"
                                    >
                                        <h3
                                            className="font-heading text-base font-medium text-white sm:text-xl lg:text-base xl:text-xl"
                                        >
                                            Photo Retouching
                                        </h3>
                                        <p
                                            className="text-sm text-[#d9d9d9] sm:text-base lg:text-sm xl:text-base"
                                        >
                                            Branded Ecommerce
                                        </p>
                                    </div>
                                    <div className="pl-4 sm:pl-5 lg:pl-4 xl:pl-5">
                                        <a
                                            href="javascript:void(0)"
                                            className="dark:hover:bg-primary hover:bg-primary flex h-10 w-10 items-center justify-center rounded-full bg-[#f8f8f8]/15 text-white hover:opacity-100 dark:hover:opacity-100"
                                        >
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                className="fill-current"
                                            >
                                                <path
                                                    d="M13.4767 9.16689L9.00671 4.69689L10.185 3.51855L16.6667 10.0002L10.185 16.4819L9.00671 15.3036L13.4767 10.8336H3.33337V9.16689H13.4767Z"
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid-item digital w-full px-4 md:w-1/2 lg:w-1/3">
                            <div
                                className="wow fadeInUp group relative mb-10 overflow-hidden rounded-sm"
                                data-wow-delay=".3s"
                            >
                                <img
                                    src="./images/portfolio/image-3.jpg"
                                    alt="portfolio-image"
                                    className="w-full"
                                />

                                <div
                                    className="absolute bottom-8 left-5 flex translate-y-8 items-center justify-between rounded-sm bg-black/30 px-4 py-5 opacity-0 backdrop-blur-[30px] transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:left-8 sm:px-6 lg:left-5 lg:px-4 xl:px-6 2xl:left-8"
                                >
                                    <div
                                        className="border-r border-[#e9e9e9]/30 pr-4 sm:pr-5 lg:pr-4 xl:pr-5"
                                    >
                                        <h3
                                            className="font-heading text-base font-medium text-white sm:text-xl lg:text-base xl:text-xl"
                                        >
                                            Photo Retouching
                                        </h3>
                                        <p
                                            className="text-sm text-[#d9d9d9] sm:text-base lg:text-sm xl:text-base"
                                        >
                                            Branded Ecommerce
                                        </p>
                                    </div>
                                    <div className="pl-4 sm:pl-5 lg:pl-4 xl:pl-5">
                                        <a
                                            href="javascript:void(0)"
                                            className="dark:hover:us-bg-primary hover:bg-primary flex h-10 w-10 items-center justify-center rounded-full bg-[#f8f8f8]/15 text-white hover:opacity-100 dark:hover:opacity-100"
                                        >
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                className="fill-current"
                                            >
                                                <path
                                                    d="M13.4767 9.16689L9.00671 4.69689L10.185 3.51855L16.6667 10.0002L10.185 16.4819L9.00671 15.3036L13.4767 10.8336H3.33337V9.16689H13.4767Z"
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid-item ecom w-full px-4 md:w-1/2 lg:w-1/3">
                            <div
                                className="wow fadeInUp group relative mb-10 overflow-hidden rounded-sm"
                                data-wow-delay=".35s"
                            >
                                <img
                                    src="./images/portfolio/image-4.jpg"
                                    alt="portfolio-image"
                                    className="w-full"
                                />

                                <div
                                    className="absolute bottom-8 left-5 flex translate-y-8 items-center justify-between rounded-sm bg-black/30 px-4 py-5 opacity-0 backdrop-blur-[30px] transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:left-8 sm:px-6 lg:left-5 lg:px-4 xl:px-6 2xl:left-8"
                                >
                                    <div
                                        className="border-r border-[#e9e9e9]/30 pr-4 sm:pr-5 lg:pr-4 xl:pr-5"
                                    >
                                        <h3
                                            className="font-heading text-base font-medium text-white sm:text-xl lg:text-base xl:text-xl"
                                        >
                                            Photo Retouching
                                        </h3>
                                        <p
                                            className="text-sm text-[#d9d9d9] sm:text-base lg:text-sm xl:text-base"
                                        >
                                            Branded Ecommerce
                                        </p>
                                    </div>
                                    <div className="pl-4 sm:pl-5 lg:pl-4 xl:pl-5">
                                        <a
                                            href="javascript:void(0)"
                                            className="dark:hover:bg-primary hover:bg-primary flex h-10 w-10 items-center justify-center rounded-full bg-[#f8f8f8]/15 text-white hover:opacity-100 dark:hover:opacity-100"
                                        >
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                className="fill-current"
                                            >
                                                <path
                                                    d="M13.4767 9.16689L9.00671 4.69689L10.185 3.51855L16.6667 10.0002L10.185 16.4819L9.00671 15.3036L13.4767 10.8336H3.33337V9.16689H13.4767Z"
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="wow fadeInUp w-full pt-10 text-center"
                        data-wow-delay=".2s"
                    >
                        <a
                            href="javascript:void(0)"
                            className="bg-primary font-heading hover:bg-primary/90 inline-flex items-center rounded-sm px-8 py-[14px] text-base text-white"
                        >
                            See More Projects
                            <span className="pl-3">
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12.172 7L6.808 1.636L8.222 0.222L16 8L8.222 15.778L6.808 14.364L12.172 9H0V7H12.172Z"
                                        fill="white"
                                    />
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}