import React from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { children: React.ReactNode }

export default function Button(props: Props) {
  return (
    <button {...props} className={`inline-flex items-center justify-center gap-2 ${props.className ?? ''}`}>
      {props.children}
    </button>
  )
}
