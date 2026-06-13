import React from 'react';
import Image from "next/image";
import { ContactForm } from "../components/ContactForm";

export default function Page() {
  return (
    <>
      

    <a href="https://wa.me/919093815689?text=I'm%20interested%20in%20the%20Budget%20Plan%20to%20grow%20my%20app" target="_blank" className="fixed bottom-6 right-6 z-[100] bg-[#25D366] text-white px-5 py-3 rounded-full shadow-2xl flex items-center gap-2 hover:bg-[#1ebd5a] transition-transform transform hover:-translate-y-1 font-bold">
        <i className="fab fa-whatsapp text-2xl"></i>
        <span className="hidden md:inline">Quick Start</span>
    </a>

    <header className="fixed w-full top-0 z-50 glass-nav transition-all duration-300 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
                <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer">
                    <div className="w-10 h-10 bg-secondary text-white rounded-lg flex items-center justify-center font-bold text-xl shadow-lg">N</div>
                    <span className="font-extrabold text-2xl tracking-tight text-secondary">Novaira <span className="text-primary font-bold">Global</span></span>
                </div>
                <nav className="hidden md:flex space-x-8">
                    <a href="/about" className="text-gray-600 hover:text-primary font-semibold transition-colors">About</a>
                    <a href="/services" className="text-gray-600 hover:text-primary font-semibold transition-colors">Services</a>
                    <a href="/corporate" className="text-gray-600 hover:text-primary font-semibold transition-colors">Corporate</a>
                    <a href="/contact" className="text-gray-600 hover:text-primary font-semibold transition-colors">Contact</a>
                </nav>
                <div className="hidden md:flex items-center space-x-5">
                    <a href="https://accounts.novairasolution.com" className="text-gray-500 hover:text-secondary font-semibold transition-colors">Login/Register</a>
                    <a href="#contact" className="bg-primary hover:bg-indigo-700 text-white px-7 py-2.5 rounded-full font-bold transition-all shadow-lg transform hover:-translate-y-0.5 text-sm uppercase tracking-wide">Book Growth Call</a>
                </div>
                <div className="md:hidden flex items-center">
                    <button id="mobile-menu-btn" className="text-gray-800 hover:text-primary focus:outline-none p-2" aria-label="Toggle Menu">
                        <i className="fas fa-bars text-2xl"></i>
                    </button>
                </div>
            </div>
        </div>
    </header>

    <div id="mobile-sidebar" className="fixed inset-0 z-[60] hidden">
        <div id="sidebar-overlay" className="absolute inset-0 bg-secondary/80 backdrop-blur-sm opacity-0 transition-opacity duration-300"></div>
        <div id="sidebar-content" className="absolute inset-y-0 right-0 max-w-[300px] w-full bg-white shadow-2xl transform translate-x-full transition-transform duration-300 flex flex-col">
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
                <span className="font-bold text-2xl text-secondary">Novaira Global</span>
                <button className="text-gray-400 hover:text-secondary p-2"><i className="fas fa-times text-xl"></i></button>
            </div>
            <div className="flex flex-col px-6 py-8 space-y-4 flex-grow">
                <a href="/about" className="text-lg font-bold text-gray-700">About</a>
                <a href="/services" className="text-lg font-bold text-gray-700">Services</a>
                <a href="/corporate" className="text-lg font-bold text-gray-700">Corporate</a>
                <a href="/contact" className="text-lg font-bold text-gray-700">Contact</a>
            </div>
            <div className="p-6 border-t border-gray-100 bg-gray-50 space-y-4">
                <a href="https://accounts.novairasolution.com" className="w-full block text-center border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-bold">Login/Register</a>
                <a href="#contact" className="w-full block text-center bg-primary text-white py-3 rounded-lg font-bold">Get Growth Plan</a>
            </div>
        </div>
    </div>

    <section id="home" className="pt-36 pb-24 lg:pt-48 lg:pb-32 overflow-hidden relative bg-white border-b border-gray-100">
        <div className="absolute top-0 inset-x-0 h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center reveal">
            <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-indigo-50 border border-indigo-100 text-primary font-bold text-xs uppercase tracking-widest mb-8">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                Global App Growth Agency
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-secondary tracking-tight mb-8 leading-[1.1]">
                We Scale Mobile Apps from 0 to 1M+ Users with <span className="text-gradient">Profitable Growth Systems</span>
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg sm:text-xl text-gray-500 mb-12 leading-relaxed font-medium">
                From early-stage initial traction to enterprise-level user acquisition. We build data-driven performance marketing and App Store Optimization (ASO) frameworks that actively reduce CPI, maximize Lifetime Value (LTV), and deliver compounding ROI.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 px-4 sm:px-0">
                <a href="#contact" className="bg-primary hover:bg-indigo-700 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-lg transition-all transform hover:-translate-y-1">Get Free App Growth Plan</a>
                <a href="#starter-package" className="bg-white hover:bg-gray-50 text-secondary border-2 border-gray-200 px-10 py-4 rounded-xl font-bold text-lg transition-all transform hover:-translate-y-1">Start with Budget Plan</a>
            </div>
            <p className="mt-6 text-sm font-semibold text-gray-400"><i className="fas fa-lock mr-1 text-green-500"></i> 100% Confidential Mobile Strategy Call</p>
        </div>
    </section>

    <section id="paths" className="py-24 bg-gray-50 reveal border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mb-4">Choose Your Custom Growth Path</h2>
                <p className="text-gray-500 font-medium text-lg">We architect and execute scalable marketing models based on your application's current lifecycle stage and user acquisition targets.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-xl hover:border-primary transition-all duration-300 flex flex-col h-full group">
                    <div className="w-14 h-14 bg-indigo-50 text-primary rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                        <i className="fas fa-rocket"></i>
                    </div>
                    <h3 className="text-2xl font-extrabold text-secondary mb-2">For Startups & Indie Devs</h3>
                    <p className="text-gray-500 mb-8 flex-grow">The ultimate launchpad. Perfect for newly launched iOS or Android apps requiring initial organic visibility, deep App Store Optimization (ASO), and cost-effective engagement strategies without heavy agency retainers.</p>
                    <a href="#starter-package" className="w-full text-center bg-gray-100 hover:bg-gray-200 text-secondary font-bold py-3 rounded-xl transition-colors">Start with Budget Plan</a>
                </div>

                <div className="bg-white rounded-3xl p-8 border-2 border-primary shadow-xl relative flex flex-col h-full transform md:-translate-y-4">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full">Most Popular</div>
                    <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-md">
                        <i className="fas fa-chart-line"></i>
                    </div>
                    <h3 className="text-2xl font-extrabold text-secondary mb-2">For Scaling Mobile Apps</h3>
                    <p className="text-gray-500 mb-8 flex-grow">Enterprise-grade User Acquisition (UA) utilizing Meta, Google App Campaigns, and programmatic channels. We focus purely on LTV &gt; CPI algorithms and aggressive ROAS optimization for VC-funded companies.</p>
                    <a href="#contact" className="w-full text-center bg-primary hover:bg-indigo-700 text-white font-bold py-3 rounded-xl transition-colors shadow-md">Get Free Growth Plan</a>
                </div>

                <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-xl hover:border-primary transition-all duration-300 flex flex-col h-full group">
                    <div className="w-14 h-14 bg-indigo-50 text-primary rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                        <i className="fas fa-handshake"></i>
                    </div>
                    <h3 className="text-2xl font-extrabold text-secondary mb-2">For Partners & Networks</h3>
                    <p className="text-gray-500 mb-8 flex-grow">Direct collaboration infrastructure. Work alongside Novaira Global to execute high-volume bulk install campaigns, manage overflow growth strategies, and tap into our verified global provider network.</p>
                    <a href="#contact" className="w-full text-center bg-gray-100 hover:bg-gray-200 text-secondary font-bold py-3 rounded-xl transition-colors">Become a Growth Partner</a>
                </div>
            </div>
        </div>
    </section>

    <section className="py-12 bg-secondary text-white relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:divide-x divide-gray-700 reveal">
                <div className="p-4"><h2 className="text-4xl md:text-5xl font-extrabold text-white mb-2">10M+</h2><p className="text-indigo-300 font-semibold text-sm uppercase tracking-widest">App Installs Driven Globally</p></div>
                <div className="p-4"><h2 className="text-4xl md:text-5xl font-extrabold text-white mb-2">2.5x–4x</h2><p className="text-indigo-300 font-semibold text-sm uppercase tracking-widest">Average Verified ROAS</p></div>
                <div className="p-4"><h2 className="text-4xl md:text-5xl font-extrabold text-white mb-2">CPI</h2><p className="text-indigo-300 font-semibold text-sm uppercase tracking-widest">Relentless Cost Reduction</p></div>
            </div>
        </div>
    </section>

    <section id="portfolio" className="py-28 bg-gray-50 reveal border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
                <h4 className="text-primary font-bold uppercase tracking-widest mb-2 text-sm">Our Marketing Portfolio</h4>
                <h2 className="text-4xl md:text-5xl font-extrabold text-secondary mb-4 tracking-tight">Trusted Growth Partner for Top-Tier Applications</h2>
                <p className="text-gray-500 max-w-2xl mx-auto text-lg mb-2">From Fintech unicorns to viral Real Money Gaming platforms, we collaborate with ambitious teams to dominate app stores globally through data-driven ad placements.</p>
                <p className="text-gray-400 text-xs font-semibold italic">* Specific client names are securely anonymized due to strict corporate NDA compliance.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                <div className="relative group bg-white rounded-[2rem] p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgb(79,70,229,0.1)] transition-all duration-500 overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-700 ease-out"></div>
                    <div className="flex items-start justify-between mb-8">
                        <div className="w-16 h-16  rounded-2xl flex items-center justify-center border border-white shadow-sm group-hover:-translate-y-1 transition-transform duration-300">
                            <i className=" text-3xl" style={{color: ''}}></i>
                        </div>
                        <span className="bg-gray-100 text-gray-500 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">App Case Study</span>
                    </div>
                    <h3 className="text-2xl font-extrabold text-secondary mb-3 pr-4 leading-tight"></h3>
                    <div className="mt-6 flex items-center">
                        <span className="inline-flex items-center gap-1.5 bg-green-50 border border-green-100 text-green-700 text-sm font-bold px-4 py-2 rounded-xl group-hover:bg-green-100 transition-colors">
                            <i className="fas fa-arrow-trend-up"></i> 
                        </span>
                    </div>
                </div>
                
            </div>
        </div>
    </section>

    <section id="starter-package" className="bg-secondary text-white reveal relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==')]"></div>
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-primary/20 to-transparent"></div>
        
        <div className="flex flex-col lg:flex-row w-full relative z-10">
            <div className="lg:w-1/2 p-10 md:p-20 xl:p-32 flex flex-col justify-center border-r border-gray-800">
                <div className="inline-block bg-primary/20 text-indigo-300 px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-widest mb-6 w-max border border-primary/30">
                    <i className="fas fa-fire text-red-400 mr-1"></i> Highly Limited Starter Slots Available
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">The Startup App Growth Package</h2>
                <p className="text-gray-400 text-xl font-medium leading-relaxed mb-10">
                    Kickstart your mobile app's journey without burning through seed capital. Our engineered starter systems focus on driving your very first cohort of high-quality active users, securing pivotal 5-star ratings, and establishing a strong App Store Optimization (ASO) baseline.
                </p>
                <a href="#contact" className="w-max bg-primary hover:bg-indigo-500 text-white px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:-translate-y-1">Claim Your Starter Campaign <i className="fas fa-arrow-right ml-2"></i></a>
            </div>
            
            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 bg-gray-900/50">
                <div className="p-12 border-b sm:border-r border-gray-800 flex flex-col justify-center hover:bg-gray-800 transition-colors">
                    <i className="fas fa-rocket text-primary text-4xl mb-6"></i>
                    <h3 className="text-2xl font-bold text-white mb-2">Targeted User Acquisition</h3>
                    <p className="text-gray-400">Micro-targeted advertising campaigns designed to secure your foundational cohort of actively engaged users.</p>
                </div>
                <div className="p-12 border-b border-gray-800 flex flex-col justify-center hover:bg-gray-800 transition-colors">
                    <i className="fas fa-eye text-primary text-4xl mb-6"></i>
                    <h3 className="text-2xl font-bold text-white mb-2">Organic ASO Boost</h3>
                    <p className="text-gray-400">Comprehensive keyword optimization, icon A/B testing, and description localization to dominate app store search rankings.</p>
                </div>
                <div className="p-12 border-b sm:border-b-0 sm:border-r border-gray-800 flex flex-col justify-center hover:bg-gray-800 transition-colors">
                    <i className="fas fa-hand-pointer text-primary text-4xl mb-6"></i>
                    <h3 className="text-2xl font-bold text-white mb-2">Retention Mechanics</h3>
                    <p className="text-gray-400">Implementation of push-notification frameworks and onboarding funnels to drastically improve Day 1 and Day 7 retention rates.</p>
                </div>
                <div className="p-12 flex flex-col justify-center hover:bg-gray-800 transition-colors">
                    <i className="fas fa-chart-line text-primary text-4xl mb-6"></i>
                    <h3 className="text-2xl font-bold text-white mb-2">Profitable Early Traction</h3>
                    <p className="text-gray-400">Transparent reporting and no bloated agency retainers—ensuring every rupee spent validates your app's product-market fit.</p>
                </div>
            </div>
        </div>
    </section>

    <section id="case-studies" className="py-28 bg-white reveal border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16 md:flex justify-between items-end">
                <div className="max-w-2xl">
                    <h4 className="text-primary font-bold uppercase tracking-widest mb-2 text-sm">Proven Performance Marketing Results</h4>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-secondary mb-4 tracking-tight">In-Depth Enterprise Case Studies</h2>
                    <p className="text-gray-500 font-medium text-lg">Real analytics, verified metrics, and exponential growth. Discover exactly how our performance marketing agency transforms stagnant advertising budgets into incredibly profitable user bases across diverse niches.</p>
                </div>
                <div className="mt-6 md:mt-0 hidden md:block">
                    <a href="#contact" className="text-secondary font-bold hover:text-primary transition-colors flex items-center gap-2 border-b-2 border-secondary hover:border-primary pb-1">Discuss Your Application <i className="fas fa-arrow-right"></i></a>
                </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-10">
                <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col relative overflow-hidden group hover:border-primary transition-colors">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10 group-hover:bg-blue-100 transition-colors"></div>
                    <div className="mb-6">
                        <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-md">Fintech App Marketing</span>
                        <h3 className="text-2xl font-extrabold text-secondary mt-4 mb-2">NeoBank Market Scale-Up</h3>
                        <p className="text-gray-500 font-semibold text-sm">Monthly UA Budget: <span className="text-secondary">₹25L/month</span></p>
                    </div>
                    <div className="space-y-4 mb-8 flex-grow">
                        <div>
                            <strong className="block text-secondary text-sm mb-1">The Marketing Problem:</strong>
                            <p className="text-gray-600 text-sm leading-relaxed">The client suffered from highly inflated Cost Per Install (CPI) metrics on Meta (Facebook/Insta) ads and severely low post-install activation rates regarding successful KYC document completions.</p>
                        </div>
                        <div>
                            <strong className="block text-secondary text-sm mb-1">Our UA Strategy Implemented:</strong>
                            <p className="text-gray-600 text-sm leading-relaxed">Strategically reallocated budget specifically to Google App Campaigns (UAC), engineered custom conversion tracking for the 'KYC Completed' in-app event, and rapidly iterated highly localized creative video assets.</p>
                        </div>
                    </div>
                    <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                        <h4 className="font-bold text-secondary text-sm mb-3 uppercase tracking-widest">Growth Results</h4>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-sm font-semibold text-gray-700"><i className="fas fa-arrow-down text-green-500"></i> 42% Net CPI Reduction</li>
                            <li className="flex items-center gap-2 text-sm font-semibold text-gray-700"><i className="fas fa-arrow-up text-green-500"></i> 2.8x ROAS Optimization</li>
                            <li className="flex items-center gap-2 text-sm font-semibold text-gray-700"><i className="fas fa-users text-blue-500"></i> +120K Verified KYC Installs</li>
                        </ul>
                    </div>
                </div>

                <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col relative overflow-hidden group hover:border-primary transition-colors">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-bl-full -z-10 group-hover:bg-purple-100 transition-colors"></div>
                    <div className="mb-6">
                        <span className="text-xs font-bold uppercase tracking-widest text-purple-600 bg-purple-50 px-3 py-1 rounded-md">Real Money Gaming (RMG)</span>
                        <h3 className="text-2xl font-extrabold text-secondary mt-4 mb-2">Rummy App User Acquisition</h3>
                        <p className="text-gray-500 font-semibold text-sm">Monthly UA Budget: <span className="text-secondary">₹60L/month</span></p>
                    </div>
                    <div className="space-y-4 mb-8 flex-grow">
                        <div>
                            <strong className="block text-secondary text-sm mb-1">The Marketing Problem:</strong>
                            <p className="text-gray-600 text-sm leading-relaxed">A completely stagnant daily active user (DAU) base coupled with poor retention metrics past Day 3. Skyrocketing user churn rates were rapidly burning through valuable performance ad spend without yielding deposits.</p>
                        </div>
                        <div>
                            <strong className="block text-secondary text-sm mb-1">Our UA Strategy Implemented:</strong>
                            <p className="text-gray-600 text-sm leading-relaxed">Integrated complex LTV-based algorithmic bidding, launched aggressive dynamic retargeting campaigns for dropped users, and utilized deep-linked ads directly routing users to specific high-stakes rummy tournaments.</p>
                        </div>
                    </div>
                    <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                        <h4 className="font-bold text-secondary text-sm mb-3 uppercase tracking-widest">Growth Results</h4>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-sm font-semibold text-gray-700"><i className="fas fa-chart-line text-green-500"></i> 65% Spike in Day-7 Retention</li>
                            <li className="flex items-center gap-2 text-sm font-semibold text-gray-700"><i className="fas fa-arrow-up text-green-500"></i> 3.2x Improvement in ROAS</li>
                            <li className="flex items-center gap-2 text-sm font-semibold text-gray-700"><i className="fas fa-download text-purple-500"></i> +400K High-Value Installs</li>
                        </ul>
                    </div>
                </div>

                <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col relative overflow-hidden group hover:border-primary transition-colors">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-full -z-10 group-hover:bg-orange-100 transition-colors"></div>
                    <div className="mb-6">
                        <span className="text-xs font-bold uppercase tracking-widest text-orange-600 bg-orange-50 px-3 py-1 rounded-md">Social Commerce & Retail</span>
                        <h3 className="text-2xl font-extrabold text-secondary mt-4 mb-2">E-Commerce Marketplace</h3>
                        <p className="text-gray-500 font-semibold text-sm">Monthly UA Budget: <span className="text-secondary">₹15L/month</span></p>
                    </div>
                    <div className="space-y-4 mb-8 flex-grow">
                        <div>
                            <strong className="block text-secondary text-sm mb-1">The Marketing Problem:</strong>
                            <p className="text-gray-600 text-sm leading-relaxed">Experiencing a massive volume of low-intent "junk" app installs resulting in a Cost Per Acquisition (CPA) on actual product purchases that was entirely unprofitable for the retail margin.</p>
                        </div>
                        <div>
                            <strong className="block text-secondary text-sm mb-1">Our UA Strategy Implemented:</strong>
                            <p className="text-gray-600 text-sm leading-relaxed">Hard transition from raw Install-Volume campaigns to Value-based Optimization (VBO) utilizing the Meta Pixel and App Events. Focused targeting models entirely on historical high-cart-value purchasers.</p>
                        </div>
                    </div>
                    <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                        <h4 className="font-bold text-secondary text-sm mb-3 uppercase tracking-widest">Growth Results</h4>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-sm font-semibold text-gray-700"><i className="fas fa-arrow-down text-green-500"></i> 55% Drop in Overall CPA</li>
                            <li className="flex items-center gap-2 text-sm font-semibold text-gray-700"><i className="fas fa-arrow-up text-green-500"></i> 4x Return on Ad Spend (ROAS)</li>
                            <li className="flex items-center gap-2 text-sm font-semibold text-gray-700"><i className="fas fa-shopping-cart text-orange-500"></i> 10x Profitable Checkout Growth</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="reviews" className="py-24 bg-accent reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h4 className="text-primary font-bold uppercase tracking-widest mb-2 text-sm">Recognized Performance Marketing Experts</h4>
            <div className="inline-block bg-yellow-100 text-yellow-800 px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-wide mb-4 shadow-sm">
                ⭐ Based on authentic Google Business Reviews
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mb-12">Rated 4.8★ on Google (100+ Verified Agency Reviews)</h2>
            
            <div className="grid md:grid-cols-3 gap-8 text-left mb-12">
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative flex flex-col h-full hover:border-primary transition-colors">
                    <div className="absolute top-6 right-6 text-gray-200 text-4xl"><i className="fas fa-quote-right"></i></div>
                    <div className="flex items-center gap-1 text-yellow-400 text-lg mb-4">
                        <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                    </div>
                    <p className="text-gray-600 font-medium italic mb-8 leading-relaxed relative z-10 flex-grow">"Exceptional agency experience working with Novaira Global. Their understanding of mobile user acquisition and ASO optimization provided highly smooth execution and remarkably strong support."</p>
                    <div className="flex items-center justify-between mt-auto">
                        <div><h3 className="font-bold text-secondary text-lg">Soma Shekhar</h3></div>
                        <div className="flex items-center gap-1 text-xs font-bold text-blue-600 bg-blue-50 border border-blue-100 px-2.5 py-1.5 rounded-md">
                            <i className="fab fa-google"></i> Verified SEO Review
                        </div>
                    </div>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative flex flex-col h-full hover:border-primary transition-colors">
                    <div className="absolute top-6 right-6 text-gray-200 text-4xl"><i className="fas fa-quote-right"></i></div>
                    <div className="flex items-center gap-1 text-yellow-400 text-lg mb-4">
                        <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                    </div>
                    <p className="text-gray-600 font-medium italic mb-8 leading-relaxed relative z-10 flex-grow">"Without a doubt, this is a highly trusted performance marketing platform. They delivered consistent Return on Ad Spend (ROAS) and tangible app store scaling results month over month."</p>
                    <div className="flex items-center justify-between mt-auto">
                        <div><h3 className="font-bold text-secondary text-lg">KartDeep India</h3></div>
                        <div className="flex items-center gap-1 text-xs font-bold text-blue-600 bg-blue-50 border border-blue-100 px-2.5 py-1.5 rounded-md">
                            <i className="fab fa-google"></i> Verified SEO Review
                        </div>
                    </div>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative flex flex-col h-full hover:border-primary transition-colors">
                    <div className="absolute top-6 right-6 text-gray-200 text-4xl"><i className="fas fa-quote-right"></i></div>
                    <div className="flex items-center gap-1 text-yellow-400 text-lg mb-4">
                        <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                    </div>
                    <p className="text-gray-600 font-medium italic mb-8 leading-relaxed relative z-10 flex-grow">"An incredibly simple and highly effective marketing system. Their approach to lowering Cost Per Install (CPI) provided a genuinely outstanding experience for our development team overall."</p>
                    <div className="flex items-center justify-between mt-auto">
                        <div><h3 className="font-bold text-secondary text-lg">F. Fathima</h3></div>
                        <div className="flex items-center gap-1 text-xs font-bold text-blue-600 bg-blue-50 border border-blue-100 px-2.5 py-1.5 rounded-md">
                            <i className="fab fa-google"></i> Verified SEO Review
                        </div>
                    </div>
                </div>
            </div>
            
            <a href="https://maps.app.goo.gl/MiW5PG13sKJcbhrS7" target="_blank" className="inline-flex items-center gap-2 bg-white text-secondary border border-gray-300 hover:border-primary hover:text-primary px-8 py-4 rounded-xl font-bold shadow-sm transition-all text-lg mb-3">
                <i className="fab fa-google text-blue-500"></i> View our Top Rated Agency profile on Google
            </a>
            <p className="text-gray-400 text-sm font-semibold">Click above to verify all enterprise performance marketing reviews directly on Google Maps.</p>
        </div>
    </section>

    <section className="reveal bg-white" id="contact">
        <div className="flex flex-col lg:flex-row min-h-[90vh]">
            
            <div className="lg:w-5/12 bg-secondary p-10 md:p-20 xl:p-32 text-white flex flex-col justify-center relative overflow-hidden">
                <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-[100px] opacity-40"></div>
                
                <div className="relative z-10">
                    <h4 className="text-primary font-bold uppercase tracking-widest mb-3 text-sm">Strategic Growth Partnership</h4>
                    <h2 className="text-5xl font-extrabold mb-6 tracking-tight">Let's Scale Your App <span className="text-white">Together.</span></h2>
                    <p className="text-gray-400 mb-8 text-xl font-medium leading-relaxed">Book a dedicated marketing consultation to uncover exactly how our proprietary UA systems and ASO formulas will scale your mobile application profitably. 100% confidential growth strategy.</p>
                    
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-10 shadow-sm backdrop-blur-sm">
                        <h4 className="text-white font-bold mb-4 flex items-center gap-2"><i className="fas fa-shield-check text-green-400"></i> Enterprise-Grade Security</h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-300 font-medium">
                            <li className="flex items-center"><i className="fas fa-check text-green-400 mr-2"></i> AI-Powered Bot Protection</li>
                            <li className="flex items-center"><i className="fas fa-check text-green-400 mr-2"></i> Advanced WAF Security</li>
                            <li className="flex items-center"><i className="fas fa-check text-green-400 mr-2"></i> DDoS Mitigation</li>
                            <li className="flex items-center"><i className="fas fa-check text-green-400 mr-2"></i> End-to-End Encryption</li>
                            <li className="flex items-center"><i className="fas fa-check text-green-400 mr-2"></i> Secure Infrastructure</li>
                            <li className="flex items-center"><i className="fas fa-check text-green-400 mr-2"></i> Real-Time Monitoring</li>
                        </ul>
                    </div>

                    <div className="space-y-8">
                        <div className="flex items-start gap-5">
                            <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-primary text-xl border border-white/10">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div>
                                <p className="text-sm text-gray-400 uppercase tracking-widest font-bold mb-1">Growth & Media Buying Queries</p>
                                <a href="mailto:support@novairasolution.com" className="text-lg font-bold hover:text-primary transition-colors">support@novairasolution.com</a>
                            </div>
                        </div>
                        <div className="flex items-start gap-5">
                            <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-primary text-xl border border-white/10">
                                <i className="fas fa-handshake"></i>
                            </div>
                            <div>
                                <p className="text-sm text-gray-400 uppercase tracking-widest font-bold mb-1">Agency & Provider Partnerships</p>
                                <a href="mailto:partners@novairasolution.com" className="text-lg font-bold hover:text-primary transition-colors">partners@novairasolution.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:w-7/12 bg-gray-50 p-10 md:p-20 xl:p-32 flex flex-col justify-center">
                <div className="max-w-3xl w-full">
                    <h2 className="text-4xl font-extrabold text-secondary mb-3">Request a Free App Growth Audit</h2>
                    <p className="text-gray-500 font-medium text-lg mb-12">We partner with innovative early-stage startups and aggressively scaling mobile enterprises.</p>

                    
                    <ContactForm />
                </div>
            </div>
        </div>
    </section>

    <section id="leadership" className="bg-white border-t border-gray-200 reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center border-b border-gray-100">
            <h4 className="text-primary font-bold uppercase tracking-widest mb-2 text-sm">Agency Leadership</h4>
            <h2 className="text-4xl md:text-5xl font-extrabold text-secondary mb-4">Meet the Growth Architect Team</h2>
            <p className="text-gray-500 font-medium text-xl max-w-2xl mx-auto">The digital marketing strategists and operational directors driving your app's exponential, data-backed scaling.</p>
        </div>

        <div className="border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <div className="w-56 h-56 md:w-72 md:h-72 flex-shrink-0">
                        <img src="https://novairasolution.com/assets/images/pratikmaji.jpeg" alt="Pratik Maji - Novaira Global Founder and Performance Marketing Director" title="Pratik Maji - Growth Architect" className="w-full h-full rounded-full object-cover shadow-2xl border-8 border-gray-50" />
                    </div>
                    <div className="text-center md:text-left flex-grow">
                        <h3 className="text-4xl font-extrabold text-secondary mb-2">Pratik Maji</h3>
                        <p className="text-primary font-bold text-lg uppercase tracking-widest mb-6">Founder / Performance Scaling & Media Buying Director</p>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-3xl">
                            Architecting scalable performance marketing systems from the ground up. Pratik brings extensive years of hands-on experience in deeply data-driven user acquisition, high-level media buying on platforms like Meta and Google, and intricate LTV optimization. He expertly ensures that every single advertising dollar injected into the funnel translates directly into aggressive, highly profitable enterprise scale.
                        </p>
                        <div className="flex gap-4 justify-center md:justify-start">
                            <a href="mailto:pratik@novairasolution.com" className="w-12 h-12 bg-gray-100 hover:bg-primary text-gray-700 hover:text-white rounded-full flex items-center justify-center transition-colors text-lg"><i className="fas fa-envelope"></i></a>
                            <a href="https://wa.me/919093815689" target="_blank" className="w-12 h-12 bg-gray-100 hover:bg-green-500 text-gray-700 hover:text-white rounded-full flex items-center justify-center transition-colors text-lg"><i className="fab fa-whatsapp"></i></a>
                            <a href="https://www.linkedin.com/in/pratik-maji-6b7494292/" target="_blank" className="w-12 h-12 bg-gray-100 hover:bg-[#0077b5] text-gray-700 hover:text-white rounded-full flex items-center justify-center transition-colors text-lg"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="bg-gray-50 border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="flex flex-col md:flex-row-reverse items-center gap-16">
                    <div className="w-56 h-56 md:w-72 md:h-72 flex-shrink-0">
                        <img src="https://novairasolution.com/assets/images/subhadeepjana.jpeg" alt="Subhadeep Jana - Novaira Global CEO and Operations Director" title="Subhadeep Jana - CEO" className="w-full h-full rounded-full object-cover shadow-2xl border-8 border-white" />
                    </div>
                    <div className="text-center md:text-right flex-grow">
                        <h3 className="text-4xl font-extrabold text-secondary mb-2">Subhadeep Jana</h3>
                        <p className="text-primary font-bold text-lg uppercase tracking-widest mb-6">CEO / Corporate Finance & Administrative Operations</p>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-3xl ml-auto">
                            Mastering the fundamental unit economics of hyper app growth. Subhadeep rigorously oversees and ensures that Novaira Global's complex operational frameworks, vital global provider network relationships, comprehensive financial forecasting models, and entire backend administrative workflows are seamlessly and perfectly aligned. His leadership serves to massively maximize Return on Investment (ROI) for both our premier digital agency and our extensive client portfolio.
                        </p>
                        <div className="flex gap-4 justify-center md:justify-end">
                            <a href="mailto:subhadeep@novairasolution.com" className="w-12 h-12 bg-white hover:bg-primary text-gray-700 hover:text-white rounded-full flex items-center justify-center transition-colors shadow-sm text-lg"><i className="fas fa-envelope"></i></a>
                            <a href="https://wa.me/918597063288" target="_blank" className="w-12 h-12 bg-white hover:bg-green-500 text-gray-700 hover:text-white rounded-full flex items-center justify-center transition-colors shadow-sm text-lg"><i className="fab fa-whatsapp"></i></a>
                            <a href="https://www.linkedin.com/in/subhadeep-jana-cse/" target="_blank" className="w-12 h-12 bg-white hover:bg-[#0077b5] text-gray-700 hover:text-white rounded-full flex items-center justify-center transition-colors shadow-sm text-lg"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="bg-secondary text-white reveal border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                <div className="lg:w-1/2">
                    <div className="inline-flex items-center gap-3 bg-blue-900/30 text-blue-300 px-5 py-2 rounded-full font-bold uppercase tracking-widest mb-6 border border-blue-800">
                        <i className="fab fa-linkedin text-xl"></i> Official B2B Page
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Stay Connected with Novaira Global Growth Experts</h2>
                    <p className="text-gray-400 text-xl font-medium leading-relaxed mb-10">
                        Follow our official company LinkedIn page to gain exclusive insights into cutting-edge performance marketing updates, advanced App Store Optimization (ASO) strategies, and deep-dive analytical case studies on successfully scaling mobile apps to over 1M+ hyper-active users.
                    </p>
                    <a href="https://www.linkedin.com/company/novaira-business-solution/" target="_blank" className="inline-flex items-center gap-3 bg-[#0077b5] hover:bg-[#005e93] text-white px-10 py-4 rounded-full font-bold text-lg transition-transform transform hover:-translate-y-1 shadow-lg">
                        Follow our Agency on LinkedIn <i className="fas fa-external-link-alt"></i>
                    </a>
                </div>
                
                <div className="lg:w-1/2 w-full">
                    <div className="bg-white rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                        <div className="h-32 bg-gradient-to-r from-gray-200 to-gray-300 relative">
                            <div className="absolute inset-0 bg-primary opacity-20 mix-blend-multiply"></div>
                        </div>
                        <div className="px-8 pb-8 relative">
                            <div className="w-24 h-24 bg-white rounded-xl border-4 border-white flex items-center justify-center shadow-md -mt-12 mb-4 overflow-hidden">
                                <img src="https://novairasolution.com/assets/images/logo.png" alt="Novaira Global Business Solution - Performance Marketing Agency Logo" title="Novaira Global Business Solution" className="w-full h-full object-contain p-2" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">Novaira Business Solution Pvt. Ltd</h3>
                            <p className="text-gray-600 font-medium mb-4">The Premier Agency Scaling Apps from 0 to 1M+ Users with Profitable Performance Marketing Growth Systems.</p>
                            <div className="text-sm text-gray-500 mb-6 flex flex-wrap gap-x-4 gap-y-2">
                                <span><i className="fas fa-map-marker-alt mr-1"></i> Global reach from India</span>
                                <span><i className="fas fa-users mr-1"></i> Data-Driven Performance Marketing</span>
                            </div>
                            <a href="https://www.linkedin.com/company/novaira-business-solution/" target="_blank" className="block w-full text-center bg-[#0077b5] text-white font-bold py-2.5 rounded-full hover:bg-[#005e93] transition-colors">
                                + Follow Novaira
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <footer className="bg-gray-50 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 text-center sm:text-left">
                <div className="col-span-1 md:col-span-1 flex flex-col items-center sm:items-start">
                    <div className="flex items-center gap-2 mb-6 cursor-pointer">
                        <div className="w-10 h-10 bg-secondary text-white rounded-lg flex items-center justify-center font-bold text-xl shadow">N</div>
                        <span className="font-extrabold text-2xl text-secondary">Novaira Global</span>
                    </div>
                    <p className="text-gray-500 font-medium leading-relaxed mb-6">
                        Enterprise App Performance Marketing.<br />
                        Scaling Digital App Ventures Globally.
                    </p>
                    <div className="flex space-x-4">
                        <a href="https://maps.app.goo.gl/MiW5PG13sKJcbhrS7" target="_blank" title="Check Novaira Global Google Reviews" className="w-10 h-10 bg-white border border-gray-200 text-gray-600 hover:text-blue-500 hover:border-blue-500 rounded-full flex items-center justify-center transition-all shadow-sm"><i className="fab fa-google"></i></a>
                        <a href="https://www.linkedin.com/company/novaira-business-solution/" target="_blank" title="Follow Novaira Global on LinkedIn" className="w-10 h-10 bg-white border border-gray-200 text-gray-600 hover:text-[#0077b5] hover:border-[#0077b5] rounded-full flex items-center justify-center transition-all shadow-sm"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>

                <div>
                    <h4 className="font-extrabold text-secondary mb-6 uppercase text-sm tracking-widest">Agency Links</h4>
                    <ul className="space-y-4">
                        <li><a href="/about" className="text-gray-500 hover:text-primary font-semibold transition-colors">About</a></li>
                        <li><a href="/services" className="text-gray-500 hover:text-primary font-semibold transition-colors">Services</a></li>
                        <li><a href="/corporate" className="text-gray-500 hover:text-primary font-semibold transition-colors">Corporate</a></li>
                        <li><a href="/contact" className="text-gray-500 hover:text-primary font-semibold transition-colors">Contact</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-extrabold text-secondary mb-6 uppercase text-sm tracking-widest">Core SEO Expertise</h4>
                    <ul className="space-y-4">
                        <li><a href="#contact" className="text-gray-500 hover:text-primary font-semibold transition-colors">App User Acquisition (UA)</a></li>
                        <li><a href="#contact" className="text-gray-500 hover:text-primary font-semibold transition-colors">App Store Optimization (ASO)</a></li>
                        <li><a href="#contact" className="text-gray-500 hover:text-primary font-semibold transition-colors">Customer LTV Optimization</a></li>
                        <li><a href="#contact" className="text-gray-500 hover:text-primary font-semibold transition-colors">Lower Cost Per Install (CPI)</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-extrabold text-secondary mb-6 uppercase text-sm tracking-widest">Legal Portal</h4>
                    <ul className="space-y-4">
                        <li><a href="/privacy-policy" className="text-gray-500 hover:text-primary font-semibold transition-colors">Corporate Privacy Policy</a></li>
                        <li><a href="/terms" className="text-gray-500 hover:text-primary font-semibold transition-colors">Agency Terms of Service</a></li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-500 font-semibold text-sm text-center md:text-left">
                    ©  Novaira Global Marketing Solutions. All rights strictly reserved.
                </p>
                <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_#22c55e]"></span>
                    <span className="text-sm font-bold text-gray-600 uppercase tracking-widest">Growth Ad Systems Fully Operational</span>
                </div>
            </div>
        </div>
    </footer>

    <script dangerouslySetInnerHTML={{ __html: `
        // Sidebar Logic
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileSidebar = document.getElementById('mobile-sidebar');
        const sidebarContent = document.getElementById('sidebar-content');
        const sidebarOverlay = document.getElementById('sidebar-overlay');

        function openSidebar() {
            mobileSidebar.classList.remove('hidden');
            setTimeout(() => {
                sidebarOverlay.classList.remove('opacity-0');
                sidebarContent.classList.remove('translate-x-full');
            }, 10);
            document.body.style.overflow = 'hidden';
        }

        function closeSidebar() {
            sidebarOverlay.classList.add('opacity-0');
            sidebarContent.classList.add('translate-x-full');
            setTimeout(() => {
                mobileSidebar.classList.add('hidden');
            }, 300);
            document.body.style.overflow = '';
        }

        mobileMenuBtn.addEventListener('click', openSidebar);

        // Scroll Animations
        document.addEventListener("DOMContentLoaded", function() {
            const reveals = document.querySelectorAll(".reveal");

            const revealOnScroll = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                        observer.unobserve(entry.target); 
                    }
                });
            }, {
                root: null,
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px"
            });

            reveals.forEach(reveal => {
                revealOnScroll.observe(reveal);
            });
        });
    ` }} />

    <script dangerouslySetInnerHTML={{ __html: `
    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
    (function(){
    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/69f8de232677791c37b8414e/1jnq27f0r';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
    })();
    ` }} />
    
    </>
  );
}
