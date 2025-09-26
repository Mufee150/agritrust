import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export default function Card({ children, className, onClick }: CardProps) {
  return (
    <div 
      className={`bg-white rounded-xl shadow-sm overflow-hidden ${onClick ? 'cursor-pointer' : ''} ${className || ''}`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}
