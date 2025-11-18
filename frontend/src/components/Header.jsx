import React from 'react'
import { Link } from 'react-router-dom'
export default function Header(){
  return (
    <header className="bg-white shadow-sm p-4 mb-6">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="font-bold">منصة تعليمية</h1>
        <nav>
          <Link to="/" className="mx-2">الرئيسية</Link>
          <Link to="/login" className="mx-2">دخول</Link>
        </nav>
      </div>
    </header>
  )
}
