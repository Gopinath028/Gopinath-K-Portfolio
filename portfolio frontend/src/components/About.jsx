import React from 'react'
import aboutImg from "../assets/about.png"
import { motion } from "motion/react";
import { useInView } from 'react-intersection-observer';

const About = () => {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    })

    return (
        <div id="about" className='text-white py-16'>
            <div className='container mx-auto px-4 text-center'>
                <motion.h2
                    ref={ref}
                    initial={{ opacity: 0, y: 100 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className='text-3xl md:text-4xl font-bold mb-8 underline'>
                    About Me</motion.h2>


                <motion.p
                    ref={ref}
                    initial={{ opacity: 0, y: 100 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className=' mb-12 text-xl  text-gray-400 text-center'>
                    A Passionate MERN Stack Developer & Web Enthusiast

                </motion.p>

                <div className='flex flex-col md:flex-row justify-center items-center'>
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, x: -100 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className='mb-8 md:mb-0 md:mr-8 flex justify-center'>
                        <img
                            className='w-120 shadow-lg'
                            src={aboutImg} />
                    </motion.div>


                    <motion.p
                        ref={ref}
                        initial={{ opacity: 0, x: 100 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.6, duration: 0.5 }}

                        className='w-10/12 md:w-3/6 text-gray-300 text-base sm:text-lg leading-relaxed text-justify justify-around'>
                        "Hi, I’m <span className='text-white font-semibold'>Gopinath K</span>, a Computer Science student at Dhirajlal Gandhi College of Technology, Salem.
                        As a dedicated  <span className='text-purple-500 font-semibold'>MERN Stack Developer</span>, I bring a strong foundation in modern web technologies such as HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB. <br />I am passionate about building responsive, user-friendly, and visually appealing web applications tailored to meet client needs.
                        "I specialize in Front-End Development, designing clean, intuitive, and dynamic interfaces using React.js & Tailwind CSS. With expertise in the MERN Stack, I build full-stack applications that are both robust and scalable. I focus on responsive design, ensuring seamless performance across all devices with mobile-first practices, while applying strong problem-solving skills to overcome technical challenges and deliver reliable solutions."
                    </motion.p>
                </div>
            </div>
        </div>
    )
}

export default About