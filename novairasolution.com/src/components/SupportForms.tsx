'use client';

import { useActionState } from 'react';
import { submitSupportTicket } from '../actions/formActions';
import { SubmitButton } from './SubmitButton';

export function GeneralContactForm() {
  const [state, formAction] = useActionState(submitSupportTicket, null);

  return (
    <form action={formAction} className="space-y-8">
        {state?.success && (
            <div className="p-4 mb-6 text-sm font-bold rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center">
                <i className="fas fa-check-circle mr-3 text-lg"></i>
                {state.message}
            </div>
        )}
        {state?.error && (
            <div className="p-4 mb-6 text-sm font-bold rounded-xl bg-red-50 text-red-600 border border-red-100 flex items-center">
                <i className="fas fa-exclamation-circle mr-3 text-lg"></i>
                {state.error}
            </div>
        )}
        <input type="hidden" name="csrf_token" defaultValue="" />
        <input type="text" name="website_url_hp" defaultValue="" className="hp-field-secure" tabIndex={-1} autoComplete="off" />
        
        <input type="hidden" name="subject" value="General Inquiry" />

        <div>
            <label className="block text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Full Name</label>
            <input type="text" name="name" className="modern-input" placeholder="John Doe" required />
        </div>
        <div>
            <label className="block text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Email Address</label>
            <input type="email" name="email" className="modern-input" placeholder="john@company.com" required />
        </div>
        <div>
            <label className="block text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Message</label>
            <textarea name="message" rows={3} className="modern-input resize-none" id="chat-input" placeholder="How can we help you accelerate your growth?" required></textarea>
        </div>
        
        <div className="cf-turnstile" suppressHydrationWarning={true} data-sitekey="0x4AAAAAADbWjNaRvxcMELnC" data-theme="light"></div>

        <SubmitButton className="w-full bg-secondary hover:bg-black text-white font-bold text-lg px-8 py-4 rounded-xl transition-all shadow-md transform hover:-translate-y-1">
            Send Message <i className="fas fa-paper-plane ml-2"></i>
        </SubmitButton>
    </form>
  );
}

export function SupportTicketForm() {
  const [state, formAction] = useActionState(submitSupportTicket, null);

  return (
    <form action={formAction} className="space-y-6">
        {state?.success && (
            <div className="p-4 mb-6 text-sm font-bold rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center">
                <i className="fas fa-check-circle mr-3 text-lg"></i>
                {state.message}
            </div>
        )}
        {state?.error && (
            <div className="p-4 mb-6 text-sm font-bold rounded-xl bg-red-50 text-red-600 border border-red-100 flex items-center">
                <i className="fas fa-exclamation-circle mr-3 text-lg"></i>
                {state.error}
            </div>
        )}
        <input type="hidden" name="csrf_token" defaultValue="" />
        <input type="text" name="website_url_hp" defaultValue="" className="hp-field-secure" tabIndex={-1} autoComplete="off" />
        
        <input type="hidden" name="name" value="Support User" />

        <div>
            <input type="email" name="email" className="modern-input !py-3" placeholder="Account Email Address" required />
        </div>
        <div>
            <input type="text" name="subject" className="modern-input !py-3" placeholder="Ticket Subject / Issue" required />
        </div>
        <div>
            <textarea name="message" rows={2} className="modern-input resize-none !py-3" placeholder="Describe your issue in detail..." required></textarea>
        </div>
        
        <SubmitButton className="bg-primary hover:bg-indigo-700 text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-sm w-full" loadingText="Generating...">
            Generate Ticket ID
        </SubmitButton>
    </form>
  );
}
