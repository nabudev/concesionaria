'use client'

import React, { useState } from 'react'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const validateForm = () => {
    let tempErrors = {}
    if (!formData.name.trim()) tempErrors.name = "El nombre es requerido"
    if (!formData.email.trim()) {
      tempErrors.email = "El email es requerido"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email inválido"
    }
    if (!formData.message.trim()) tempErrors.message = "El mensaje es requerido"
    setErrors(tempErrors)
    return Object.keys(tempErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      // Aquí iría la lógica para enviar el formulario
      console.log('Formulario enviado:', formData)
      alert('Gracias por contactarnos. Te responderemos pronto.')
      setFormData({ name: '', email: '', phone: '', message: '' })
    }
  }

  return (
    <section className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Contáctanos</h2>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.name ? 'border-red-500' : ''}`}
              placeholder="Tu nombre"
            />
            {errors.name && <p className="text-red-500 text-xs italic">{errors.name}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : ''}`}
              placeholder="tu@email.com"
            />
            {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
              Teléfono (opcional)
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Tu número de teléfono"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 ${errors.message ? 'border-red-500' : ''}`}
              placeholder="Tu mensaje"
            ></textarea>
            {errors.message && <p className="text-red-500 text-xs italic">{errors.message}</p>}
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
              Enviar Mensaje
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}