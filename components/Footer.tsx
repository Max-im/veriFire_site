"use client";

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center bg-gray-900 py-12 text-white">
      <div className="container mx-auto flex flex-col items-center justify-center text-center">
        <hr className="my-6 border-t-2 border-gray-400 w-96" />
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-2xl font-bold mb-4">
            VeryFire Addon
          </h3>
          <p className="mx-4">
            VeryFire is a Google Sheets addon that validates email addresses and returns the results. Install this addon in your Google Spreadsheet to quickly validate email addresses and keep your list clean.
          </p>
        </div>
        <hr className="my-6 border-t-2 border-gray-400 w-96" />
        <div className="flex flex-col items-center justify-center">
          <p className="mb-4">
            <Link href="/terms-and-conditions" className="link text-gray-400">Terms and Conditions</Link>
          </p>
          <p className="mb-4">
            <Link href="/privacy-policy" className="link text-gray-400">Privacy Policy</Link>
          </p>
          <p className="mb-4">
            <Link href="/responses" className="link text-gray-400">Responses</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
