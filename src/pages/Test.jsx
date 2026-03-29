import React from 'react'
import { useAuth } from '../contexts/authContext'

export default function Test() {
    const {profile} = useAuth()
  return (
    <div>
      <h1>{profile?.name}</h1>
      <p>{profile?.email}</p>
      <p>{profile?.position}</p>
    </div>
  )
}
