import React, { useState } from 'react'
import { register } from '../services/api'
import { useNavigate } from 'react-router-dom'

export default function Register(){
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const nav = useNavigate();
  const submit = async (e)=>{ e.preventDefault(); try{ await register({name,email,password}); nav('/login'); }catch(err){ alert('خطأ في التسجيل'); }}
  return (
    <form onSubmit={submit} className="max-w-md mx-auto bg-white p-6 rounded">
      <h2 className="text-xl font-bold mb-4">إنشاء حساب</h2>
      <input value={name} onChange={e=>setName(e.target.value)} placeholder="الاسم" className="w-full p-2 border mb-3" />
      <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="الإيميل" className="w-full p-2 border mb-3" />
      <input value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder="كلمة المرور" className="w-full p-2 border mb-3" />
      <button className="w-full p-2 bg-green-600 text-white rounded">سجل</button>
    </form>
  )
}
