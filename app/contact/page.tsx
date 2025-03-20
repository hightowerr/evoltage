import type { Metadata } from 'next';
import Contact from '../components/Contact';

export const metadata: Metadata = {
  title: 'Contact Us - Evoltage',
  description: 'Get in touch with our expert team. Available 24/7 for emergency services.',
};

export default function ContactPage() {
  return <Contact />;
} 