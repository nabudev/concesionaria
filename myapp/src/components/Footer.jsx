'use client'

import React from 'react'
import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()
  const concesionariaNombre = "ROM concesionaria automotriz"

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">{concesionariaNombre}</h2>
            <p className="text-gray-300">
              Tu destino para encontrar el vehículo perfecto. Calidad y servicio excepcional desde 1990.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition duration-300">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/vehiculos" className="text-gray-300 hover:text-white transition duration-300">
                  Nuestros Vehículos
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-gray-300 hover:text-white transition duration-300">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-300 hover:text-white transition duration-300">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contáctanos</h3>
            <p className="text-gray-300 mb-2">Calle Principal 123</p>
            <p className="text-gray-300 mb-2">Ciudad, CP 12345</p>
            <p className="text-gray-300 mb-2">Teléfono: (123) 456-7890</p>
            <p className="text-gray-300">Email: info@automotrizelegance.com</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-300">
            © {currentYear} {concesionariaNombre}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}