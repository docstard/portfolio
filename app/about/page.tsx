import React from 'react'

const page = () => {
    return (
        <div>
            {/* <!-- Hero Section --> */}
            <section className="relative pt-32 pb-24 px-6 overflow-hidden">
                <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl opacity-20 pointer-events-none"
                >
                    <div
                        className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-[120px]"
                    ></div>
                    <div
                        className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full blur-[120px]"
                    ></div>
                </div>
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <h1
                        className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 font-headline"
                    >
                        Crafting the Future of <br />
                        <span
                            className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300"
                        >Digital Innovation</span
                        >
                    </h1>
                    <p
                        className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 font-body leading-relaxed"
                    >
                        Atticflow is a team of designers, engineers, and AI specialists
                        dedicated to building high-performance digital products that scale.
                    </p>
                </div>
            </section>
            {/* <!-- Stats Section --> */}
            <section className="py-12 border-y border-white/5">
                <div
                    className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center"
                >
                    <div>
                        <div className="text-4xl font-extrabold text-white mb-2">50+</div>
                        <div
                            className="text-cyan-400 text-sm font-label uppercase tracking-widest"
                        >
                            Projects Delivered
                        </div>
                    </div>
                    <div>
                        <div className="text-4xl font-extrabold text-white mb-2">5+</div>
                        <div
                            className="text-cyan-400 text-sm font-label uppercase tracking-widest"
                        >
                            Global Locations
                        </div>
                    </div>
                    <div>
                        <div className="text-4xl font-extrabold text-white mb-2">100%</div>
                        <div
                            className="text-cyan-400 text-sm font-label uppercase tracking-widest"
                        >
                            Client Satisfaction
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Our Story --> */}
            <section className="py-24 px-6 relative">
                <div className="max-w-5xl mx-auto">
                    <div
                        className="glass-card p-10 md:p-16 rounded-xl border-white/10 relative overflow-hidden group"
                    >
                        <div
                            className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all"
                        ></div>
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold mb-6 font-headline">Our Story</h2>
                                <div className="space-y-4 text-slate-300 font-body">
                                    <p>
                                        Founded on the principle that technology should be as
                                        beautiful as it is functional, Atticflow emerged at the
                                        intersection of modern design and AI automation.
                                    </p>
                                    <p>
                                        What started as a boutique design studio has evolved into a
                                        powerhouse of digital transformation. We saw the gap between
                                        rigid enterprise software and the fluid needs of modern
                                        users, and we built a bridge with artificial intelligence.
                                    </p>
                                    <p>
                                        Today, we help global brands navigate the complexities of
                                        the digital landscape with precision and creativity.
                                    </p>
                                </div>
                            </div>
                            <div className="rounded-lg overflow-hidden h-80 relative">
                                <img
                                    alt="Team collaborating"
                                    className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                                    data-alt="Creative team collaborating in a modern studio environment"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPQ-FkIs_FERqgHGDdlmvF6dsFqSvsg7IYcacC0eiguOD7K7rX7IknLFUSStOjrYBHLEJqdTg6GbAqtxKUAzOKbIYh9V4ktQHpiKuNBPEFeY-MkYozIPjDfvwG-xIJv38SwJYH_K2V1-wV49ua6a-GUD2k622VRqyS62XgoeAGxI_RPAfWpWaPIHNCKcyjxMn7gBARK4c04HMCIvQzKF0eOwyMiv8S9-2gN7AZTO0k6HzYhIUkU-7YoglacNeO3FN77kZzT1b5Otru"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Core Values --> */}
            <section className="py-24 px-6 bg-slate-900/50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 font-headline">
                            Our Core Values
                        </h2>
                        <p className="text-slate-400">
                            The principles that drive every pixel and line of code we create.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Value 1 */}
                        <div
                            className="glass-card p-8 rounded-xl hover:border-cyan-400/50 transition-all duration-500 group"
                        >
                            <div
                                className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                            >
                                <span
                                    className="material-symbols-outlined text-cyan-400"
                                    data-icon="lightbulb"
                                >lightbulb</span
                                >
                            </div>
                            <h3 className="text-xl font-bold mb-3 font-headline">
                                Innovation-First
                            </h3>
                            <p className="text-sm text-slate-400 font-body">
                                We don't just follow trends; we set them by experimenting with
                                the latest in tech.
                            </p>
                        </div>
                        {/* <!-- Value 2 --> */}
                        <div
                            className="glass-card p-8 rounded-xl hover:border-purple-400/50 transition-all duration-500 group"
                        >
                            <div
                                className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                            >
                                <span
                                    className="material-symbols-outlined text-purple-400"
                                    data-icon="account_tree"
                                >account_tree</span
                                >
                            </div>
                            <h3 className="text-xl font-bold mb-3 font-headline">
                                Scalable Architecture
                            </h3>
                            <p className="text-sm text-slate-400 font-body">
                                Built for growth. Our systems handle millions of requests
                                without breaking a sweat.
                            </p>
                        </div>
                        {/* <!-- Value 3 --> */}
                        <div
                            className="glass-card p-8 rounded-xl hover:border-blue-400/50 transition-all duration-500 group"
                        >
                            <div
                                className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                            >
                                <span
                                    className="material-symbols-outlined text-blue-400"
                                    data-icon="palette"
                                >palette</span
                                >
                            </div>
                            <h3 className="text-xl font-bold mb-3 font-headline">
                                Design Excellence
                            </h3>
                            <p className="text-sm text-slate-400 font-body">
                                Pixel-perfect precision in every interface to ensure an
                                intuitive user experience.
                            </p>
                        </div>
                        {/* <!-- Value 4 --> */}
                        <div
                            className="glass-card p-8 rounded-xl hover:border-emerald-400/50 transition-all duration-500 group"
                        >
                            <div
                                className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                            >
                                <span
                                    className="material-symbols-outlined text-emerald-400"
                                    data-icon="bolt"
                                >bolt</span
                                >
                            </div>
                            <h3 className="text-xl font-bold mb-3 font-headline">
                                AI-Powered Efficiency
                            </h3>
                            <p className="text-sm text-slate-400 font-body">
                                Leveraging machine learning to automate workflows and drive
                                intelligent decisions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Meet the Team --> */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div
                        className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4"
                    >
                        <div>
                            <h2 className="text-4xl font-bold mb-4 font-headline">
                                Meet the Experts
                            </h2>
                            <p className="text-slate-400 max-w-xl">
                                A diverse collective of thinkers and builders making the
                                impossible reality.
                            </p>
                        </div>
                        <div
                            className="hidden md:block h-1 w-24 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                        ></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* <!-- Team member 1 --> */}
                        <div className="glass-card rounded-xl overflow-hidden group">
                            <div className="h-64 overflow-hidden relative">
                                <img
                                    alt="Founder"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    data-alt="Portrait of a modern professional male founder"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwwFEtSn6aJfJi704il39maPqDb9sN8xyhGe80SFAsJWcunadIsqyPMoFEgg0y7nMDzyrxloJA0gtfeJx0AgvvY7RPi0QdOnSBlx1wqzOobdYCP2z2vUnAjHLknmaz9tJXGPOBx_MS3RYvNIOObyQg8QfhlsKFz4EE9fj0tMGW2kv89uGU2TPmjDupSlnHMUtNyR5BNwrDE0YGNp_mdmEJUzF3ty1aWXpyvKhqY8wW27HXgfeI7CSO1FutRhauBfYc22PpfCYoroCL"
                                />
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-60"
                                ></div>
                            </div>
                            <div className="p-6">
                                <h4 className="text-lg font-bold text-white">Julian Vance</h4>
                                <p
                                    className="text-cyan-400 text-xs font-label uppercase tracking-widest mb-4"
                                >
                                    Founder
                                </p>
                                <div className="flex gap-3 text-slate-400">
                                    <span
                                        className="material-symbols-outlined text-base hover:text-white cursor-pointer"
                                        data-icon="hub"
                                    >hub</span
                                    >
                                    <span
                                        className="material-symbols-outlined text-base hover:text-white cursor-pointer"
                                        data-icon="alternate_email"
                                    >alternate_email</span
                                    >
                                </div>
                            </div>
                        </div>
                        {/* <!-- Team member 2 --> */}
                        <div className="glass-card rounded-xl overflow-hidden group">
                            <div className="h-64 overflow-hidden relative">
                                <img
                                    alt="Head of AI"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    data-alt="Portrait of a professional female tech leader"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQrvpB_MdudZeMlBdiA1YnJlcFqx_x2vO9cgSKjvMufx0jnBjPDVJ9GklFARHwyHUZsotOz8LS4XO3sS-oc4xN0c5q3pYn5J0VyalM6LLo-koUTpv74IUPQwlGsKBCpJcj1N8y_3cwXs0xxnnwkvEPh7vW7zqYqR7rH_xPKltoM5OAVyYFS8GpvwuvCnhiZygQEQrek4LxneMfJOSMP3meY1Ssmx9LITAGgK5yGRc5s1s7BaQ1T8ijVf05HGPy6Pqkv3L2jzG-rTTe"
                                />
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-60"
                                ></div>
                            </div>
                            <div className="p-6">
                                <h4 className="text-lg font-bold text-white">Dr. Elena Ross</h4>
                                <p
                                    className="text-cyan-400 text-xs font-label uppercase tracking-widest mb-4"
                                >
                                    Head of AI
                                </p>
                                <div className="flex gap-3 text-slate-400">
                                    <span
                                        className="material-symbols-outlined text-base hover:text-white cursor-pointer"
                                        data-icon="hub"
                                    >hub</span
                                    >
                                    <span
                                        className="material-symbols-outlined text-base hover:text-white cursor-pointer"
                                        data-icon="alternate_email"
                                    >alternate_email</span
                                    >
                                </div>
                            </div>
                        </div>
                        {/* <!-- Team member 3 --> */}
                        <div className="glass-card rounded-xl overflow-hidden group">
                            <div className="h-64 overflow-hidden relative">
                                <img
                                    alt="Lead UI/UX"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    data-alt="Portrait of a creative UI UX designer"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-4Lbr8bGXeXOzJ6iI2K6mpCxP5HfjFcp42J5UQi3s_mjP1QtX5Sw6S_pj9kRQlfO9HLsSaPT8q3hLv3XU_X_zl42v2piGloDAUIm6nq8ZcW0R44AD5hqSFUidOJNqFt4hhJhRP1-fwK0jMrNpt5XdWZxF5W8SkMcrXFhWz6INaI23qjSGpfo4cHRXkt9PP526DHIjd6qEjAzdLL8M0MEfHp1gNg6ThahHkfxmU1uUF9LiDlXXu6qpaCD9S8PBXk67pgsCRvE1XIE5"
                                />
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-60"
                                ></div>
                            </div>
                            <div className="p-6">
                                <h4 className="text-lg font-bold text-white">Maya Kotecha</h4>
                                <p
                                    className="text-cyan-400 text-xs font-label uppercase tracking-widest mb-4"
                                >
                                    Lead UI/UX
                                </p>
                                <div className="flex gap-3 text-slate-400">
                                    <span
                                        className="material-symbols-outlined text-base hover:text-white cursor-pointer"
                                        data-icon="hub"
                                    >hub</span
                                    >
                                    <span
                                        className="material-symbols-outlined text-base hover:text-white cursor-pointer"
                                        data-icon="alternate_email"
                                    >alternate_email</span
                                    >
                                </div>
                            </div>
                        </div>
                        {/* <!-- Team member 4 --> */}
                        <div className="glass-card rounded-xl overflow-hidden group">
                            <div className="h-64 overflow-hidden relative">
                                <img
                                    alt="Lead Engineer"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    data-alt="Portrait of a male lead engineer"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDl9_wT_csdl4dpM1VQDoU4OHFWyqYRjpdWCLRPvvvuvC5aDS_7bxuXOD0WyxTPA20NlDEdPW1gdtYN1Sc4XNN1keA5WfBfNBk1zsvT_YvBcqdIWTZqhDpinf805EawmPfDc3ydY-E10knoA1Zx4qxJKC2cZkqQRddXoIv4uzaJBGoO06IRcUwYrbY6NEOUfN5p-T0MYMUkc3LsbOPDBcOgwPXX07Zz8q1H1tnvXhWq2-UtXq0zD1bAC8YZKiHAL5EB_m2OjXcB7HDN"
                                />
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-60"
                                ></div>
                            </div>
                            <div className="p-6">
                                <h4 className="text-lg font-bold text-white">Marcus Thorne</h4>
                                <p
                                    className="text-cyan-400 text-xs font-label uppercase tracking-widest mb-4"
                                >
                                    Lead Engineer
                                </p>
                                <div className="flex gap-3 text-slate-400">
                                    <span
                                        className="material-symbols-outlined text-base hover:text-white cursor-pointer"
                                        data-icon="hub"
                                    >hub</span
                                    >
                                    <span
                                        className="material-symbols-outlined text-base hover:text-white cursor-pointer"
                                        data-icon="alternate_email"
                                    >alternate_email</span
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Final CTA --> */}
            <section className="py-24 px-6 relative overflow-hidden">
                <div
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-purple-500/10"
                ></div>
                <div
                    className="max-w-4xl mx-auto glass-card p-12 md:p-20 rounded-[2rem] text-center border-white/5 relative z-10"
                >
                    <h2
                        className="text-4xl md:text-6xl font-extrabold mb-8 font-headline leading-tight"
                    >
                        Ready to Innovate?
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            className="bg-cyan-400 text-slate-950 px-10 py-4 rounded-xl font-bold text-lg hover:bg-cyan-300 transition-all duration-300 active:opacity-80 active:scale-95"
                        >
                            Book a Consultation
                        </button>
                        <button
                            className="bg-white/10 text-white border border-white/20 px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300"
                        >
                            View Our Work
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default page