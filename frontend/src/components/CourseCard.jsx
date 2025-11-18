import React from 'react'
import { Link } from 'react-router-dom'
export default function CourseCard({course}){
  return (
    <div className="p-4 border rounded shadow-sm bg-white">
      <h3 className="font-semibold">{course.title}</h3>
      <p className="text-sm mt-2">{course.description?.slice(0,100)}</p>
      <div className="mt-4 flex justify-between items-center">
        <span className="font-bold">{course.price ? course.price+' SAR' : 'مجاناً'}</span>
        <Link to={`/course/${course._id}`} className="text-blue-600">عرض</Link>
      </div>
    </div>
  )
}
