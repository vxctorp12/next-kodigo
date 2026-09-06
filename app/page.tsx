import { supabase } from '@/lib/supabase'
import Link from 'next/link'

export default async function Home() {
  // Operación de lectura (requerimiento de la rúbrica)
  const { data: perfumes, error } = await supabase.from('perfumes').select('*')

  if (error) {
    throw new Error('No se pudo cargar el catálogo de perfumes desde Supabase.')
  }

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">Scent Factory - Catálogo</h1>
          <p className="text-gray-600 mt-2">Explora nuestra selección exclusiva de decants</p>
        </header>

        {/* Diseño responsive (grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {perfumes?.map((perfume) => (
            <div key={perfume.id} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col border border-gray-100 transition hover:shadow-lg">
              {perfume.image_url && (
                <div className="relative h-48 w-full bg-gray-100">
                  <img 
                    src={perfume.image_url} 
                    alt={perfume.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 mb-1">
                  {perfume.brand_slug}
                </span>
                <h2 className="text-xl font-bold text-gray-800 mb-2">{perfume.name}</h2>
                <p className="text-gray-500 text-sm line-clamp-2 mb-4 flex-grow">{perfume.notes}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-lg font-bold text-gray-900">${perfume.price} USD</span>
                  <Link 
                    href={`/perfume/${perfume.id}`} 
                    className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition"
                  >
                    Ver detalles
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}