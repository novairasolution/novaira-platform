
import React from 'react';

export default function Page() {
  return (
    <>
      

    {/*  WhatsApp Floating Quick Start (Synchronized)  */}
    <a href="https://wa.me/919093815689?text=I'm%20interested%20in%20the%20Novaira%20Global%20services" target="_blank" className="fixed bottom-6 right-6 z-[100] bg-[#25D366] text-white px-5 py-3 rounded-full shadow-2xl flex items-center gap-2 hover:bg-[#1ebd5a] transition-transform transform hover:-translate-y-1 font-bold">
        <i className="fab fa-whatsapp text-2xl"></i>
        <span className="hidden md:inline">Quick Start</span>
    </a>

    {/*  Sticky Navbar (Synchronized)  */}
    <header className="fixed w-full top-0 z-50 glass-nav transition-all duration-300 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
                <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer">
                    <div className="w-10 h-10 bg-secondary text-white rounded-lg flex items-center justify-center font-bold text-xl shadow-lg">N</div>
                    <span className="font-extrabold text-2xl tracking-tight text-secondary">Novaira <span className="text-primary font-bold">Global</span></span>
                </div>

                <nav className="hidden md:flex space-x-8">
                    <a href="/" className="text-gray-600 hover:text-primary font-semibold transition-colors">Home</a>
                    <a href="/about" className="text-gray-600 hover:text-primary font-semibold transition-colors">About</a>
                    <a href="/services" className="text-primary font-bold transition-colors">Services</a>
                    <a href="/corporate" className="text-gray-600 hover:text-primary font-semibold transition-colors">Corporate</a>
                    <a href="/contact" className="text-gray-600 hover:text-primary font-semibold transition-colors">Contact</a>
                </nav>

                <div className="hidden md:flex items-center space-x-5">
                    <a href="https://accounts.novairasolution.com" className="text-gray-500 hover:text-secondary font-semibold transition-colors">Login/Register</a>
                    <a href="/contact" className="bg-primary hover:bg-indigo-700 text-white px-7 py-2.5 rounded-full font-bold transition-all shadow-lg transform hover:-translate-y-0.5 text-sm uppercase tracking-wide">Book Growth Call</a>
                </div>

                <div className="md:hidden flex items-center">
                    <button id="mobile-menu-btn" className="text-gray-800 hover:text-primary focus:outline-none p-2" aria-label="Toggle Menu">
                        <i className="fas fa-bars text-2xl"></i>
                    </button>
                </div>
            </div>
        </div>
    </header>

    {/*  Mobile Sidebar (Synchronized)  */}
    <div id="mobile-sidebar" className="fixed inset-0 z-[60] hidden">
        <div id="sidebar-overlay" className="absolute inset-0 bg-secondary/80 backdrop-blur-sm opacity-0 sidebar-overlay"></div>
        
        <div id="sidebar-content" className="absolute inset-y-0 right-0 max-w-[300px] w-full bg-white shadow-2xl transform translate-x-full sidebar-menu flex flex-col">
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
                <span className="font-bold text-2xl text-secondary">Novaira Global</span>
                <button className="text-gray-400 hover:text-secondary p-2" aria-label="Close Menu">
                    <i className="fas fa-times text-xl"></i>
                </button>
            </div>
            
            <div className="flex flex-col px-6 py-8 space-y-4 flex-grow">
                <a href="/" className="text-lg font-bold text-gray-700 hover:text-primary">Home</a>
                <a href="/about" className="text-lg font-bold text-gray-700 hover:text-primary">About</a>
                <a href="/services" className="text-lg font-bold text-primary">Services</a>
                <a href="/corporate" className="text-lg font-bold text-gray-700 hover:text-primary">Corporate</a>
                <a href="/contact" className="text-lg font-bold text-gray-700 hover:text-primary">Contact</a>
            </div>

            <div className="p-6 border-t border-gray-100 bg-gray-50 space-y-4">
                <a href="https://accounts.novairasolution.com" className="w-full block text-center border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-bold">Login/Register</a>
                <a href="/contact" className="w-full block text-center bg-primary text-white py-3 rounded-lg font-bold">Book Growth Call</a>
            </div>
        </div>
    </div>

    {/*  HERO SECTION  */}
    <section className="pt-36 pb-24 lg:pt-48 lg:pb-32 overflow-hidden relative bg-white border-b border-gray-200">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-50 via-white to-white z-0"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center reveal">
            <span className="inline-block py-1.5 px-4 rounded-full bg-indigo-50 text-primary font-bold text-xs sm:text-sm mb-6 border border-indigo-100 shadow-sm uppercase tracking-widest">
                What We Do
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-secondary tracking-tight mb-6 leading-[1.1] max-w-4xl mx-auto">
                Scalable Solutions for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">Digital Brands.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto font-medium">
                We don't believe in one-size-fits-all. Our services are custom-tailored to plug the leaks in your funnel, accelerate user acquisition, and build a brand that commands market authority.
            </p>
        </div>
    </section>

    <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

            {/*  APP GROWTH SECTION  */}
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 reveal">
                <div className="lg:w-1/2 w-full px-4 sm:px-0">
                    <div className="relative group">
                        <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="App Growth Strategies and ASO Optimization by Novaira Global" title="App Growth Strategies" className="rounded-3xl shadow-xl relative z-10 transition-transform duration-500 group-hover:scale-[1.02]" />
                        <div className="absolute -top-6 -left-6 w-full h-full border-4 border-primary rounded-3xl z-0 hidden sm:block transition-transform duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2"></div>
                        <div className="absolute -bottom-6 -right-2 sm:-right-6 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-4 animate-bounce" style={{animationDuration: '4s'}}>
                            <div className="w-12 h-12 bg-indigo-100 text-primary rounded-full flex items-center justify-center text-xl">
                                <i className="fas fa-arrow-up"></i>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 font-extrabold uppercase tracking-wider">Organic Traffic</p>
                                <p className="text-xl font-extrabold text-secondary">+150%</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 w-full mt-10 lg:mt-0">
                    <div className="w-16 h-16 bg-indigo-100 text-primary rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-sm">
                        <i className="fas fa-rocket"></i>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mb-6">App Growth & Performance</h2>
                    <p className="text-gray-600 text-lg mb-8 leading-relaxed font-medium">
                        We turn your app into a user acquisition machine. By combining organic optimization with targeted user journeys, we ensure your app ranks higher, converts better, and retains users longer.
                    </p>
                    <ul className="space-y-5">
                        <li className="flex items-start gap-4">
                            <div className="mt-1 text-primary text-xl"><i className="fas fa-check-circle"></i></div>
                            <div>
                                <h4 className="font-extrabold text-lg text-secondary">App Store Optimization (ASO)</h4>
                                <p className="text-gray-500 text-sm font-medium mt-1">Keyword strategies, screenshot optimization, and localized store listings to dominate search results.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="mt-1 text-primary text-xl"><i className="fas fa-check-circle"></i></div>
                            <div>
                                <h4 className="font-extrabold text-lg text-secondary">User Retention Strategies</h4>
                                <p className="text-gray-500 text-sm font-medium mt-1">Onboarding optimization, push notification framing, and lifecycle marketing.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="mt-1 text-primary text-xl"><i className="fas fa-check-circle"></i></div>
                            <div>
                                <h4 className="font-extrabold text-lg text-secondary">Conversion Rate Optimization (CRO)</h4>
                                <p className="text-gray-500 text-sm font-medium mt-1">A/B testing user flows to ensure every click has the highest probability of turning into an install.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            {/*  PAID ADVERTISING SECTION  */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16 reveal">
                <div className="lg:w-1/2 w-full px-4 sm:px-0">
                    <div className="relative group">
                        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Paid Advertising Management and Media Buying by Novaira Global" title="Paid Advertising Management" className="rounded-3xl shadow-xl relative z-10 transition-transform duration-500 group-hover:scale-[1.02]" />
                        <div className="absolute -top-6 -right-6 w-full h-full border-4 border-purple-500 rounded-3xl z-0 hidden sm:block transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2"></div>
                    </div>
                </div>
                <div className="lg:w-1/2 w-full mt-10 lg:mt-0">
                    <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-sm">
                        <i className="fas fa-chart-line"></i>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mb-6">Paid Advertising Management</h2>
                    <p className="text-gray-600 text-lg mb-8 leading-relaxed font-medium">
                        Stop burning budget on poorly optimized campaigns. We manage your ad spend across multiple platforms with a ruthless focus on lowering Cost Per Acquisition (CPA) and maximizing Return on Ad Spend (ROAS).
                    </p>
                    <ul className="space-y-5">
                        <li className="flex items-start gap-4">
                            <div className="mt-1 text-purple-600 text-xl"><i className="fas fa-check-circle"></i></div>
                            <div>
                                <h4 className="font-extrabold text-lg text-secondary">Multi-Platform Execution</h4>
                                <p className="text-gray-500 text-sm font-medium mt-1">Expert media buying on Google Ads, Meta (Facebook/Instagram), Apple Search Ads, and TikTok.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="mt-1 text-purple-600 text-xl"><i className="fas fa-check-circle"></i></div>
                            <div>
                                <h4 className="font-extrabold text-lg text-secondary">Creative Testing & Iteration</h4>
                                <p className="text-gray-500 text-sm font-medium mt-1">Continuous production and A/B testing of ad creatives to find winning formulas.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="mt-1 text-purple-600 text-xl"><i className="fas fa-check-circle"></i></div>
                            <div>
                                <h4 className="font-extrabold text-lg text-secondary">Granular Analytics Tracking</h4>
                                <p className="text-gray-500 text-sm font-medium mt-1">Integration of AppsFlyer, Adjust, or Firebase to track exact attribution and ROI.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            {/*  BRAND POSITIONING SECTION  */}
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 reveal">
                <div className="lg:w-1/2 w-full px-4 sm:px-0">
                    <div className="relative group">
                        <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Brand Positioning and Strategy Services by Novaira Global" title="Brand Positioning & Strategy" className="rounded-3xl shadow-xl relative z-10 transition-transform duration-500 group-hover:scale-[1.02]" />
                        <div className="absolute -top-6 -left-6 w-full h-full border-4 border-secondary rounded-3xl z-0 hidden sm:block transition-transform duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2"></div>
                    </div>
                </div>
                <div className="lg:w-1/2 w-full mt-10 lg:mt-0">
                    <div className="w-16 h-16 bg-slate-200 text-secondary rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-sm">
                        <i className="fas fa-bullseye"></i>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mb-6">Brand Positioning & Strategy</h2>
                    <p className="text-gray-600 text-lg mb-8 leading-relaxed font-medium">
                        A great product needs a compelling narrative. We help clarify your messaging and build a visual identity that establishes trust, strengthens your market authority, and separates you from the competition.
                    </p>
                    <ul className="space-y-5">
                        <li className="flex items-start gap-4">
                            <div className="mt-1 text-secondary text-xl"><i className="fas fa-check-circle"></i></div>
                            <div>
                                <h4 className="font-extrabold text-lg text-secondary">Market Research & Competitor Analysis</h4>
                                <p className="text-gray-500 text-sm font-medium mt-1">Finding the white-space in your industry to position your brand uniquely.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="mt-1 text-secondary text-xl"><i className="fas fa-check-circle"></i></div>
                            <div>
                                <h4 className="font-extrabold text-lg text-secondary">Messaging Frameworks</h4>
                                <p className="text-gray-500 text-sm font-medium mt-1">Crafting clear, persuasive copy for your landing pages, app stores, and ad campaigns.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="mt-1 text-secondary text-xl"><i className="fas fa-check-circle"></i></div>
                            <div>
                                <h4 className="font-extrabold text-lg text-secondary">Corporate Branding</h4>
                                <p className="text-gray-500 text-sm font-medium mt-1">Visual strategy, logo refinement, and establishing brand guidelines for consistent communication.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </section>

    {/*  CTA & TRUST INDICATORS (Synchronized)  */}
    <section className="py-24 bg-accent reveal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-secondary mb-6 tracking-tight">Ready to write your app's success story?</h2>
            <p className="text-lg md:text-xl text-gray-600 mb-10 font-medium">Stop wasting ad spend. Partner with Novaira Global and get direct founder support to build your scalable digital ecosystem today.</p>
            <a href="/contact" className="inline-flex items-center justify-center bg-primary hover:bg-indigo-700 text-white px-10 py-5 rounded-full font-extrabold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 gap-3">
                Book Your Strategy Call <i className="fas fa-arrow-right"></i>
            </a>

            {/*  SECURITY TRUST INDICATORS  */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 mt-12 max-w-2xl mx-auto shadow-sm text-left">
                <h4 className="text-secondary font-bold mb-4 flex items-center justify-center gap-2"><i className="fas fa-shield-check text-green-500"></i> Enterprise-Grade Security</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-600 font-medium">
                    <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i> AI-Powered Bot Protection</li>
                    <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i> Advanced WAF Security</li>
                    <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i> DDoS Mitigation</li>
                    <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i> End-to-End Encryption</li>
                    <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i> Secure Infrastructure</li>
                    <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i> Real-Time Monitoring</li>
                </ul>
            </div>
        </div>
    </section>

    {/*  FOOTER (Perfectly Synchronized)  */}
    <footer className="bg-gray-50 pt-20 pb-10 border-t border-gray-200">
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
                        <li><a href="/services" className="text-primary font-semibold transition-colors">Services</a></li>
                        <li><a href="/corporate" className="text-gray-500 hover:text-primary font-semibold transition-colors">Corporate</a></li>
                        <li><a href="/contact" className="text-gray-500 hover:text-primary font-semibold transition-colors">Contact</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-extrabold text-secondary mb-6 uppercase text-sm tracking-widest">Core SEO Expertise</h4>
                    <ul className="space-y-4">
                        <li><a href="/contact" className="text-gray-500 hover:text-primary font-semibold transition-colors">App User Acquisition (UA)</a></li>
                        <li><a href="/contact" className="text-gray-500 hover:text-primary font-semibold transition-colors">App Store Optimization (ASO)</a></li>
                        <li><a href="/contact" className="text-gray-500 hover:text-primary font-semibold transition-colors">Customer LTV Optimization</a></li>
                        <li><a href="/contact" className="text-gray-500 hover:text-primary font-semibold transition-colors">Lower Cost Per Install (CPI)</a></li>
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
        
        mobileSidebar.addEventListener('click', (e) => {
            if (e.target === mobileSidebar || e.target === sidebarOverlay) {
                closeSidebar();
            }
        });

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

    {/* Start of Tawk.to Script */}
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
    {/* End of Tawk.to Script */}

    </>
  );
}
