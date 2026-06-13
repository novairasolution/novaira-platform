
import React from 'react';

export default function Page() {
  return (
    <>
      

    <a href="https://wa.me/919093815689?text=I'm%20interested%20in%20learning%20more%20about%20Novaira%20Global" target="_blank" className="fixed bottom-6 right-6 z-[100] bg-[#25D366] text-white px-5 py-3 rounded-full shadow-2xl flex items-center gap-2 hover:bg-[#1ebd5a] transition-transform transform hover:-translate-y-1 font-bold">
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
                    <a href="/about" className="text-primary font-bold transition-colors">About</a>
                    <a href="/services" className="text-gray-600 hover:text-primary font-semibold transition-colors">Services</a>
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

    <div id="mobile-sidebar" className="fixed inset-0 z-[60] hidden">
        <div id="sidebar-overlay" className="absolute inset-0 bg-secondary/80 backdrop-blur-sm opacity-0 transition-opacity duration-300"></div>
        <div id="sidebar-content" className="absolute inset-y-0 right-0 max-w-[300px] w-full bg-white shadow-2xl transform translate-x-full transition-transform duration-300 flex flex-col">
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
                <span className="font-bold text-2xl text-secondary">Novaira Global</span>
                <button className="text-gray-400 hover:text-secondary p-2"><i className="fas fa-times text-xl"></i></button>
            </div>
            <div className="flex flex-col px-6 py-8 space-y-4 flex-grow">
                <a href="/about" className="text-lg font-bold text-primary">About</a>
                <a href="/services" className="text-lg font-bold text-gray-700 hover:text-primary">Services</a>
                <a href="/corporate" className="text-lg font-bold text-gray-700 hover:text-primary">Corporate</a>
                <a href="/contact" className="text-lg font-bold text-gray-700 hover:text-primary">Contact</a>
            </div>
            <div className="p-6 border-t border-gray-100 bg-gray-50 space-y-4">
                <a href="https://accounts.novairasolution.com" className="w-full block text-center border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-bold">Login/Register</a>
                <a href="/contact" className="w-full block text-center bg-primary text-white py-3 rounded-lg font-bold">Book Growth Call</a>
            </div>
        </div>
    </div>

    <section className="pt-36 pb-24 lg:pt-48 lg:pb-32 overflow-hidden relative bg-white border-b border-gray-100">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-50/50 -skew-x-12 transform origin-top-right z-0"></div>
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-purple-100 mix-blend-multiply filter blur-3xl opacity-60 animate-pulse"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                <div className="reveal">
                    <span className="inline-block py-1.5 px-4 rounded-full bg-indigo-50 text-primary font-bold text-xs sm:text-sm mb-6 border border-indigo-100 uppercase tracking-widest shadow-sm">
                        Our Story
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-secondary tracking-tight mb-6 leading-[1.1]">
                        The Engine Behind Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">App's Growth.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed font-medium">
                        We started with a simple belief: marketing should be a revenue driver, not a cost center. Over the past 3+ years, Novaira Global has grown into a global powerhouse, combining analytics and creative execution to scale digital brands.
                    </p>
                    <div className="flex items-center gap-6">
                        <div className="flex -space-x-4">
                            <img className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Novaira Global Performance Marketing Team Member 1" title="Novaira Global Team Member" />
                            <img className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" alt="Novaira Global App Growth Specialist" title="Novaira Global App Growth Specialist" />
                            <img className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="Novaira Global Media Buying Expert" title="Novaira Global Media Buying Expert" />
                            <div className="w-12 h-12 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-600 shadow-sm">+12</div>
                        </div>
                        <div className="text-sm font-medium text-gray-600">
                            Backed by a team of<br /><strong className="text-secondary">global experts.</strong>
                        </div>
                    </div>
                </div>
                
                <div className="relative reveal" style={{transitionDelay: '100ms'}}>
                    <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Novaira Global Headquarters and Office Concept" title="Novaira Global Agency Headquarters" className="rounded-3xl shadow-2xl relative z-10" />
                    <div className="absolute -bottom-8 -left-4 sm:-left-8 bg-white p-6 rounded-2xl shadow-xl z-20 border border-gray-100 animate-bounce" style={{animationDuration: '3s'}}>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center text-xl">
                                <i className="fas fa-chart-line"></i>
                            </div>
                            <div>
                                <h4 className="text-2xl font-extrabold text-secondary">3x</h4>
                                <p className="text-xs sm:text-sm text-gray-500 font-bold uppercase tracking-wider">Avg. Client ROI</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="py-20 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-16 reveal">
                
                <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-primary transition-all duration-300 transform hover:-translate-y-2 group">
                    <div className="w-16 h-16 bg-indigo-50 text-primary rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
                        <i className="fas fa-bullseye"></i>
                    </div>
                    <h3 className="text-2xl font-extrabold text-secondary mb-4">Our Mission</h3>
                    <p className="text-gray-500 leading-relaxed text-lg font-medium">
                        To empower apps and digital brands to break through the noise. We build scalable ecosystems that acquire high-value users, optimize conversion rates, and turn passive audiences into active, paying customers.
                    </p>
                </div>

                <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-2 group">
                    <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                        <i className="fas fa-globe-asia"></i>
                    </div>
                    <h3 className="text-2xl font-extrabold text-secondary mb-4">Our Vision</h3>
                    <p className="text-gray-500 leading-relaxed text-lg font-medium">
                        To become the undisputed global leader in performance-based app promotion, setting the industry standard for transparent reporting, ethical scaling, and unmatched ROI delivery across international markets.
                    </p>
                </div>

            </div>
        </div>
    </section>

    <section className="py-24 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 reveal">
                <span className="text-primary font-bold uppercase tracking-widest mb-2 block text-sm">What Drives Us</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mb-4">Our Core Values</h2>
                <p className="text-gray-500 font-medium text-lg">The principles that guide our strategies, dictate our culture, and ensure your success.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 reveal">
                <div className="text-center group bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-primary">
                    <div className="w-20 h-20 mx-auto bg-white rounded-2xl shadow-sm flex items-center justify-center text-3xl text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 mb-6 border border-gray-100">
                        <i className="fas fa-chart-pie"></i>
                    </div>
                    <h4 className="text-xl font-extrabold text-secondary mb-3">Data Over Guesses</h4>
                    <p className="text-gray-500 font-medium">Every decision, ad spend, and creative iteration is backed by hard analytics.</p>
                </div>

                <div className="text-center group bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-primary">
                    <div className="w-20 h-20 mx-auto bg-white rounded-2xl shadow-sm flex items-center justify-center text-3xl text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 mb-6 border border-gray-100">
                        <i className="fas fa-search-dollar"></i>
                    </div>
                    <h4 className="text-xl font-extrabold text-secondary mb-3">Radical Transparency</h4>
                    <p className="text-gray-500 font-medium">You will always know exactly where your budget goes and what it achieves.</p>
                </div>

                <div className="text-center group bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-primary">
                    <div className="w-20 h-20 mx-auto bg-white rounded-2xl shadow-sm flex items-center justify-center text-3xl text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 mb-6 border border-gray-100">
                        <i className="fas fa-bolt"></i>
                    </div>
                    <h4 className="text-xl font-extrabold text-secondary mb-3">Agile Execution</h4>
                    <p className="text-gray-500 font-medium">The digital landscape shifts fast; our campaign strategies pivot faster.</p>
                </div>

                <div className="text-center group bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-primary">
                    <div className="w-20 h-20 mx-auto bg-white rounded-2xl shadow-sm flex items-center justify-center text-3xl text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 mb-6 border border-gray-100">
                        <i className="fas fa-handshake"></i>
                    </div>
                    <h4 className="text-xl font-extrabold text-secondary mb-3">True Partnership</h4>
                    <p className="text-gray-500 font-medium">We treat your business and budget with the same respect as our own.</p>
                </div>
            </div>
        </div>
    </section>

    <section className="py-24 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==')]"></div>
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-primary/20 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 reveal">
            <div className="flex flex-col lg:flex-row items-center gap-16">
                <div className="lg:w-1/2">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">Based in India.<br /><span className="text-primary">Operating Globally.</span></h2>
                    <p className="text-gray-400 text-lg mb-8 leading-relaxed font-medium">
                        From our distributed hubs in India, our teams deploy cross-border marketing campaigns that resonate locally and convert globally. We combine localized cultural intelligence with international performance standards to help you penetrate new markets effectively.
                    </p>
                    
                    <ul className="space-y-4 mb-8">
                        <li className="flex items-center gap-4 text-gray-300 font-medium text-lg">
                            <i className="fas fa-check-circle text-primary text-xl"></i> Successfully scaled apps in 25+ countries.
                        </li>
                        <li className="flex items-center gap-4 text-gray-300 font-medium text-lg">
                            <i className="fas fa-check-circle text-primary text-xl"></i> Multilingual campaign execution.
                        </li>
                        <li className="flex items-center gap-4 text-gray-300 font-medium text-lg">
                            <i className="fas fa-check-circle text-primary text-xl"></i> 24/7 account monitoring and optimization.
                        </li>
                    </ul>
                </div>
                
                <div className="lg:w-1/2 w-full">
                    <div className="bg-gray-900/80 rounded-3xl p-8 lg:p-10 border border-gray-700 shadow-2xl relative backdrop-blur-sm">
                        <div className="absolute top-4 right-4 flex space-x-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <h4 className="text-xl font-extrabold mb-8 text-white mt-2">Global Impact Tracker</h4>
                        
                        <div className="space-y-8">
                            <div>
                                <div className="flex justify-between text-sm mb-3">
                                    <span className="text-gray-400 font-bold uppercase tracking-wider">North America</span>
                                    <span className="font-extrabold text-white">40%</span>
                                </div>
                                <div className="w-full bg-gray-800 rounded-full h-3">
                                    <div className="bg-primary h-3 rounded-full" style={{width: '40%'}}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-sm mb-3">
                                    <span className="text-gray-400 font-bold uppercase tracking-wider">Europe & UK</span>
                                    <span className="font-extrabold text-white">35%</span>
                                </div>
                                <div className="w-full bg-gray-800 rounded-full h-3">
                                    <div className="bg-purple-500 h-3 rounded-full" style={{width: '35%'}}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-sm mb-3">
                                    <span className="text-gray-400 font-bold uppercase tracking-wider">APAC & MENA</span>
                                    <span className="font-extrabold text-white">25%</span>
                                </div>
                                <div className="w-full bg-gray-800 rounded-full h-3">
                                    <div className="bg-teal-400 h-3 rounded-full" style={{width: '25%'}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="py-24 bg-accent reveal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-secondary mb-6 tracking-tight">Ready to write your app's success story?</h2>
            <p className="text-lg md:text-xl text-gray-600 mb-10 font-medium">Stop wasting ad spend. Partner with Novaira Global and get direct founder support to build your scalable digital ecosystem today.</p>
            <a href="/contact" className="inline-flex items-center justify-center bg-primary hover:bg-indigo-700 text-white px-10 py-5 rounded-full font-extrabold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 gap-3">
                Book Your Strategy Call <i className="fas fa-arrow-right"></i>
            </a>

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
                        <li><a href="/about" className="text-primary font-semibold transition-colors">About</a></li>
                        <li><a href="/services" className="text-gray-500 hover:text-primary font-semibold transition-colors">Services</a></li>
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
        // Sidebar Logic (Synchronized with index.php)
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

        // Scroll Animations (Synchronized with index.php)
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
