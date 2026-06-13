'use client';

import { useActionState } from 'react';
import { submitContactForm } from '../actions/formActions';
import { SubmitButton } from './SubmitButton';

export function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, null);

  return (
    <>
      {state?.success && (
        <div className="p-5 mb-8 text-sm font-bold rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center">
          <i className="fas fa-check-circle mr-3 text-lg"></i>
          {state.message}
        </div>
      )}
      
      {state?.error && (
        <div className="p-5 mb-8 text-sm font-bold rounded-xl bg-red-50 text-red-600 border border-red-100 flex items-center">
          <i className="fas fa-exclamation-circle mr-3 text-lg"></i>
          {state.error}
        </div>
      )}

      <form action={formAction} className="space-y-10">
          <input type="hidden" name="csrf_token" defaultValue="" />
          <input type="text" name="website_url_hp" defaultValue="" className="hp-field-secure" tabIndex={-1} autoComplete="off" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                  <label className="block text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">First Name</label>
                  <input type="text" name="first_name" className="modern-input" placeholder="John" required />
              </div>
              <div>
                  <label className="block text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Last Name</label>
                  <input type="text" name="last_name" className="modern-input" placeholder="Doe" required />
              </div>
          </div>
          
          <div>
              <label className="block text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Corporate / Work Email</label>
              <input type="email" name="email" className="modern-input" placeholder="john@company.com" required />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                  <label className="block text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Monthly Advertising Budget</label>
                  <div className="relative">
                      <select name="budget" className="modern-input">
                          <option>₹0 – ₹50,000</option>
                          <option>₹50,000 – ₹5 Lakhs</option>
                          <option>₹5 Lakhs – ₹20 Lakhs</option>
                          <option>₹20 Lakhs+</option>
                      </select>
                  </div>
              </div>

              <div>
                  <label className="block text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Primary App Marketing Goal</label>
                  <div className="relative">
                      <select name="goal" className="modern-input">
                          <option>Increase User Acquisition Installs</option>
                          <option>Improve Ad Campaign ROI & ROAS</option>
                          <option>Boost Initial Organic Store Traction</option>
                          <option>Dominate App Engagement & ASO Ratings</option>
                          <option>Scale Media Buying Campaigns</option>
                          <option>Become a Performance Growth Partner</option>
                      </select>
                  </div>
              </div>
          </div>
          
          <div>
              <label className="block text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Current Marketing Challenge (Optional)</label>
              <input type="text" name="message" className="modern-input" placeholder="e.g. Meta CPI is too high, scaling issues, poor ASO ranking..." />
          </div>

          <div className="cf-turnstile" suppressHydrationWarning={true} data-sitekey="0x4AAAAAADbWjNaRvxcMELnC" data-theme="light"></div>

          <SubmitButton className="bg-secondary hover:bg-black text-white font-bold text-lg px-12 py-5 rounded-full shadow-xl hover:shadow-2xl transition-all w-full md:w-auto">
              Submit Audit Request <i className="fas fa-arrow-right ml-2"></i>
          </SubmitButton>
      </form>
    </>
  );
}
