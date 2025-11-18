import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getCourse } from '../services/api'

export default function CourseView(){
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  useEffect(()=>{ if(id) getCourse(id).then(r=>setCourse(r.data)).catch(()=>{}); },[id]);
  if(!course) return <div>...جارٍ التحميل</div>;
  return (
    <div>
      <h2 className="text-xl font-bold">{course.title}</h2>
      <p className="mt-3">{course.description}</p>
    </div>
  )
}
