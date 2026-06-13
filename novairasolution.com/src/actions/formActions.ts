'use server';

import { supabase } from '../lib/supabase';
import { revalidatePath } from 'next/cache';

// Reusable action to insert into any simple table
export async function submitContactForm(prevState: any, formData: FormData) {
  // Honeypot check
  if (formData.get('website_url_hp')) {
    return { success: true, message: "Message sent successfully!" }; // Bot caught
  }

  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const subject = formData.get('subject') as string;
  const message = formData.get('message') as string;

  if (!name || !email || !message) {
    return { error: "Please fill in all required fields." };
  }

  const { error } = await supabase.from('contacts').insert([{
    name,
    email,
    subject: subject || 'General Contact',
    message
  }]);

  if (error) {
    console.error('Supabase Insert Error:', error);
    return { error: "An error occurred while submitting. Please try again." };
  }

  revalidatePath('/');
  return { success: true, message: "Thank you! Your message has been received." };
}

export async function submitSupportTicket(prevState: any, formData: FormData) {
  // Honeypot check
  if (formData.get('website_url_hp')) {
    return { success: true, message: "Ticket created successfully!" }; // Bot caught
  }

  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const subject = formData.get('subject') as string;
  const message = formData.get('message') as string;

  if (!name || !email || !subject || !message) {
    return { error: "Please fill in all fields." };
  }

  // Generate a random 12 digit ticket ID
  const ticket_id = Math.floor(100000000000 + Math.random() * 900000000000).toString();

  const { error } = await supabase.from('support_tickets').insert([{
    email,
    subject,
    message,
    status: 'open',
    ticket_id,
    created_at: new Date().toISOString()
  }]);

  if (error) {
    console.error('Supabase Insert Error:', error);
    return { error: "Failed to submit ticket. Please try again." };
  }

  revalidatePath('/contact');
  return { success: true, message: "Your support ticket has been opened." };
}

export async function submitWhatsAppTicket(prevState: any, formData: FormData) {
  if (formData.get('website_url_hp')) {
    return { success: true, message: "Priority ticket submitted!" };
  }

  const email = formData.get('email') as string;
  const whatsapp = formData.get('whatsapp_number') as string;
  const message = formData.get('message') as string;

  if (!email || !whatsapp || !message) {
    return { error: "Please fill in all fields." };
  }

  // Generate a random 12 digit ticket ID
  const ticket_id = Math.floor(100000000000 + Math.random() * 900000000000).toString();

  const { error } = await supabase.from('support_tickets').insert([{
    email,
    message: 'WhatsApp Number: ' + whatsapp + '\n\n' + message,
    status: 'priority',
    subject: 'WhatsApp Priority',
    ticket_id,
    created_at: new Date().toISOString()
  }]);

  if (error) {
    console.error('Supabase Insert Error:', error);
    return { error: "Failed to submit priority ticket." };
  }

  revalidatePath('/contact');
  return { success: true, message: "Priority ticket opened! We will contact you on WhatsApp." };
}
