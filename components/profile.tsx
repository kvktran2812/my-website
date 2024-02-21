import React from 'react'
import Image from 'next/image'

//border border-black

const Profile = () => {
  return (
    <div className="h-[300px] ">
        <div className="flex items-center justify-center m-5">
            <img src="/img/Digital_photo.jpg" alt="Avatar" className="w-32 h-32 rounded-full object-cover"></img>
        </div>
        
        <p>
            Hello, I'm Khuong Tran. I'm a 4th year student studying computer science at Ontario Tech University. My expertise is software engineering and machine learning.
        </p>
    </div>
  )
}

export default Profile