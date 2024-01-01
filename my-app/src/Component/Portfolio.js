import React from 'react'
import finearc from "../assets/portfolio/FineArc.png"
import rollingdice from "../assets/portfolio/RollingDice.png"
import packkaro from "../assets/portfolio/PackKaro.png"
import hungerhub from "../assets/portfolio/HungerHub.png"
import streamefy from "../assets/portfolio/Streamefy.png"
import readzone from "../assets/portfolio/ReadZone.png"


const Portfolio = () => {
    const Portfolios=[
        {
            id:1,
            src:finearc,
            demoLink: 'https://interior-design-1234.netlify.app/',
            codeLink:'https://github.com/vaishnaviytl/finearc'
        },
        {
            id:2,
            src:rollingdice,
            demoLink: 'https://example.com/demo1',
            codeLink:'https://example.com/demo1'
        },
        {
            id:3,
            src:packkaro,
            demoLink: 'https://packkaro.netlify.app/',
            codeLink:'https://github.com/vaishnaviytl/PackKaro.io'
        },
        {
            id:4,
            src:hungerhub,
            demoLink: 'https://example.com/demo1',
            codeLink:'https://example.com/demo1'
        },
        {
            id:5,
            src:streamefy,
            demoLink: 'https://example.com/demo1',
            codeLink:'https://example.com/demo1'
        },
        {
            id:6,
            src:readzone,
            demoLink: 'https://example.com/demo1',
            codeLink:'https://example.com/demo1'
        }
    ]
  return (
    <div 
    name='portfolio'
    className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8 pt-20'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500 '>
                    Portfolio

                </p>
                <p className='py-6'>
                    check out some of my work right 

                </p>

            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                {Portfolios.map(({id,src,demoLink,codeLink})=>(
                <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                    <img
                    src={src}
                    alt=''
                    className='rounded-md duration-200 hover:scale-105'/>
                    <div className='flex items-center justify-center'>
                    <a href={demoLink} target='_blank' rel='noopener noreferrer'>
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                        </a>
                        <a href={codeLink} target='_blank' rel='noopener noreferrer'>
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                            code
                        </button>
                        </a>
                        </div>
                        </div>
                ))}

            </div>

        </div>

    </div>
  )
}

export default Portfolio