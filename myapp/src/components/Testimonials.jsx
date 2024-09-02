'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: "María García",
    role: "Empresaria",
    image: "/img/cliente.png?height=100&width=100",
    quote: "Comprar mi nuevo coche en AutoMotriz Elegance fue una experiencia increíble. El servicio al cliente es excepcional y encontré exactamente lo que buscaba."
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    role: "Ingeniero",
    image: "/img/cliente.png?height=100&width=100",
    quote: "La atención personalizada y el conocimiento del personal me ayudaron a tomar la mejor decisión. Estoy encantado con mi nuevo vehículo."
  },
  {
    id: 3,
    name: "Ana Martínez",
    role: "Médica",
    image: "/img/cliente.png?height=100&width=100",
    quote: "AutoMotriz Elegance ofrece una selección impresionante de coches y un proceso de compra sin complicaciones. Altamente recomendado."
  },
  {
    id: 4,
    name: "Juan Pérez",
    role: "Profesor",
    image: "/img/cliente.png?height=100&width=100",
    quote: "Excelente servicio post-venta. Siempre están dispuestos a ayudar y resolver cualquier duda. Me siento muy satisfecho con mi compra."
  },
  {
    id: 5,
    name: "Laura Sánchez",
    role: "Diseñadora",
    image: "/img/cliente.png?height=100&width=100",
    quote: "La variedad de opciones de financiamiento que ofrecen hizo posible que pudiera adquirir el coche de mis sueños. ¡Gracias AutoMotriz Elegance!"
  }
]

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 >= testimonials.length ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 3 : prevIndex - 1
    )
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Testimonios de nuestros clientes
        </h2>
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
                  <div className="bg-white shadow-lg rounded-lg p-6 h-full">
                    <div className="flex items-center mb-4">
                      <div className="mr-4">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={60}
                          height={60}
                          className="rounded-full"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                        <p className="text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                    <blockquote className="text-gray-800 italic">"{testimonial.quote}"</blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 ml-4 hover:bg-opacity-75 transition-all duration-300"
            aria-label="Testimonio anterior"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 mr-4 hover:bg-opacity-75 transition-all duration-300"
            aria-label="Siguiente testimonio"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        </div>
      </div>
    </section>
  )
}