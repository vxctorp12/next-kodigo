import { supabase } from '@/lib/supabase'
import Link from 'next/link'

interface PageProps {
  searchParams: Promise<{ brand?: string }>
}

export default async function Home({ searchParams }: PageProps) {
  const { brand } = await searchParams

  let query = supabase.from('perfumes').select('*')

  if (brand) {
    query = query.eq('brand_slug', brand)
  }

  const { data: perfumes, error } = await query

  const { data: allPerfumes } = await supabase.from('perfumes').select('brand_slug')
  const brands = Array.from(new Set(allPerfumes?.map((p) => p.brand_slug) || []))

  if (error) {
    throw new Error('Failed to load the perfume catalog from Supabase.')
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">Scent Factory</h1>
          <p className="text-gray-500 mt-3 text-lg">Explore our exclusive selection of fragances</p>
        </header>

        {/* Brand Filter Bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <Link
            href="/"
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
              !brand 
                ? 'bg-gray-900 text-white shadow-md' 
                : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-900 hover:text-gray-900'
            }`}
          >
            All
          </Link>
          {brands.map((b) => (
            <Link
              key={b}
              href={`/?brand=${b}`}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold uppercase transition-all ${
                brand === b 
                  ? 'bg-indigo-600 text-white shadow-md' 
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-indigo-600 hover:text-indigo-600'
              }`}
            >
              {b}
            </Link>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {perfumes?.map((perfume) => (
            <div key={perfume.id} className="bg-white rounded-2xl shadow-sm hover:shadow-xl overflow-hidden flex flex-col border border-gray-100 transition-all duration-300 group">
              
              {/* Contenedor de imagen modificado a object-contain */}
              <div className="relative h-64 w-full bg-white flex items-center justify-center p-6">
                {perfume.image_url ? (
                  <img 
                    src={perfume.image_url} 
                    alt={perfume.name} 
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <span className="text-gray-400 text-sm font-medium">No image</span>
                )}
              </div>
              
              <div className="p-6 flex flex-col flex-grow bg-gray-50/50 border-t border-gray-50">
                <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-2">
                  {perfume.brand_slug}
                </span>
                <h2 className="text-xl font-bold text-gray-900 mb-2">{perfume.name}</h2>
                <p className="text-gray-500 text-sm line-clamp-2 mb-6 flex-grow leading-relaxed">{perfume.notes}</p>
                
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-200/60">
                  <span className="text-xl font-black text-gray-900">${perfume.price} <span className="text-sm font-medium text-gray-500">USD</span></span>
                  <Link 
                    href={`/perfume/${perfume.id}`} 
                    className="bg-gray-900 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-indigo-600 transition-colors duration-300"
                  >
                    View details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {perfumes?.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No perfumes available for this brand.</p>
          </div>
        )}
      </div>
    </main>
  )
}