
import React from 'react';

export default function Page() {
  return (
    <>
      

    {/*  WhatsApp Floating Quick Start (Synchronized)  */}
    <a href="https://wa.me/919093815689?text=I'm%20interested%20in%20Novaira%20Global's%20Corporate%20Solutions" target="_blank" className="fixed bottom-6 right-6 z-[100] bg-[#25D366] text-white px-5 py-3 rounded-full shadow-2xl flex items-center gap-2 hover:bg-[#1ebd5a] transition-transform transform hover:-translate-y-1 font-bold">
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
                    <a href="/services" className="text-gray-600 hover:text-primary font-semibold transition-colors">Services</a>
                    <a href="/corporate" className="text-primary font-bold transition-colors">Corporate</a>
                    <a href="/contact" className="text-gray-600 hover:text-primary font-semibold transition-colors">Contact</a>
                </nav>

                <div className="hidden md:flex items-center space-x-5">
                    <a href="https://accounts.novairasolution.com" className="text-gray-500 hover:text-secondary font-semibold transition-colors">Login/Register</a>
                    <a href="/contact" className="bg-primary hover:bg-indigo-700 text-white px-7 py-2.5 rounded-full font-bold transition-all shadow-lg transform hover:-translate-y-0.5 text-sm uppercase tracking-wide">Partner With Us</a>
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
                <a href="/services" className="text-lg font-bold text-gray-700 hover:text-primary">Services</a>
                <a href="/corporate" className="text-lg font-bold text-primary">Corporate</a>
                <a href="/contact" className="text-lg font-bold text-gray-700 hover:text-primary">Contact</a>
            </div>

            <div className="p-6 border-t border-gray-100 bg-gray-50 space-y-4">
                <a href="https://accounts.novairasolution.com" className="w-full block text-center border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-bold">Login/Register</a>
                <a href="/contact" className="w-full block text-center bg-primary text-white py-3 rounded-lg font-bold">Partner With Us</a>
            </div>
        </div>
    </div>

    {/*  HERO SECTION  */}
    <section className="pt-36 pb-20 lg:pt-48 lg:pb-32 overflow-hidden relative bg-secondary text-white border-b border-gray-800">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-primary mix-blend-screen filter blur-[100px] opacity-40 animate-pulse"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                <div className="reveal">
                    <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 text-indigo-200 font-bold text-xs sm:text-sm mb-6 border border-white/20 uppercase tracking-widest shadow-sm">
                        Enterprise Solutions
                    </span>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                        Marketing Infrastructure for <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Industry Leaders.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed font-medium">
                        We provide scalable, compliant, and data-centric digital ecosystems designed specifically for corporate brands, enterprise-level apps, and high-growth B2B organizations.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 px-4 sm:px-0">
                        <a href="/contact" className="bg-primary hover:bg-indigo-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 text-center flex items-center justify-center gap-2">
                            Schedule Executive Briefing <i className="fas fa-arrow-right text-sm"></i>
                        </a>
                    </div>
                </div>
                
                <div className="relative reveal hidden lg:block" style={{transitionDelay: '100ms'}}>
                    <div className="grid grid-cols-2 gap-6">
                        <img src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Corporate Boardroom Strategy at Novaira Global" title="Enterprise Corporate Boardroom" className="rounded-3xl shadow-2xl mt-12 transition-transform duration-500 hover:-translate-y-2" />
                        <img src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Enterprise Data Analytics Tracking" title="Data Analytics" className="rounded-3xl shadow-2xl transition-transform duration-500 hover:-translate-y-2" />
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/*  WHY CHOOSE US  */}
    <section className="py-24 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 reveal">
                <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mb-4">Why Enterprises Choose Novaira Global</h2>
                <p className="text-gray-500 font-medium text-lg">We understand the complexities of corporate structures, compliance requirements, and the need for flawless, scalable execution.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 reveal">
                <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:shadow-xl hover:border-primary transition-all duration-300 transform hover:-translate-y-2 group">
                    <div className="w-16 h-16 bg-indigo-100 text-primary rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:bg-primary group-hover:text-white transition-colors shadow-sm">
                        <i className="fas fa-users-cog"></i>
                    </div>
                    <h3 className="text-xl font-extrabold text-secondary mb-4">Dedicated Teams</h3>
                    <p className="text-gray-600 font-medium leading-relaxed">Get a dedicated account director, media buyers, and creative strategists who act as an extension of your internal corporate team.</p>
                </div>

                <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:shadow-xl hover:border-primary transition-all duration-300 transform hover:-translate-y-2 group">
                    <div className="w-16 h-16 bg-indigo-100 text-primary rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:bg-primary group-hover:text-white transition-colors shadow-sm">
                        <i className="fas fa-shield-alt"></i>
                    </div>
                    <h3 className="text-xl font-extrabold text-secondary mb-4">Compliance & Security</h3>
                    <p className="text-gray-600 font-medium leading-relaxed">We strictly adhere to global data privacy laws (GDPR, CCPA) ensuring your user acquisition strategies are 100% compliant and secure.</p>
                </div>

                <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:shadow-xl hover:border-primary transition-all duration-300 transform hover:-translate-y-2 group">
                    <div className="w-16 h-16 bg-indigo-100 text-primary rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:bg-primary group-hover:text-white transition-colors shadow-sm">
                        <i className="fas fa-project-diagram"></i>
                    </div>
                    <h3 className="text-xl font-extrabold text-secondary mb-4">Scalable Infrastructure</h3>
                    <p className="text-gray-600 font-medium leading-relaxed">Whether you are expanding into 1 country or 50, our operational framework is designed to scale without bottlenecks.</p>
                </div>
            </div>
        </div>
    </section>

    {/*  CONTENT SECTIONS  */}
    <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 reveal">
                <div className="lg:w-1/2 w-full px-4 sm:px-0">
                    <div className="relative group">
                        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Corporate Team Collaboration" title="Corporate Team" className="rounded-3xl shadow-xl relative z-10 transition-transform duration-500 group-hover:scale-[1.02]" />
                        <div className="absolute -top-6 -left-6 w-full h-full border-4 border-secondary rounded-3xl z-0 hidden sm:block transition-transform duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2"></div>
                    </div>
                </div>
                <div className="lg:w-1/2 w-full mt-10 lg:mt-0">
                    <span className="text-primary font-extrabold uppercase tracking-widest mb-3 block text-sm">01 / Corporate Branding</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mb-6">Elevating Corporate Identity</h2>
                    <p className="text-gray-600 text-lg mb-8 leading-relaxed font-medium">
                        For established enterprises, brand perception is everything. We redefine and solidify your corporate identity across all digital touchpoints, ensuring consistency, authority, and trust among B2B partners and stakeholders.
                    </p>
                    <ul className="space-y-4">
                        <li className="flex items-center gap-4 text-gray-700 font-bold">
                            <i className="fas fa-check-circle text-primary text-xl"></i> Executive Brand Positioning
                        </li>
                        <li className="flex items-center gap-4 text-gray-700 font-bold">
                            <i className="fas fa-check-circle text-primary text-xl"></i> Corporate PR & Authority Building
                        </li>
                        <li className="flex items-center gap-4 text-gray-700 font-bold">
                            <i className="fas fa-check-circle text-primary text-xl"></i> Multi-channel Consistency Audits
                        </li>
                    </ul>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16 reveal">
                <div className="lg:w-1/2 w-full px-4 sm:px-0">
                    <div className="relative group">
                        <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Global Data Scaling" title="Global Data Scaling" className="rounded-3xl shadow-xl relative z-10 transition-transform duration-500 group-hover:scale-[1.02]" />
                        <div className="absolute -top-6 -right-6 w-full h-full border-4 border-indigo-500 rounded-3xl z-0 hidden sm:block transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2"></div>
                    </div>
                </div>
                <div className="lg:w-1/2 w-full mt-10 lg:mt-0">
                    <span className="text-primary font-extrabold uppercase tracking-widest mb-3 block text-sm">02 / Enterprise Growth</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mb-6">Global App & Digital Scaling</h2>
                    <p className="text-gray-600 text-lg mb-8 leading-relaxed font-medium">
                        When deploying multi-million dollar budgets, efficiency is paramount. We build advanced, automated acquisition funnels that scale your app or digital service globally while aggressively lowering your CAC (Customer Acquisition Cost).
                    </p>
                    <ul className="space-y-4">
                        <li className="flex items-center gap-4 text-gray-700 font-bold">
                            <i className="fas fa-check-circle text-primary text-xl"></i> International Market Penetration
                        </li>
                        <li className="flex items-center gap-4 text-gray-700 font-bold">
                            <i className="fas fa-check-circle text-primary text-xl"></i> High-Volume Media Buying
                        </li>
                        <li className="flex items-center gap-4 text-gray-700 font-bold">
                            <i className="fas fa-check-circle text-primary text-xl"></i> Advanced Cohort Analysis
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </section>

    {/*  TRUSTED BY LOGOS  */}
    <section className="py-16 bg-white border-y border-gray-200 reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm font-extrabold text-gray-400 uppercase tracking-widest mb-10">Trusted by Fast-Growing Enterprises Globally</p>
            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                <div className="text-2xl font-black text-gray-800 tracking-tighter hover:text-indigo-600 transition-colors cursor-pointer">CORP<span className="text-gray-400">ONE</span></div>
                <div className="text-2xl font-black text-gray-800 tracking-tighter hover:text-blue-600 transition-colors cursor-pointer"><i className="fas fa-globe"></i> GlobalTech</div>
                <div className="text-2xl font-black text-gray-800 tracking-tighter hover:text-green-600 transition-colors cursor-pointer">Apex<span className="font-light">Financial</span></div>
                <div className="text-2xl font-black text-gray-800 tracking-tighter hover:text-purple-600 transition-colors cursor-pointer">NEXUS<span className="text-gray-400">SYS</span></div>
            </div>
        </div>
    </section>

    {/*  CALL TO ACTION WITH SECURITY TRUST INDICATORS (Synchronized)  */}
    <section className="py-24 bg-accent reveal">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold text-secondary mb-6 tracking-tight">Transform Your Corporate Digital Ecosystem</h2>
            <p className="text-lg md:text-xl text-gray-600 mb-10 font-medium max-w-3xl mx-auto">Bypass the red tape. Partner directly with Novaira Global's leadership team to architect a growth strategy that aligns with your boardroom objectives.</p>
            <a href="/contact" className="inline-flex items-center justify-center bg-primary hover:bg-indigo-700 text-white px-10 py-5 rounded-full font-extrabold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 gap-3">
                Request a Corporate Proposal <i className="fas fa-file-contract"></i>
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
                        <li><a href="/services" className="text-gray-500 hover:text-primary font-semibold transition-colors">Services</a></li>
                        <li><a href="/corporate" className="text-primary font-semibold transition-colors">Corporate</a></li>
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
