import React from 'react';
import { GeneralContactForm, SupportTicketForm } from '../../components/SupportForms';

export default function Contact() {
  return (
    <>
      

    <a href="https://wa.me/919093815689?text=I'm%20interested%20in%20speaking%20with%20Novaira%20Global" target="_blank" className="fixed bottom-6 right-6 z-[100] bg-[#25D366] text-white px-5 py-3 rounded-full shadow-2xl flex items-center gap-2 hover:bg-[#1ebd5a] transition-transform transform hover:-translate-y-1 font-bold">
        <i className="fab fa-whatsapp text-2xl"></i>
        <span className="hidden md:inline">Quick Support</span>
    </a>

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
                    <a href="/corporate" className="text-gray-600 hover:text-primary font-semibold transition-colors">Corporate</a>
                    <a href="/contact" className="text-primary font-bold transition-colors">Contact</a>
                </nav>

                <div className="hidden md:flex items-center space-x-5">
                    <a href="https://accounts.novairasolution.com" className="text-gray-500 hover:text-secondary font-semibold transition-colors">Login/Register</a>
                    <a href="#support-desk" className="bg-primary hover:bg-indigo-700 text-white px-7 py-2.5 rounded-full font-bold transition-all shadow-lg transform hover:-translate-y-0.5 text-sm uppercase tracking-wide">Get Support</a>
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
        <div id="sidebar-overlay" className="absolute inset-0 bg-secondary/80 backdrop-blur-sm opacity-0 sidebar-overlay"></div>
        
        <div id="sidebar-content" className="absolute inset-y-0 right-0 max-w-[300px] w-full bg-white shadow-2xl transform translate-x-full sidebar-menu flex flex-col">
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
                <span className="font-bold text-2xl text-secondary">Novaira Global</span>
                <button className="text-gray-400 hover:text-secondary p-2" aria-label="Close Menu"><i className="fas fa-times text-xl"></i></button>
            </div>
            
            <div className="flex flex-col px-6 py-8 space-y-4 flex-grow">
                <a href="/" className="text-lg font-bold text-gray-700 hover:text-primary">Home</a>
                <a href="/about" className="text-lg font-bold text-gray-700 hover:text-primary">About</a>
                <a href="/services" className="text-lg font-bold text-gray-700 hover:text-primary">Services</a>
                <a href="/corporate" className="text-lg font-bold text-gray-700 hover:text-primary">Corporate</a>
                <a href="/contact" className="text-lg font-bold text-primary">Contact</a>
            </div>

            <div className="p-6 border-t border-gray-100 bg-gray-50 space-y-4">
                <a href="https://accounts.novairasolution.com" className="w-full block text-center border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-bold">Login/Register</a>
                <a href="#support-desk" className="w-full block text-center bg-primary text-white py-3 rounded-lg font-bold">Get Support</a>
            </div>
        </div>
    </div>

    <section className="pt-36 pb-20 lg:pt-48 lg:pb-24 relative bg-secondary text-white border-b border-gray-800 overflow-hidden w-full">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
        <div className="absolute top-0 left-0 -ml-20 -mt-20 w-96 h-96 rounded-full bg-primary mix-blend-screen filter blur-[100px] opacity-40 animate-pulse pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center reveal">
            <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 text-indigo-200 font-bold text-xs sm:text-sm mb-6 border border-white/20 uppercase tracking-widest shadow-sm">
                We're Here to Help
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                Contact & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Support Center.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed font-medium max-w-2xl mx-auto">
                Whether you need enterprise growth consultation, have a general inquiry, or require technical support for an ongoing campaign, our global team is ready to assist.
            </p>
        </div>
    </section>

    <section id="support-desk" className="py-20 bg-gray-50 border-b border-gray-200 w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                
                <div className="bg-white p-10 md:p-12 rounded-3xl shadow-xl border border-gray-100 reveal relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-bl-full pointer-events-none"></div>
                    <div className="relative z-10">
                        <div className="w-14 h-14 bg-indigo-100 text-primary rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-sm">
                            <i className="fas fa-envelope-open-text"></i>
                        </div>
                        <h2 className="text-3xl font-extrabold text-secondary mb-3">General Inquiry</h2>
                        <p className="text-gray-500 font-medium text-lg mb-8">Reach out to our business team for partnerships, media buying inquiries, or growth consulting.</p>

                        
                            <div className="p-4 mb-6 text-sm font-bold rounded-xl ">
                                
                            </div>
                        

                        <GeneralContactForm />
                    </div>
                </div>

                <div className="space-y-8 reveal" style={{transitionDelay: '150ms'}}>
                    
                    <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center text-xl shadow-sm">
                                <i className="fas fa-ticket-alt"></i>
                            </div>
                            <h2 className="text-2xl font-extrabold text-secondary">Open a Support Ticket</h2>
                        </div>

                        <SupportTicketForm />
                    </div>

                    <div className="bg-secondary p-10 rounded-3xl shadow-xl text-white relative overflow-hidden">
                        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary rounded-full filter blur-[50px] opacity-50 pointer-events-none"></div>
                        <div className="relative z-10">
                            <h2 className="text-2xl font-extrabold mb-2">Check Ticket Status</h2>
                            <p className="text-gray-400 font-medium text-sm mb-6">Enter your 12-digit automated ticket ID to chat with support.</p>

                            <form id="check-status-form" className="flex flex-col sm:flex-row gap-3">
                                <input type="text" id="status-ticket-id" className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="e.g. 102938475612" required pattern="[0-9]{12}" maxLength={12} />
                                <button type="submit" className="w-full sm:w-auto bg-white text-secondary hover:bg-gray-200 font-bold px-6 py-3 rounded-xl transition-all shadow-sm whitespace-nowrap">
                                    Open Chat
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>

    <section className="py-24 bg-white border-b border-gray-200 w-full overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 reveal">
                <span className="text-primary font-bold uppercase tracking-widest mb-2 block text-sm">Help Panel</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mb-4">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-4 reveal">
                <div className="border border-gray-200 rounded-2xl bg-gray-50 overflow-hidden">
                    <button className="w-full px-6 py-5 text-left font-bold text-lg text-secondary flex justify-between items-center focus:outline-none">
                        <span className="pr-4">How long does it take for support to respond?</span>
                        <i id="icon-faq1" className="fas fa-chevron-down text-gray-400 accordion-icon flex-shrink-0"></i>
                    </button>
                    <div id="faq1" className="accordion-content px-6 bg-white border-t border-gray-100">
                        <p className="text-gray-600 py-5 font-medium leading-relaxed">Our enterprise SLA guarantees a response to support tickets within 4-6 hours during business days. Critical priority corporate issues are routed to a 24/7 dedicated line.</p>
                    </div>
                </div>
                
                <div className="border border-gray-200 rounded-2xl bg-gray-50 overflow-hidden">
                    <button className="w-full px-6 py-5 text-left font-bold text-lg text-secondary flex justify-between items-center focus:outline-none">
                        <span className="pr-4">Where can I find my 12-digit automated Ticket ID?</span>
                        <i id="icon-faq2" className="fas fa-chevron-down text-gray-400 accordion-icon flex-shrink-0"></i>
                    </button>
                    <div id="faq2" className="accordion-content px-6 bg-white border-t border-gray-100">
                        <p className="text-gray-600 py-5 font-medium leading-relaxed">The 12-digit Ticket ID is instantly generated and displayed on your screen right after you submit a support request. An automated email is also sent to the address provided containing the ID.</p>
                    </div>
                </div>

                <div className="border border-gray-200 rounded-2xl bg-gray-50 overflow-hidden">
                    <button className="w-full px-6 py-5 text-left font-bold text-lg text-secondary flex justify-between items-center focus:outline-none">
                        <span className="pr-4">Does Novaira Global offer customized app growth plans?</span>
                        <i id="icon-faq3" className="fas fa-chevron-down text-gray-400 accordion-icon flex-shrink-0"></i>
                    </button>
                    <div id="faq3" className="accordion-content px-6 bg-white border-t border-gray-100">
                        <p className="text-gray-600 py-5 font-medium leading-relaxed">Yes, absolutely. We do not use cookie-cutter templates. Every performance marketing campaign and ASO strategy is meticulously modeled around your specific target audience, CPA limits, and lifetime value projections.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="py-24 bg-accent reveal w-full overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-indigo-600 rounded-[2.5rem] p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
                <div className="relative z-10">
                    <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center text-4xl mx-auto mb-6 backdrop-blur-sm border border-white/20">
                        <i className="fas fa-users"></i>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">Join the Novaira Global Community</h2>
                    <p className="text-lg md:text-xl text-indigo-100 mb-10 font-medium max-w-2xl mx-auto">
                        Connect with 5,000+ app founders, marketers, and developers. Share insights, learn advanced ASO tactics, and stay updated on the latest performance scaling algorithms.
                    </p>
                    <a href="https://community.novairasolution.com" target="_blank" className="inline-flex items-center justify-center bg-white text-primary hover:bg-gray-50 px-8 py-4 rounded-full font-extrabold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 gap-3">
                        Visit Community Forum <i className="fas fa-external-link-alt text-sm"></i>
                    </a>
                </div>
            </div>

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

    <footer className="bg-gray-50 pt-20 pb-10 border-t border-gray-200 w-full overflow-hidden">
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
                    <div className="flex justify-center sm:justify-start space-x-4">
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
                        <li><a href="/contact" className="text-primary font-semibold transition-colors">Contact</a></li>
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

    <div id="chat-modal" className="fixed inset-0 z-[200] hidden flex items-center justify-center bg-black/60 backdrop-blur-sm opacity-0">
        <div id="chat-modal-content" className="w-full h-full md:w-11/12 md:max-w-5xl md:h-[85vh] bg-white md:rounded-3xl flex flex-col shadow-2xl transform scale-95 translate-y-10">
            
            <div className="bg-secondary text-white px-6 py-4 flex justify-between items-center md:rounded-t-3xl shadow-sm z-10">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-xl backdrop-blur-sm border border-white/20">
                        <i className="fas fa-headset"></i>
                    </div>
                    <div>
                        <h3 id="chat-modal-title" className="font-extrabold text-lg tracking-tight">Support Ticket</h3>
                        <div className="flex items-center gap-2 text-xs font-medium text-gray-300">
                            <span id="chat-modal-status" className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                            <span id="chat-modal-status-text">Active</span>
                            <span>•</span>
                            <span id="chat-modal-id">ID: </span>
                        </div>
                    </div>
                </div>
                <button className="text-gray-400 hover:text-white transition-colors p-2 focus:outline-none">
                    <i className="fas fa-times text-2xl"></i>
                </button>
            </div>

            <div className="flex-grow overflow-y-auto p-4 sm:p-8 chat-bg flex flex-col space-y-4" id="chat-box">
                </div>

            <div className="bg-gray-100 p-4 border-t border-gray-200 md:rounded-b-3xl">
                <form id="chat-form" className="flex items-end gap-3 max-w-4xl mx-auto">
                    <input type="hidden" id="chat-current-ticket-id" />
                    <textarea id="chat-input" rows={1} className="flex-grow resize-none rounded-2xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-primary shadow-sm border border-gray-300" placeholder="Type your message here..."></textarea>
                    <button type="submit" className="w-12 h-12 rounded-full bg-primary hover:bg-indigo-700 text-white flex items-center justify-center flex-shrink-0 shadow-md transition-transform transform hover:-translate-y-0.5 focus:outline-none">
                        <i className="fas fa-paper-plane"></i>
                    </button>
                </form>
            </div>
        </div>
    </div>

    <script dangerouslySetInnerHTML={{ __html: `
        // Store CSRF safely
        const csrfToken = "";
        let chatInterval = null;

        // Auto-resize chat textarea
        const chatInput = document.getElementById('chat-input');
        chatInput.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = (this.scrollHeight < 120 ? this.scrollHeight : 120) + 'px';
        });

        // Handle Status Check Form (Open Modal)
        document.getElementById('check-status-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const ticketId = document.getElementById('status-ticket-id').value;
            openChatModal(ticketId);
        });

        // Open Modal Logic
        function openChatModal(ticketId) {
            fetch('/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: \`ajax_action=fetch_ticket&csrf_token=\${csrfToken}&ticket_id=\${ticketId}\`
            })
            .then(res => res.json())
            .then(data => {
                if(data.success) {
                    // Populate Header
                    document.getElementById('chat-modal-title').textContent = data.ticket.subject;
                    document.getElementById('chat-modal-id').textContent = 'ID: ' + data.ticket.id;
                    document.getElementById('chat-modal-status-text').textContent = data.ticket.status;
                    document.getElementById('chat-current-ticket-id').value = data.ticket.id;
                    
                    if(data.ticket.status.toLowerCase() === 'closed') {
                        document.getElementById('chat-modal-status').classList.replace('bg-green-400', 'bg-red-400');
                        document.getElementById('chat-modal-status').classList.remove('animate-pulse');
                    }

                    // Populate Chat
                    renderMessages(data.messages);

                    // Show Modal with Animation
                    const modal = document.getElementById('chat-modal');
                    const content = document.getElementById('chat-modal-content');
                    modal.classList.remove('hidden');
                    
                    // Small delay for CSS transition to catch
                    setTimeout(() => {
                        modal.classList.remove('opacity-0');
                        content.classList.remove('scale-95', 'translate-y-10');
                    }, 10);
                    
                    document.body.style.overflow = 'hidden'; // Prevent background scrolling

                    // Start auto-refresh
                    if(chatInterval) clearInterval(chatInterval);
                    chatInterval = setInterval(() => fetchMessages(ticketId), 5000);
                } else {
                    alert(data.message || "Failed to load ticket.");
                }
            })
            .catch(err => alert("System error checking ticket."));
        }

        // Close Modal Logic
        function closeChatModal() {
            const modal = document.getElementById('chat-modal');
            const content = document.getElementById('chat-modal-content');
            
            modal.classList.add('opacity-0');
            content.classList.add('scale-95', 'translate-y-10');
            
            setTimeout(() => {
                modal.classList.add('hidden');
            }, 300);

            document.body.style.overflow = '';
            if(chatInterval) clearInterval(chatInterval);
        }

        // Handle Send Message
        document.getElementById('chat-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const msg = chatInput.value.trim();
            const ticketId = document.getElementById('chat-current-ticket-id').value;
            
            if(!msg) return;

            // Optimistic UI Append
            appendMessage({ sender_type: 'user', message: msg, created_at: 'Sending...' });
            chatInput.value = '';
            chatInput.style.height = 'auto';

            fetch('/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: \`ajax_action=send_message&csrf_token=\${csrfToken}&ticket_id=\${ticketId}&message=\${encodeURIComponent(msg)}\`
            })
            .then(res => res.json())
            .then(data => {
                if(data.success) {
                    fetchMessages(ticketId); // refresh clean
                } else {
                    alert(data.message || "Failed to send.");
                }
            });
        });

        // Background Fetch Messages
        function fetchMessages(ticketId) {
            fetch('/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: \`ajax_action=fetch_ticket&csrf_token=\${csrfToken}&ticket_id=\${ticketId}\`
            })
            .then(res => res.json())
            .then(data => {
                if(data.success) {
                    renderMessages(data.messages);
                }
            });
        }

        // Render Chat HTML
        function renderMessages(messages) {
            const box = document.getElementById('chat-box');
            let isScrolledToBottom = box.scrollHeight - box.clientHeight <= box.scrollTop + 50;
            
            box.innerHTML = ''; // clear

            // Standard welcome msg
            const welcomeHtml = \`
                <div className="flex justify-center mb-4">
                    <div className="bg-yellow-100 text-yellow-800 text-xs font-bold px-4 py-2 rounded-xl shadow-sm">
                        <i className="fas fa-lock mr-1"></i> End-to-end encrypted support line
                    </div>
                </div>\`;
            box.insertAdjacentHTML('beforeend', welcomeHtml);

            messages.forEach(m => appendMessage(m, false));

            if(isScrolledToBottom) {
                box.scrollTop = box.scrollHeight;
            }
        }

        function appendMessage(m, autoScroll = true) {
            const box = document.getElementById('chat-box');
            const isUser = m.sender_type === 'user';
            
            // Format time safely
            let timeStr = m.created_at;
            try {
                if(timeStr !== 'Sending...') {
                    const d = new Date(timeStr);
                    timeStr = d.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
                }
            } catch(e) {}

            // Prevent XSS
            const safeMsg = document.createElement('div');
            safeMsg.textContent = m.message;
            const textHTML = safeMsg.innerHTML.replace(/\n/g, '<br />');

            let html = '';
            if(isUser) {
                html = \`
                <div className="flex justify-end w-full">
                    <div className="max-w-[85%] md:max-w-[70%] msg-bubble-user p-3 sm:p-4 shadow-sm relative">
                        <p className="text-sm sm:text-base text-gray-800 break-words">\${textHTML}</p>
                        <div className="text-[10px] text-gray-500 text-right mt-1">\${timeStr} <i className="fas fa-check-double text-blue-500 ml-1"></i></div>
                    </div>
                </div>\`;
            } else {
                // Support Agent Bubble
                html = \`
                <div className="flex justify-start w-full">
                    <div className="max-w-[85%] md:max-w-[70%] msg-bubble-support p-3 sm:p-4 shadow-sm relative border border-gray-100">
                        <p className="text-sm sm:text-base text-gray-800 break-words">\${textHTML}</p>
                        <div className="text-[10px] text-gray-400 text-right mt-1">\${timeStr}</div>
                    </div>
                </div>\`;
            }

            box.insertAdjacentHTML('beforeend', html);
            if(autoScroll) {
                box.scrollTop = box.scrollHeight;
            }
        }

        // Toggle FAQ
        function toggleFAQ(id) {
            const content = document.getElementById(id);
            const icon = document.getElementById('icon-' + id);
            document.querySelectorAll('.accordion-content').forEach(el => { if(el.id !== id) el.classList.remove('open'); });
            document.querySelectorAll('.accordion-icon').forEach(el => { if(el.id !== 'icon-' + id) el.classList.remove('open'); });
            content.classList.toggle('open');
            icon.classList.toggle('open');
        }

        // Sidebar
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
            setTimeout(() => { mobileSidebar.classList.add('hidden'); }, 300); 
            document.body.style.overflow = '';
        }

        mobileMenuBtn.addEventListener('click', openSidebar);
        mobileSidebar.addEventListener('click', (e) => {
            if (e.target === mobileSidebar || e.target === sidebarOverlay) closeSidebar();
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
            }, { root: null, threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
            reveals.forEach(reveal => revealOnScroll.observe(reveal));
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
