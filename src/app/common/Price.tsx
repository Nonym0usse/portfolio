export default function Price() {
    return (
        <section id="pricing" className="pt-14 sm:pt-20 lg:pt-[130px]">
            <div className="px-4 xl:container">
                <div
                    className="wow fadeInUp relative mb-12 w-full pt-10 text-center md:mb-20 lg:pt-16"
                    data-wow-delay=".2s"
                >
                    <span className="title whitespace-nowrap"> PRICING PLANS </span>
                    <h2
                        className="font-heading text-dark mx-auto mb-5 max-w-[600px] text-3xl font-semibold sm:text-4xl md:text-[50px] md:leading-[60px] dark:text-white"
                    >
                        Affordable Pricing With Simple Plans
                    </h2>
                    <p className="text-dark-text mx-auto max-w-[600px] text-base">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                        convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam
                        ante in maximus.
                    </p>
                </div>

                <div
                    className="drop-shadow-light relative z-10 flex flex-wrap justify-center overflow-hidden rounded-sm dark:drop-shadow-none"
                >
                    <div
                        className="bg-noise-pattern absolute top-0 left-0 -z-10 h-full w-full bg-cover bg-center opacity-10 dark:opacity-40"
                    ></div>
                    <div className="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2">
                        <svg
                            width="1174"
                            height="560"
                            viewBox="0 0 1174 560"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g opacity="0.4" filter="url(#filter0_f_41_257)">
                                <rect
                                    x="450.531"
                                    y="279"
                                    width="272.933"
                                    height="328.051"
                                    fill="url(#paint0_linear_41_257)"
                                />
                            </g>
                            <defs>
                                <filter
                                    id="filter0_f_41_257"
                                    x="0.531494"
                                    y="-171"
                                    width="1172.93"
                                    height="1228.05"
                                    filterUnits="userSpaceOnUse"
                                    colorInterpolationFilters="sRGB"
                                >
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="BackgroundImageFix"
                                        result="shape"
                                    />
                                    <feGaussianBlur
                                        stdDeviation="225"
                                        result="effect1_foregroundBlur_41_257"
                                    />
                                </filter>
                                <linearGradient
                                    id="paint0_linear_41_257"
                                    x1="425.16"
                                    y1="343.693"
                                    x2="568.181"
                                    y2="660.639"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#ABBCFF" />
                                    <stop offset="0.859375" stopColor="#4A6CF7" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/3">
                        <div
                            className="wow fadeInUp pt-10 pb-20 text-center"
                            data-wow-delay=".2s"
                        >
                            <div className="border-b dark:border-[#2E333D]">
                                <h3
                                    className="font-heading text-dark mb-2 text-3xl font-medium dark:text-white"
                                >
                                    Free
                                </h3>
                                <p className="text-dark-text pb-10 text-base">
                                    The most basic plan
                                </p>
                            </div>
                            <div className="border-b py-10 dark:border-[#2E333D]">
                                <h3
                                    className="font-heading text-dark mb-6 flex items-end justify-center pt-2 text-base font-medium dark:text-white"
                                >
                                    $ <sup className="-mb-2 text-[55px]"> 0 </sup>
                                    /month
                                </h3>

                                <p className="text-dark-text mx-auto max-w-[300px] text-base">
                                    Lorem ipsum dolor sit ametion consectetur adipisc elit.
                                </p>
                            </div>
                            <div
                                className="space-y-4 px-6 pt-10 pb-[60px] text-left sm:px-10 md:px-8 lg:px-10 xl:px-20"
                            >
                                <p className="text-dark-text flex items-center text-base">
                                    <span className="inline-block pr-2 text-[#00CB99]">
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            className="fill-current"
                                        >
                                            <path
                                                d="M9.99999 15.172L19.192 5.979L20.607 7.393L9.99999 18L3.63599 11.636L5.04999 10.222L9.99999 15.172Z"
                                            />
                                        </svg>
                                    </span>
                                    300 GB Storage
                                </p>
                                <p className="text-dark-text flex items-center text-base">
                                    <span className="inline-block pr-2 text-[#00CB99]">
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            className="fill-current"
                                        >
                                            <path
                                                d="M9.99999 15.172L19.192 5.979L20.607 7.393L9.99999 18L3.63599 11.636L5.04999 10.222L9.99999 15.172Z"
                                            />
                                        </svg>
                                    </span>
                                    Unlimited Photos and Videos
                                </p>
                                <p className="text-dark-text flex items-center text-base">
                                    <span className="inline-block pr-2 text-[#00CB99]">
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            className="fill-current"
                                        >
                                            <path
                                                d="M9.99999 15.172L19.192 5.979L20.607 7.393L9.99999 18L3.63599 11.636L5.04999 10.222L9.99999 15.172Z"
                                            />
                                        </svg>
                                    </span>
                                    Exclusive Support
                                </p>
                                <p className="text-dark-text flex items-center text-base">
                                    <span className="inline-block pr-2">
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            className="fill-current"
                                        >
                                            <path
                                                d="M9.99999 15.172L19.192 5.979L20.607 7.393L9.99999 18L3.63599 11.636L5.04999 10.222L9.99999 15.172Z"
                                            />
                                        </svg>
                                    </span>
                                    Custom Branding Strategy
                                </p>
                                <p className="text-dark-text flex items-center text-base">
                                    <span className="inline-block pr-2">
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            className="fill-current"
                                        >
                                            <path
                                                d="M9.99999 15.172L19.192 5.979L20.607 7.393L9.99999 18L3.63599 11.636L5.04999 10.222L9.99999 15.172Z"
                                            />
                                        </svg>
                                    </span>
                                    Free SEO Tools
                                </p>
                            </div>
                            <a
                                href="javascript:void(0)"
                                className="bg-dark-text font-heading hover:bg-primary inline-flex items-center rounded-sm px-8 py-[14px] text-base text-white"
                            >
                                Join This Plan
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
                    <div
                        className="w-full sm:w-1/2 sm:border-l lg:w-1/3 lg:border-x dark:border-[#2E333D]"
                    >
                        <div
                            className="wow fadeInUp pt-10 pb-20 text-center"
                            data-wow-delay=".3s"
                        >
                            <div className="border-b dark:border-[#2E333D]">
                                <h3
                                    className="font-heading text-dark mb-2 text-3xl font-medium dark:text-white"
                                >
                                    Basic
                                </h3>
                                <p className="text-dark-text pb-10 text-base">
                                    The most popular plan
                                </p>
                            </div>
                            <div className="border-b py-10 dark:border-[#2E333D]">
                                <h3
                                    className="font-heading text-dark mb-6 flex items-end justify-center pt-2 text-base font-medium dark:text-white"
                                >
                                    $ <sup className="-mb-2 text-[55px]"> 29 </sup>
                                    /month
                                </h3>

                                <p className="text-dark-text mx-auto max-w-[300px] text-base">
                                    Lorem ipsum dolor sit ametion consectetur adipisc elit.
                                </p>
                            </div>
                            <div
                                className="space-y-4 px-6 pt-10 pb-[60px] text-left sm:px-10 md:px-8 lg:px-10 xl:px-20"
                            >
                                <p className="text-dark-text flex items-center text-base">
                                    <span className="inline-block pr-2 text-[#00CB99]">
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            className="fill-current"
                                        >
                                            <path
                                                d="M9.99999 15.172L19.192 5.979L20.607 7.393L9.99999 18L3.63599 11.636L5.04999 10.222L9.99999 15.172Z"
                                            />
                                        </svg>
                                    </span>
                                    300 GB Storage
                                </p>
                                <p className="text-dark-text flex items-center text-base">
                                    <span className="inline-block pr-2 text-[#00CB99]">
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            className="fill-current"
                                        >
                                            <path
                                                d="M9.99999 15.172L19.192 5.979L20.607 7.393L9.99999 18L3.63599 11.636L5.04999 10.222L9.99999 15.172Z"
                                            />
                                        </svg>
                                    </span>
                                    Unlimited Photos and Videos
                                </p>
                                <p className="text-dark-text flex items-center text-base">
                                    <span className="inline-block pr-2 text-[#00CB99]">
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            className="fill-current"
                                        >
                                            <path
                                                d="M9.99999 15.172L19.192 5.979L20.607 7.393L9.99999 18L3.63599 11.636L5.04999 10.222L9.99999 15.172Z"
                                            />
                                        </svg>
                                    </span>
                                    Exclusive Support
                                </p>
                                <p className="text-dark-text flex items-center text-base">
                                    <span className="inline-block pr-2 text-[#00CB99]">
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            className="fill-current"
                                        >
                                            <path
                                                d="M9.99999 15.172L19.192 5.979L20.607 7.393L9.99999 18L3.63599 11.636L5.04999 10.222L9.99999 15.172Z"
                                            />
                                        </svg>
                                    </span>
                                    Custom Branding Strategy
                                </p>
                                <p className="text-dark-text flex items-center text-base">
                                    <span className="inline-block pr-2">
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            className="fill-current"
                                        >
                                            <path
                                                d="M9.99999 15.172L19.192 5.979L20.607 7.393L9.99999 18L3.63599 11.636L5.04999 10.222L9.99999 15.172Z"
                                            />
                                        </svg>
                                    </span>
                                    Free SEO Tools
                                </p>
                            </div>
                            <a
                                href="javascript:void(0)"
                                className="bg-primary font-heading hover:bg-primary/90 inline-flex items-center rounded-sm px-8 py-[14px] text-base text-white"
                            >
                                Join This Plan
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
                    <div className="w-full sm:w-1/2 lg:w-1/3">
                        <div
                            className="wow fadeInUp pt-10 pb-20 text-center"
                            data-wow-delay=".4s"
                        >
                            <div className="border-b dark:border-[#2E333D]">
                                <h3
                                    className="font-heading text-dark mb-2 text-3xl font-medium dark:text-white"
                                >
                                    Premium
                                </h3>
                                <p className="text-dark-text pb-10 text-base">
                                    The most premium plan
                                </p>
                            </div>
                            <div className="border-b py-10 dark:border-[#2E333D]">
                                <h3
                                    className="font-heading text-dark mb-6 flex items-end justify-center pt-2 text-base font-medium dark:text-white"
                                >
                                    $ <sup className="-mb-2 text-[55px]"> 99 </sup>
                                    /month
                                </h3>

                                <p className="text-dark-text mx-auto max-w-[300px] text-base">
                                    Lorem ipsum dolor sit ametion consectetur adipisc elit.
                                </p>
                            </div>
                            <div
                                className="space-y-4 px-6 pt-10 pb-[60px] text-left sm:px-10 md:px-8 lg:px-10 xl:px-20"
                            >
                                <p className="text-dark-text flex items-center text-base">
                                    <span className="inline-block pr-2 text-[#00CB99]">
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            className="fill-current"
                                        >
                                            <path
                                                d="M9.99999 15.172L19.192 5.979L20.607 7.393L9.99999 18L3.63599 11.636L5.04999 10.222L9.99999 15.172Z"
                                            />
                                        </svg>
                                    </span>
                                    300 GB Storage
                                </p>
                                <p className="text-dark-text flex items-center text-base">
                                    <span className="inline-block pr-2 text-[#00CB99]">
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            className="fill-current"
                                        >
                                            <path
                                                d="M9.99999 15.172L19.192 5.979L20.607 7.393L9.99999 18L3.63599 11.636L5.04999 10.222L9.99999 15.172Z"
                                            />
                                        </svg>
                                    </span>
                                    Unlimited Photos and Videos
                                </p>
                                <p className="text-dark-text flex items-center text-base">
                                    <span className="inline-block pr-2 text-[#00CB99]">
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            className="fill-current"
                                        >
                                            <path
                                                d="M9.99999 15.172L19.192 5.979L20.607 7.393L9.99999 18L3.63599 11.636L5.04999 10.222L9.99999 15.172Z"
                                            />
                                        </svg>
                                    </span>
                                    Exclusive Support
                                </p>
                                <p className="text-dark-text flex items-center text-base">
                                    <span className="inline-block pr-2 text-[#00CB99]">
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            className="fill-current"
                                        >
                                            <path
                                                d="M9.99999 15.172L19.192 5.979L20.607 7.393L9.99999 18L3.63599 11.636L5.04999 10.222L9.99999 15.172Z"
                                            />
                                        </svg>
                                    </span>
                                    Custom Branding Strategy
                                </p>
                                <p className="text-dark-text flex items-center text-base">
                                    <span className="inline-block pr-2 text-[#00CB99]">
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            className="fill-current"
                                        >
                                            <path
                                                d="M9.99999 15.172L19.192 5.979L20.607 7.393L9.99999 18L3.63599 11.636L5.04999 10.222L9.99999 15.172Z"
                                            />
                                        </svg>
                                    </span>
                                    Free SEO Tools
                                </p>
                            </div>
                            <a
                                href="javascript:void(0)"
                                className="bg-dark-text font-heading hover:bg-primary inline-flex items-center rounded-sm px-8 py-[14px] text-base text-white"
                            >
                                Join This Plan
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

                <div className="pt-12 text-center">
                    <h3
                        className="font-heading text-dark mb-5 text-xl font-medium sm:text-3xl dark:text-white"
                    >
                        Looking for a company solution?
                    </h3>
                    <p className="text-dark-text text-base">
                        Contact our team to get a quote.
                    </p>
                </div>
            </div>
        </section>
    );
}