import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Splash() {
  const nav = useNavigate()
  useEffect(() => {
    const t = setTimeout(() => nav('/roles'), 2300)
    return () => clearTimeout(t)
  }, [nav])

  return (
    <div className="center screen">
      <div className="logo">🌾</div>
      <h1>AgriTrust Hub</h1>
      <p className="tagline">Grow. Fund. Trade. Together.</p>
      <div className="loader" aria-hidden />
    </div>
  )
}
