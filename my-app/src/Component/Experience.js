import React from 'react'

import { MdOutlineWork } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";

const Experience = () => {
    return (
        <div name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screen '>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full pt-20 '>
                <div className='pb-10 pt-20'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Education & Experience</p>
                </div>
                <div className="max-w-7xl mx-auto w-full grid grid-cols-9 px-2">
                    
                <div className="col-span-4 w-full h-full ">
                        <div className="w-full h-full bg-tranparent border-solid border-2 border-white rounded-md p-2 md:pl-4">
                            <h1 className="text-white text-xl font-medium py-2  flex flex-row">{<MdOutlineWork className='inline  mt-1 mx-2' />}  Associate Engineer Technology at Virtusa [HSBC]</h1>
                            <h3 className="text-gray-100 ">Aug-2021 - Present</h3>
                            <h3 className="text-gray-100 ">2+ Years of Experience</h3>
                            <br/>
                            <p className="text-gray-100 ">Developed client off-boarding application using ReactJs, Webpack and module federation introducing dynamic
                                routing. Developed high-performance client on-boarding application using React Js, Redux-Thunk,Hooks, and (ES6) JavaScript on
                                top of micro frontend architecture. Extensively used Json for dynamic component rendering in
                                react. Effective use of advanced features like debouncing, memo, usecallback, etc to enhance the performance of the
                                application.</p>
                        </div>
                    </div>
                    <div className=" col-span-1 w-full h-full flex justify-center items-center">
                        <div className=" h-full w-1 bg-indigo-300 "></div>
                        
                    </div>
                    <div className="col-span-4 w-full h-full"></div>


                    
                    <div className="col-span-4 w-full h-full"></div>
                    <div className=" col-span-1 w-full h-full flex justify-center items-center">
                        <div className="h-full w-1 bg-indigo-300 "></div>
                       
                    </div>
                    <div className="col-span-4 w-full h-full ">
                        <div className="w-full h-full bg-tranparent border-solid border-2 border-white rounded-md p-2 md:pl-4">
                            <h1 className="text-white text-xl font-medium py-2 flex flex-row">{<FaGraduationCap className='inline  mt-1 mx-2' />}Bachelor's of Engineering</h1>
                            <h3 className="text-gray-100 ">Jul-2016 - Jun-2020</h3>
                            <h3 className="text-gray-100 ">Computer Science Engineering</h3>
                            <br/>
                            <p className="text-gray-100 ">I graduated in Computer Science Engineering from Jawaharlal Darda Institute of Engineering and Technology, excelling in subjects like Algorithms and Software Engineering. This education equipped me with essential skills for real-world problem-solving.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience