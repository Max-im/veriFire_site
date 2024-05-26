"use client"

import Link from 'next/link'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (el) {
      setTimeout(() => {
          // @ts-ignore
          el.classList.add('animate-fade-in');
      }, 50)
    }
  }, [ref])

  return (
    <header className="bg-gray-100 h-screen flex w-full flex-col justify-center" ref={ref}>
      <div className="container mx-auto px-6 py-12 flex flex-col items-center justify-center text-center max-w-screen-lg md:max-w-md lg:max-w-screen-xl xl:max-w-screen-2xl"
      >
        <div className="w-full">
          <h1 className="text-6xl font-bold text-gray-900 md:text-9xl md:px-16 md:py-24">
            Email VeriFire
          </h1>
          <h2 className="text-3xl font-bold text-gray-900 md:text-5xl md:px-16 md:py-12">
            Validate email addresses in seconds.
          </h2>
          <Link href="/prices" className="mt-8 md:mt-0 inline-block">
            <span
              className="px-6 py-3 rounded-md shadow-lg text-gray-900 bg-gray-200 hover:bg-gray-300 focus:outline-none md:px-16 md:py-4"
            >
              Get Started
            </span>
          </Link>
        </div>
      </div>
    </header>
    
  )
}

