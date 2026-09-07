import { supabase } from '@/lib/supabase'
import Link from 'next/link'

interface PageProps {
  params: Promise<{ brand_slug: string }>
}

export default async function BrandPage({ params }: PageProps) {
  const { brand_slug } = await params

  const { data: perfumes, error } = await supabase
    .from('perfumes')
    .select('*')
    .eq('brand_slug', brand_slug)

  if (error) {
    throw new Error('Error al filtrar los productos por marca.')
  }

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <Link href="/" className="text-sm font-medium text-indigo-600 hover:underline mb-6 inline-block">
          ← Volver al inicio
        </Link>
        <h1 className="text-3xl font-extrabold text-gray-900 uppercase mb-8">
          Colección: {brand_slug}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {perfumes?.map((perfume) => (
            <div key={perfume.id} className="bg-white rounded-xl shadow-sm border p-4">
              <h2 className="text-lg font-bold">{perfume.name}</h2>
              <p className="text-gray-500 text-sm mt-1">${perfume.price} USD</p>
              <Link href={`/perfume/${perfume.id}`} className="text-indigo-600 text-sm font-medium mt-3 block hover:underline">
                Ver detalles →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}