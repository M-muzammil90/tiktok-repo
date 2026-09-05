"use client";

import Link from "next/link";
// Removed Github, Linkedin, and Instagram from here
import { Globe2, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">

        {/* Main Footer */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight"
            >
              Muzammil<span className="text-blue-500">.</span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-6 text-gray-400">
              I build modern, responsive and high-performance web
              applications using modern technologies.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-3">
              {/* GitHub SVG */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-gray-800 p-2.5 text-gray-400 transition hover:border-blue-500 hover:text-blue-500"
              >
                <svg className="h-[18px] w-[18px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>

              {/* LinkedIn SVG */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-gray-800 p-2.5 text-gray-400 transition hover:border-blue-500 hover:text-blue-500"
              >
                <svg className="h-[18px] w-[18px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>

              {/* Instagram SVG */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-gray-800 p-2.5 text-gray-400 transition hover:border-blue-500 hover:text-blue-500"
              >
                <svg className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>  

              {/* Lucide Globe Icon (Still works since it is a regular UI icon) */}
              <a
                href="https://yourwebsite.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-gray-800 p-2.5 text-gray-400 transition hover:border-blue-500 hover:text-blue-500"
              >
                <Globe2 size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <Link href="/" className="text-sm text-gray-400 transition hover:text-white">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-gray-400 transition hover:text-white">About</Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-gray-400 transition hover:text-white">Services</Link>
              </li>
              <li>
                <Link href="/projects" className="text-sm text-gray-400 transition hover:text-white">Projects</Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-400 transition hover:text-white">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Services
            </h3>

            <ul className="mt-5 space-y-3">
              <li className="text-sm text-gray-400">Web Development</li>
              <li className="text-sm text-gray-400">React Development</li>
              <li className="text-sm text-gray-400">Next.js Development</li>
              <li className="text-sm text-gray-400">Backend Development</li>
              <li className="text-sm text-gray-400">API Development</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Contact
            </h3>

            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 shrink-0 text-blue-500" />
                <a href="mailto:your@email.com" className="text-sm text-gray-400 hover:text-white transition">
                  your@email.com
                </a>
              </li>

              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 shrink-0 text-blue-500" />
                <a href="tel:+923000000000" className="text-sm text-gray-400 hover:text-white transition">
                  +92 XXX XXXXXXX
                </a>
              </li>

              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-blue-500" />
                <span className="text-sm text-gray-400">
                  Karachi, Pakistan
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 border-t border-gray-800 pt-7">
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Muzammil. All rights reserved.
            </p>

            <div className="flex gap-6">
              <Link href="/privacy" className="text-sm text-gray-500 transition hover:text-white">Privacy Policy</Link>
              <Link href="/terms" className="text-sm text-gray-500 transition hover:text-white">Terms & Conditions</Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
