import React, { useEffect, useState } from 'react'
import { listCourses } from '../services/api'
import CourseCard from '../components/CourseCard'

export default function Home(){
  const [courses,setCourses] = useState([]);
  useEffect(()=>{ listCourses().then(res=>setCourses(res.data)).catch(()=>{}); },[]);
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">الدورات المتاحة</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {courses.map(c=> <CourseCard key={c._id} course={c} />)}
      </div>
    </div>
  )
}
