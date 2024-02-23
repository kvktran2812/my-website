import React from 'react'
import Image from 'next/image'

//border border-black

const Profile = () => {
  return (
    <div className="h-[500px] ">
        <div className="flex items-center justify-center m-5">
            <img src="/img/Digital_photo.jpg" alt="Avatar" className="w-[250px] h-[250px] rounded-full object-cover"></img>
        </div>
        
        <p className='mt-10'>
            Hi, I`&apos;`m Khuong Tran. I`&apos;`m a software engineer, who can work with multiple technologies to implement high quality products. 
            I`&apos;`m most comfortable working with Python, C++, and JavaScript project, however, I`&apos;`m also very flexible to work with other programming language as well. 
            I`&apos;`m also very familiar with data science technologies like NumPy, Pandas, SciPy, Matplotlib, and especially machine learning tools like Scikit-learn, Tensorflow, and Pytorch.
        </p>
        <p className='mt-5'>
          I`&apos;`m very comfortable to work with any type of projects including but not limited to frontend, backend, data science, data engineering. 
          I`&apos;`m also has some experience with system programming with multi-threading and scheduling processes. 
          I also practice programming to GPU with technologies like OpenGL and GLSL.
        </p>
    </div>
  )
}

export default Profile