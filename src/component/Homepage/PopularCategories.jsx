import React, { useEffect, useState } from 'react'
import { supabase } from '../../createClint';
import loadingSpin from '../Loading/loadingSpin';

export default function PopularCategories() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const {data, loading} = await supabase.from('categories').select('*');
                if (loading) {
                    setLoading(true);
                } else {
                    setCategories(data);
                    setLoading(false);
                }
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []);
  return (
    <div>
        <div className="py-12 bg-white text-center">
      <h2 className="text-red-500 uppercase tracking-widest text-sm font-bold mb-2">
        Customer Favorites
      </h2>
      <h2 className="text-3xl font-extrabold mb-10 text-gray-800">
        Popular Categories
      </h2>
       <loadingSpin loading={loading}/> 
      <div className="flex flex-wrap justify-center gap-6 px-4">
        {categories && categories.length > 0 ? (
          categories.map((category) => (
            <div 
              key={category.id} 
              className="w-48 p-6 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-50 flex flex-col items-center"
            >
              <div className="w-24 h-24 bg-yellow-50 rounded-full flex items-center justify-center mb-4">
                <img 
                  src={category.img} 
                  alt={category.title} 
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900">{category.title}</h3>
              <p className="text-gray-500 text-sm italic">
                ({category.title} title)
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No categories available</p>
        )}
      </div>
    </div>
      
    </div>
  )
}
