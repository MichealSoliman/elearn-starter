import React, { useState } from 'react'
import { login } from '../services/api'
import { useNavigate } from 'react-router-dom'

export default function Login(){
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const nav = useNavigate();
  const submit = async (e)=>{ e.preventDefault(); try{ const res = await login({email,password}); localStorage.setItem('token', res.data.token); nav('/dashboard'); }catch(err){ alert('خطأ في الدخول'); }}
  return (
    <form onSubmit={submit} className="max-w-md mx-auto bg-white p-6 rounded">
      <h2 className="text-xl font-bold mb-4">تسجيل الدخول</h2>
      <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="الإيميل" className="w-full p-2 border mb-3" />
      <input value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder="كلمة المرور" className="w-full p-2 border mb-3" />
      <button className="w-full p-2 bg-blue-600 text-white rounded">دخول</button>
    </form>
  )
}
