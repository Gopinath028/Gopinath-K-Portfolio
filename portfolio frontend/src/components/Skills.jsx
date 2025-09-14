import React from 'react'
import { motion } from "motion/react"
import { div } from 'motion/react-client';
import { animate } from 'motion';

const Skills = () => {

    const skills = [
        "React ⚛️",
        "Node.js 🟢",
        "MongoDB 🍃",
        "Express 🚀",
        "Tailwind CSS 💨",
        "JavaScript ✨",
        "HTML5 🌐",
        "CSS3 🎨",
        "Git & GitHub 🐙",
        "REST API 🌍",
        "Java ☕",
        "Python 🐍"
    ]

    const skillsList =[...skills, ...skills];

    const scrollVariant1 ={
        animate:{
            x:[0,-2000],
            transition:{
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 15,
                    ease: "linear",
                }
            }
        }
    }

    const scrollVariant2 ={
        animate:{
            x:[-2000, 0],
            transition:{
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 15,
                    ease: "linear",
                }
            }
        }
    }

    return (
        <div className='text-white py-16'>
            <div className='container mx-auto text-center'>
                <h2 className='text-3xl md:text-4xl font-bold mb-8'>Technologies & Tools I Use ⚡</h2>
                <div className='overflow-hidden relativem w-full'>

                    <motion.div 
                    variants={scrollVariant1}
                    animate="animate"
                    className='whitespace-nowrap flex space-x-10'>
                        {skillsList.map((skills, index)=>(
                            <div className='text-lg bg-gray-900 px-6 py-3 rounded-full inline-block'
                            key={index}>
                                {skills}
                            </div>
                        ))}
                    </motion.div>
                </div>

                <div className='overflow-hidden relativem w-full mt-5'>

                    <motion.div 
                    variants={scrollVariant2}
                    animate="animate"
                    className='whitespace-nowrap flex space-x-10'>
                        {skillsList.map((skills, index)=>(
                            <div className='text-lg bg-gray-900 px-6 py-3 rounded-full inline-block'
                            key={index}>
                                {skills}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Skills