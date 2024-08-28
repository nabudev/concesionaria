'use client'

import React from 'react'
import Image from 'next/image'
import ShinyButton from './magicui/shiny-button'

const vehicles = [
  {
    id: 1,
    name: 'Sedan Ejecutivo 2023',
    description: 'Elegante y eficiente, perfecto para la ciudad y viajes largos.',
    price: '$25,000',
    features: ['30 mpg ciudad', 'Asientos de cuero', 'Sistema de navegación'],
    image: '/placeholder.svg?height=300&width=400'
  },
  {
    id: 2,
    name: 'SUV Familiar XL',
    description: 'Espacioso y seguro, ideal para familias aventureras.',
    price: '$35,000',
    features: ['7 asientos', 'Tracción en las 4 ruedas', 'Sistema de entretenimiento trasero'],
    image: '/placeholder.svg?height=300&width=400'
  },
  {
    id: 3,
    name: 'Deportivo Veloz GT',
    description: 'Potencia y estilo en un paquete aerodinámico.',
    price: '$50,000',
    features: ['0-60 mph en 3.5s', 'Modo de conducción deportiva', 'Interior de fibra de carbono'],
    image: '/placeholder.svg?height=300&width=400'
  }
]

export function VehicleShowcase() {
  return (
    <section className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Nuestros Vehículos Disponibles
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {vehicles.map((vehicle) => (
            <div key={vehicle.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{vehicle.name}</h3>
                <p className="text-gray-600 mb-4">{vehicle.description}</p>
                <p className="text-2xl font-bold text-gray-900 mb-4">{vehicle.price}</p>
                <ul className="space-y-2">
                  {vehicle.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <ShinyButton className="mt-6 w-full text-white py-2 px-4 rounded-md hover:bg-white-700 transition duration-300 ease-in-out">
                  Ver Detalles
                </ShinyButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}