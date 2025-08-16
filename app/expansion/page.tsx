'use client'
import { motion } from 'motion/react'
import React from 'react'

function ExpansionPage() {
  return (
    <main  className="min-h-screen bg-borderless-background text-white transition-colors duration-300 
    pt-20 md:pt-24 lg:pt-28 flex items-center ">
      <div className="container h-full mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-xl md:text-3xl font-bold:text-white leading-tight"
        >
          Nosso roadmap 2025–2030 prevê a consolidação da Borderless como uma
          holding internacional com múltiplas fontes de receita
          tech-educacional. Já iniciamos a incubação de 3 produtos internos,
          expansão LATAM e estruturação jurídica para captação global.
        </motion.h1>
      </div>
    </main>
  )
}

export default ExpansionPage
