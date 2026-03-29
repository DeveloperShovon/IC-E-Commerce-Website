import React, { useEffect } from 'react'
import { supabase } from '../createClint'

export default function ContextChecker() {
    useEffect(() => {
        const {data} = supabase.auth.getSession()
        console.log(data)
    })
  return (
    <div>
      <h1>hi</h1>
    </div>
  )
}
