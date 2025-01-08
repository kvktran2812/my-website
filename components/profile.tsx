import React from 'react'
import Image from 'next/image'

//border border-black

const Profile = () => {
  return (
    <div>
        <div className="flex items-center justify-center m-5">
            <img src="/img/Digital_photo.jpg" alt="Avatar" className="w-[250px] h-[250px] rounded-full object-cover"></img>
        </div>
        <h1 style={{fontSize: "30px", color: "blue"}}>Hi, I&apos;m Khuong Tran or Donald Tran</h1>
        <p className='mt-2'>
            My major is Computer Science with focus in Machine Learning. I just love to build deep learning models that can 
            help solve business problem and improve society in general. 
        </p>

    </div>
  )
}

export default Profile