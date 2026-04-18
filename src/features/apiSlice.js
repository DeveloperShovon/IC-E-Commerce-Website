import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { supabase } from "../createClint";

export const apiSlice = createApi({
  reducerPath: "productsApi",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getProducts: builder.query({
      queryFn: async () => {
        const { data , error} = await supabase.from("products").select("*");
        if (error) {
          console.error("Error fetching products:", error);
          return { error };
        }
        return { data };
      },

    }),

    AddProduct: builder.mutation({
        queryFn: async (newProduct) => {
          const { products, error } = await supabase.from("products").insert([newProduct]).select();   
            if (error) {
                console.error("Error adding product:", error);
            }
            return { products };
        }
        
    }),
  }),



});

export const { useGetProductsQuery, useAddProductMutation } = apiSlice;