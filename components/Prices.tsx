import { getPrices } from '@/utils'
import React from 'react'

export default async function Prices() {
    const prices = await getPrices();

  return (
    <section id="prices" className="mt-24 mx-auto max-w-screen-xl px-4 py-12 flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold mb-8 text-center">Prices</h2>
      <ul className="flex flex-wrap justify-center">
        {prices && prices.map(priceItem => (
          <li
            key={priceItem.title}
            className="flex flex-col items-center justify-center w-full md:w-1/3 p-4 md:p-8"
          >
            <h3 className="text-3xl font-bold mb-6">{priceItem.title}</h3>
            <p className="text-lg text-center mx-auto px-4 md:px-8 py-2 md:py-4">{priceItem.description}</p>
            <p className="text-5xl font-bold mx-auto px-4 md:px-8 py-2 md:py-4">
              {priceItem.salesPrice ? (
                <span className="line-through">{priceItem.price}</span>
              ) : (
                priceItem.price
              )}
            </p>
            <p className="text-3xl font-bold mx-auto px-4 md:px-8 py-2 md:py-4">
              {priceItem.salesPrice ? (
                <span className="text-green-600">{priceItem.salesPrice}</span>
              ) : (
                `(${priceItem.credits} credits)`
              )}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}

