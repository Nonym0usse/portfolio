export default function Header() {

    return (
        <header className="header absolute top-0 left-0 w-full">
            <div
                className="flex w-full flex-wrap px-5 lg:flex-nowrap lg:items-center lg:px-5 xl:px-10 2xl:px-20"
            >
                <div className="relative z-99 max-w-[250px] lg:w-full xl:max-w-[350px]">
                    <a href="/" className="inline-block">
                        <img
                            src="/images/logo/logo-dark.svg"
                            alt="logo"
                            className="hidden h-[50px] dark:block"
                        />
                       
                    </a>
                </div>
                <div
                    className="menu-wrapper dark:bg-dark fixed top-0 left-0 z-50 h-screen w-full justify-center bg-white p-5 lg:visible lg:static lg:flex lg:h-auto lg:justify-start lg:bg-transparent lg:p-0 lg:opacity-100 dark:lg:bg-transparent"
                >
                    <div className="w-full self-center">
                        <nav>
                            <ul
                                className="navbar flex flex-col items-center justify-center space-y-5 text-center lg:flex-row lg:justify-start lg:space-y-0 lg:space-x-10"
                            >
                                <li>
                                    <a
                                        href="/"
                                        className="menu-scroll active font-heading text-dark-text hover:text-primary inline-flex items-center justify-center text-center text-base dark:hover:text-white"
                                    >
                                        Accueil
                                    </a>
                                </li>
                                <li className="submenu-item group relative">
                                    <a
                                        href="/services"
                                        className="submenu-taggler font-heading text-dark-text hover:text-primary inline-flex items-center justify-center text-center text-base dark:hover:text-white"
                                    >
                                        Services

                                        <span className="pl-3">
                                            <svg
                                                width="14"
                                                height="8"
                                                viewBox="0 0 14 8"
                                                className="fill-current"
                                            >
                                                <path
                                                    d="M6.54564 5.09128L11.6369 0L13.0913 1.45436L6.54564 8L0 1.45436L1.45436 0L6.54564 5.09128Z"
                                                />
                                            </svg>
                                        </span>
                                    </a>
                                    <ul
                                        className="submenu hidden space-y-5 bg-white pt-5 transition duration-300 lg:invisible lg:absolute lg:top-[120%] lg:block lg:w-[350px] lg:rounded-sm lg:border lg:px-8 lg:pb-5 lg:text-left lg:opacity-0 lg:group-hover:visible lg:group-hover:top-full lg:group-hover:opacity-100 dark:bg-transparent dark:lg:border-transparent dark:lg:bg-[#2C3443]"
                                    >
                                        <li>
                                            <a
                                                href="/services/site-internet"
                                                className="font-heading text-dark-text hover:text-primary inline-flex items-center justify-center text-center text-base dark:hover:text-white"
                                            >
                                                Site Internet
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="blog-details.html"
                                                className="font-heading text-dark-text hover:text-primary inline-flex items-center justify-center text-center text-base dark:hover:text-white"
                                            >
                                                Application Mobile
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="404.html"
                                                className="font-heading text-dark-text hover:text-primary inline-flex items-center justify-center text-center text-base dark:hover:text-white"
                                            >
                                                API Rest
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="signin.html"
                                                className="font-heading text-dark-text hover:text-primary inline-flex items-center justify-center text-center text-base dark:hover:text-white"
                                            >
                                                Consulting
                                            </a>
                                        </li>

                                    </ul>
                                </li>
                                <li>
                                    <a
                                        href="/contact"
                                        className="menu-scroll font-heading text-dark-text hover:text-primary inline-flex items-center justify-center text-center text-base dark:hover:text-white"
                                    >
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}