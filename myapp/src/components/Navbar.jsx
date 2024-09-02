"use client";
import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <button className="text-gray-800 font-bold text-xl">AutoElite Motors</button>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">Inicio</button>
              <button className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">Vehículos</button>
              <button className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">Contactanos</button>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Abrir menú principal</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button className="text-gray-600 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium">Inicio</button>
            <button className="text-gray-600 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium">Vehículos</button>
            <button className="text-gray-600 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium">Contactanos</button>
          </div>
        </div>
      )}
    </nav>
  )
}