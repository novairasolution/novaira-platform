
import React from 'react';

export default function Page() {
  return (
    <>
      

    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none opacity-50 dark:opacity-20">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
    </div>

    <div className="relative z-10 flex flex-col min-h-screen">
        
        <header className="fixed top-0 w-full z-50 bg-white/70 dark:bg-slate-950/70 backdrop-blur-2xl border-b border-slate-200/50 dark:border-white/5 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                        <i className="fab fa-google-play text-lg"></i>
                    </div>
                    <span className="font-black text-xl tracking-tight text-slate-900 dark:text-white">Novaira</span>
                </div>
                
                <div className="flex items-center gap-4">
                    <button className="sm:hidden text-slate-500 dark:text-slate-400 hover:text-blue-600 transition-colors">
                        <i className="fas fa-search text-lg"></i>
                    </button>
                    
                    <button className="w-10 h-10 rounded-full bg-slate-200/50 dark:bg-slate-800/50 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-300/50 dark:hover:bg-slate-700/50 transition-all border border-slate-300/50 dark:border-white/5 backdrop-blur-sm">
                        <i className="fas fa-sun text-amber-400"></i>
                    </button>
                </div>
            </div>
        </header>

        <main className="flex-grow pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
            
            <div className="text-center max-w-2xl mx-auto mb-10 animate-fade-in-up">
                <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">Discover Incredible <span className="text-gradient">Apps.</span></h1>
                <p className="text-slate-500 dark:text-slate-400 font-medium mb-8">Curated applications designed for the future.</p>
                
                <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <i className="fas fa-search text-slate-400 group-focus-within:text-blue-500 transition-colors"></i>
                    </div>
                    <input 
                       
                        
                        type="text" 
                        placeholder="Games, Tools, Finance..." 
                        className="w-full pl-11 pr-4 py-4 bg-white/80 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-slate-900 dark:text-white font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder-slate-400"
                     />
                    <button className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-white">
                        <i className="fas fa-times-circle"></i>
                    </button>
                </div>
            </div>

            <nav className="relative mb-8 -mx-4 px-4 sm:mx-0 sm:px-0" aria-label="App Categories">
                <div className="flex space-x-3 overflow-x-auto hide-scrollbar pb-4 pt-1 snap-x">
                    <template data-for="cat in categories">
                        <button 
                           
                           
                            className="snap-start shrink-0 px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300"
                           >
                        </button>
                    </template>
                </div>
            </nav>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <template data-for="(app, index) in filteredApps()">
                    <article 
                        className="glass-card cursor-pointer group bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/50 p-5 rounded-3xl hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden backdrop-blur-xl animate-fade-in-up">
                        
                        <div className="flex items-start gap-4 mb-4">
                            <div className="w-20 h-20 shrink-0 rounded-2xl bg-white dark:bg-slate-800 overflow-hidden shadow-sm border border-slate-100 dark:border-slate-700 relative group-hover:shadow-md transition-shadow">
                                <img className="w-full h-full object-cover" />
                            </div>
                            
                            <div className="flex-1 min-w-0 pt-1">
                                <h3 className="font-extrabold text-lg text-slate-900 dark:text-white leading-tight truncate"></h3>
                                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1 mb-2 truncate"></p>
                                
                                <div className="flex items-center gap-1 text-[11px] font-black text-amber-500">
                                    <i className="fas fa-star"></i>
                                    <span></span>
                                    <span className="text-slate-400 dark:text-slate-500 font-medium ml-1"></span>
                                </div>
                            </div>
                        </div>

                        <div className="flex-grow"></div>

                        <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700/50 flex justify-between items-center">
                            <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-1 rounded-md uppercase tracking-wide">Free</span>
                            <button className="bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 font-bold text-sm px-6 py-2 rounded-full hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-colors shadow-sm">
                                GET
                            </button>
                        </div>
                    </article>
                </template>
            </div>

            <div className="text-center py-20">
                <div className="w-24 h-24 bg-white/50 dark:bg-slate-800/50 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-6 text-slate-400 dark:text-slate-500 text-4xl shadow-sm">
                    <i className="fas fa-ghost"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No apps found</h3>
                <p className="text-slate-500 dark:text-slate-400">Try adjusting your search or category filter.</p>
            </div>

            <section className="mt-20 border-t border-slate-200/50 dark:border-white/5 pt-12 pb-4 text-center max-w-4xl mx-auto">
                <h2 className="text-2xl font-black text-slate-800 dark:text-white mb-4">Why Choose Novaira App Store?</h2>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                    Novaira App Store provides a state-of-the-art ecosystem for discovering and installing the latest Android applications. We verify all APK files to ensure 100% secure downloads.
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-xs font-bold text-slate-500">
                    <span className="bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg"><i className="fas fa-shield-alt text-emerald-500 mr-1"></i> Verified Safe</span>
                    <span className="bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg"><i className="fas fa-bolt text-amber-500 mr-1"></i> Fast Download</span>
                    <span className="bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg"><i className="fas fa-sync text-blue-500 mr-1"></i> Auto Updates</span>
                </div>
            </section>

        </main>

        <footer className="mt-auto border-t border-slate-200/50 dark:border-white/5 py-8 text-center text-sm font-medium text-slate-500 backdrop-blur-md bg-white/30 dark:bg-slate-900/30">
            <p>&copy;  Novaira Global. All rights reserved. Premium App Delivery.</p>
        </footer>
    </div>

    <div className="fixed inset-0 z-[100] flex justify-center items-end sm:items-center p-0 sm:p-4" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity"></div>
        
        <div className="relative z-10 w-full max-w-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-3xl rounded-t-[2.5rem] sm:rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-200 dark:border-white/10 flex flex-col max-h-[90vh]">
            
            <div className="px-6 py-4 flex justify-end sticky top-0 z-20">
                <button className="w-8 h-8 rounded-full bg-slate-200/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 flex items-center justify-center hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors backdrop-blur-md shadow-sm">
                    <i className="fas fa-times"></i>
                </button>
            </div>

            <div className="px-6 sm:px-10 pb-10 overflow-y-auto hide-scrollbar">
                
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8 text-center sm:text-left">
                    <div className="w-32 h-32 shrink-0 rounded-[2rem] bg-white dark:bg-slate-800 overflow-hidden shadow-xl border border-slate-100 dark:border-slate-700 relative">
                        <img className="w-full h-full object-cover" />
                    </div>
                    <div className="pt-2 flex-1 w-full">
                        <h2 className="text-3xl font-black text-slate-900 dark:text-white leading-tight mb-1"></h2>
                        <p className="text-sm font-bold text-slate-500 mb-6"></p>
                        
                        <div className="relative w-full mx-auto sm:mx-0">
                            
                            <div className="flex flex-col sm:flex-row items-center gap-4">
                                <button className="w-full sm:w-auto inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-8 py-3.5 rounded-full shadow-lg shadow-blue-500/30 transition-transform active:scale-95">
                                    <i className="fas fa-cloud-download-alt text-lg mr-2"></i> GET APP
                                </button>
                                <button className="text-blue-600 dark:text-blue-400 text-sm font-bold hover:underline">
                                    How to install?
                                </button>
                            </div>

                            <div className="w-full sm:w-auto inline-flex items-center justify-center bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-sm px-8 py-3.5 rounded-full">
                                <i className="fas fa-spinner fa-spin text-lg mr-2"></i> Starting Download...
                            </div>

                            <div className="w-full bg-emerald-50 border border-emerald-200 dark:bg-emerald-900/20 dark:border-emerald-800 rounded-2xl p-4 text-left shadow-sm mt-2">
                                <div className="flex items-start gap-3">
                                    <div className="mt-0.5 text-emerald-500 dark:text-emerald-400 text-xl">
                                        <i className="fas fa-check-circle"></i>
                                    </div>
                                    <div className="flex-1">
                                        <h5 className="font-bold text-emerald-800 dark:text-emerald-300 text-sm mb-1">Download Sent to File Manager!</h5>
                                        <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium leading-relaxed mb-3">
                                            Pull down your Android notification panel or open your "Downloads" folder to install the APK.
                                        </p>
                                        <button className="inline-flex items-center bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-4 py-2 rounded-lg shadow-sm transition-colors">
                                            <i className="fas fa-book-open mr-1.5"></i> View Install Guide
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="flex justify-between sm:justify-start sm:gap-12 py-5 border-y border-slate-200/80 dark:border-slate-700/50 mb-8 bg-slate-50/50 dark:bg-slate-800/20 rounded-2xl px-4 sm:px-0 sm:bg-transparent">
                    <div className="text-center sm:pl-4">
                        <div className="text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">Rating</div>
                        <div className="font-black text-xl text-slate-800 dark:text-white flex items-center justify-center gap-1">
                            <span></span>
                            <i className="fas fa-star text-sm text-amber-500"></i>
                        </div>
                    </div>
                    <div className="w-px bg-slate-200 dark:bg-slate-700"></div>
                    <div className="text-center">
                        <div className="text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">Size</div>
                        <div className="font-black text-xl text-slate-800 dark:text-white"></div>
                    </div>
                    <div className="w-px bg-slate-200 dark:bg-slate-700"></div>
                    <div className="text-center sm:pr-4">
                        <div className="text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">Price</div>
                        <div className="font-black text-xl text-slate-800 dark:text-white">Free</div>
                    </div>
                </div>

                <div>
                    <h4 className="text-lg font-black text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                        <i className="fas fa-info-circle text-blue-500"></i> About this app
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm whitespace-pre-line bg-white/50 dark:bg-slate-800/30 p-5 rounded-2xl border border-slate-100 dark:border-slate-700/50"></p>
                </div>
            </div>

            <div className="px-6 sm:px-10 pb-10 overflow-y-auto hide-scrollbar">
                <div className="flex items-center gap-4 mb-8">
                    <button className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                        <i className="fas fa-arrow-left"></i>
                    </button>
                    <h2 className="text-2xl font-black text-slate-900 dark:text-white">How to Install</h2>
                </div>

                <div className="space-y-6">
                    <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 font-black text-lg">1</div>
                        <div>
                            <h4 className="font-bold text-slate-900 dark:text-white text-lg mb-1">Download the APK</h4>
                            <p className="text-slate-600 dark:text-slate-400 text-sm">Tap the <strong>GET APP</strong> button. The file will automatically download to your phone's File Manager.</p>
                        </div>
                    </div>
                    
                    <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 font-black text-lg">2</div>
                        <div>
                            <h4 className="font-bold text-slate-900 dark:text-white text-lg mb-1">Open the File</h4>
                            <p className="text-slate-600 dark:text-slate-400 text-sm">Pull down your notification bar and tap the downloaded <strong>.apk</strong> file, or find it in your "Downloads" app.</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 font-black text-lg">3</div>
                        <div>
                            <h4 className="font-bold text-slate-900 dark:text-white text-lg mb-1">Allow Unknown Sources</h4>
                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">If a security popup appears, tap <strong>Settings</strong>.</p>
                            <div className="bg-slate-100 dark:bg-slate-800 rounded-xl p-4 flex items-center gap-3 border border-slate-200 dark:border-slate-700">
                                <i className="fas fa-toggle-on text-blue-500 text-xl"></i>
                                <span className="font-medium text-sm text-slate-700 dark:text-slate-300">Turn on "Allow from this source"</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 font-black text-lg">4</div>
                        <div>
                            <h4 className="font-bold text-slate-900 dark:text-white text-lg mb-1">Install & Open</h4>
                            <p className="text-slate-600 dark:text-slate-400 text-sm">Tap the back button, then tap <strong>Install</strong>. Once finished, tap <strong>Open</strong> to launch your new app!</p>
                        </div>
                    </div>
                </div>

                <div className="mt-10 text-center">
                    <button className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-sm px-8 py-3 rounded-full hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors w-full sm:w-auto">
                        Got it, go back
                    </button>
                </div>
            </div>

        </div>
    </div>

    <script dangerouslySetInnerHTML={{ __html: `
        function storeManager() {
            return {
                isDark: document.documentElement.classList.contains('dark'),
                apps: ,
                categories: ,
                selectedCategory: 'All',
                searchQuery: '',
                isModalOpen: false,
                activeApp: null,
                
                // Enhanced Download & Tutorial States
                downloadState: 'idle', // 'idle' | 'downloading' | 'done'
                appSizeText: 'Varies',
                showTutorial: false,

                toggleTheme() {
                    this.isDark = !this.isDark;
                    const htmlElement = document.documentElement;
                    
                    if(this.isDark) {
                        htmlElement.classList.add('dark');
                        localStorage.setItem('store_theme', 'dark');
                        document.getElementById('theme-color-meta').setAttribute('content', '#020617');
                    } else {
                        htmlElement.classList.remove('dark');
                        localStorage.setItem('store_theme', 'light');
                        document.getElementById('theme-color-meta').setAttribute('content', '#f8fafc');
                    }
                },

                filteredApps() {
                    return this.apps.filter(app => {
                        const matchesCategory = this.selectedCategory === 'All' || app.category === this.selectedCategory;
                        const matchesSearch = app.name.toLowerCase().includes(this.searchQuery.toLowerCase()) || 
                                              app.category.toLowerCase().includes(this.searchQuery.toLowerCase());
                        return matchesCategory && matchesSearch;
                    });
                },

                openAppModal(app) {
                    this.activeApp = app;
                    this.isModalOpen = true;
                    
                    // Reset States
                    this.downloadState = 'idle';
                    this.showTutorial = false;
                    
                    // Direct Real File Size Parsing
                    if (app.size && app.size.trim() !== '') {
                        this.appSizeText = app.size + ' MB';
                    } else {
                        this.appSizeText = 'Varies';
                    }
                    
                    document.body.style.overflow = 'hidden';
                },

                closeAppModal() {
                    this.isModalOpen = false;
                    setTimeout(() => { 
                        this.activeApp = null; 
                        this.downloadState = 'idle';
                        this.showTutorial = false;
                    }, 300);
                    document.body.style.overflow = '';
                },

                formatNumber(num) {
                    if (!num) return '0';
                    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
                    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
                    return num.toString();
                },

                startDownload(app) {
                    if (!app || !app.download_link) return;
                    
                    this.downloadState = 'downloading';

                    // DIRECT BROWSER NATIVE DOWNLOAD
                    // This pushes the file directly to the Android File Manager natively.
                    const a = document.createElement('a');
                    a.style.display = 'none';
                    a.href = app.download_link;
                    a.target = '_top'; 
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);

                    // Update UI to show the post-download instruction alert
                    setTimeout(() => {
                        this.downloadState = 'done';
                    }, 1200); 
                }
            }
        }
    ` }} />

    </>
  );
}
