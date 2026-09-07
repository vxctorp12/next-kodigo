'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex h-screen items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md bg-white p-8 rounded-2xl shadow-sm border">
        <h2 className="text-xl font-bold text-red-600 mb-2">¡Algo salió mal!</h2>
        <p className="text-gray-600 text-sm mb-6">Hubo un problema al conectar con la base de datos o procesar la solicitud.</p>
        <button
          onClick={() => reset()}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition"
        >
          Intentar de nuevo
        </button>
      </div>
    </div>
  )
}