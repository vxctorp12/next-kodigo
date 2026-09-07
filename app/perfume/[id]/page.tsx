import { supabase } from '@/lib/supabase'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function PerfumeDetailPage({ params }: PageProps) {
  const { id } = await params

  const { data: perfume, error } = await supabase
    .from('perfumes')
    .select('*')
    .eq('id', id)
    .single()

  if (error || !perfume) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6 flex items-center justify-center">
      <div className="max-w-4xl w-full mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
        <div className="p-8 md:p-12">
          <Link 
            href="/" 
            className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors mb-10 inline-flex items-center"
          >
            ← Back to catalog
          </Link>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            <div className="relative h-80 md:h-96 w-full bg-gray-50 rounded-2xl flex items-center justify-center p-8 border border-gray-100">
              {perfume.image_url ? (
                <img 
                  src={perfume.image_url} 
                  alt={perfume.name} 
                  className="w-full h-full object-contain drop-shadow-lg"
                />
              ) : (
                <span className="text-gray-400 font-medium">No image</span>
              )}
            </div>
            
            {/* Detalles del perfume */}
            <div className="flex flex-col">
              <div className="mb-4">
                <span className="text-xs font-black uppercase tracking-widest text-indigo-600 bg-indigo-50 px-4 py-1.5 rounded-full">
                  {perfume.brand_slug}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
                {perfume.name}
              </h1>
              
              <p className="text-3xl font-black text-gray-900 mb-8">
                ${perfume.price} <span className="text-lg font-medium text-gray-500">USD</span>
              </p>
              
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-3">
                  Fragrance Notes
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {perfume.notes}
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </main>
  )
}