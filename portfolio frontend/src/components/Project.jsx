import React from 'react'
import project1 from "../assets/project1.png"
import project2 from "../assets/project2.png"
import project3 from "../assets/project3.png"
import { motion } from "motion/react";
import { useInView } from 'react-intersection-observer';
import Skills from './skills';


const Project = () => {

    const projects = [
        {
            id: 1,
            title: "Notes Manager App",
            description: "A MERN stack notes application where users can create, edit, and delete notes securely. Features authentication, search, and a clean responsive UI.",
            image: project1,
            link: "#"
        },
        {
            id: 2,
            title: "Movie Review App",
            description: "A MERN-based Movie Review App where users can browse movies, post reviews, and share ratings with a clean, responsive interface.",
            image: project2,
            link: "#"
        },
        {
            id: 3,
            title: "E-Commerce Website",
            description: "A full-stack MERN e-commerce app with product listing, filters, cart, and checkout. Integrated user authentication and secure order management.",
            image: project3,
            link: "#"
        },
    ]
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    })


    return (
        <div id="projects" className='py-12'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <motion.h2
                    ref={ref}
                    initial={{ opacity: 0, y: 100 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className='text-4xl text-white underline font-bold text-center mb-12'>
                    My Work
                </motion.h2>

                < motion.p
                    ref={ref}
                    initial={{ opacity: 0, y: 100 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className='mb-12 text-gray-400 text-center'>
                    A collection of MERN stack projects showcasing my ability to build scalable, responsive, and user-focused web applications.
                </motion.p>


                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                    {
                        projects.map((project) => (
                            <motion.div
                                ref={ref}
                                initial={{ opacity: 0, y: 50 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: project.id * 0.2, duration: 0.5 }}

                                key={project.id}
                                className='bg-gray-900 shadow-lg rounded-lg overflow-hidden'>
                                <img src={project.image} className='w-full h-48 object-cover' />
                                <div className='p-6'>
                                    <h3 className='text-xl text-white font-semibold mb-2'>{project.title}</h3>
                                    <p className='text-slate-400 mb-4'>{project.description}</p>
                                    <button className='border-2 border-purple-500 text-purple-500 px-4 py-2 rounded-full hover:bg-purple-500 hover:text-white transition '>Details</button>
                                </div>
                            </motion.div>
                        ))
                    }

                </div>
            </div>
            <motion.div
            ref={ref}
            initial={{opacity:0, y:100}}
            animate={inView ? {opacity:1, y:0}:{}}
            transition={{delay:0.7, duration:0.5}}
            >
                <Skills/>
            </motion.div>
        </div>
    )
}

export default Project