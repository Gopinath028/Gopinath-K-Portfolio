import React from 'react'
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import {
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt,
    FaFacebook,
    FaLinkedin,
    FaInstagram,
    FaGithub,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Contact = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    })

    const [fullName, setFullName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [subject, setSubject] = React.useState("");
    const [message, setMessage] = React.useState("");

    
    const [status, setStatus] = React.useState("");   // success or error message
    const [loading, setLoading] = React.useState(false); // to show "sending..."


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus("");


        try {
            const res = await fetch("http://localhost:5000/api/contacts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    fullName,
                    email,
                    phone,
                    subject,
                    message,
                }),
            });

            const data = await res.json();

            if (res.ok) {
                setStatus("✅ Message sent successfully!");
                // clear form
                setFullName("");
                setEmail("");
                setPhone("");
                setSubject("");
                setMessage("");
            } else {
                setStatus("❌ Failed to send message: ");
            }
        } catch (err) {
            setStatus("❌ Error: " + err.message);
        } finally {
            setLoading(false);
        }
    };




    return (
        <div id="contact">
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12'>
                <motion.h2
                    ref={ref}
                    initial={{ opacity: 0, y: -100 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className='text-4xl font-bold text-white'>
                    Let's Discuss Your <span className='text-purple-500'>Project</span>
                </motion.h2>


                <motion.p
                    ref={ref}
                    initial={{ opacity: 0, y: -100 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className='text-slate-400 mt-4'> As a fresher MERN stack developer, I love solving problems through code.
                    Let’s connect and work on exciting opportunities</motion.p>
            </div>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div className='space-y-6'>
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className='flex items-center space-x-4'>
                        <div className='bg-purple-500 p-4 rounded-full '>
                            <FaPhone className='text-white w-6 h-6' />
                        </div>
                        <div>
                            <p className='text-lg font-medium text-purple-500'>Call Me</p>
                            <p className='text-white '>+91 9600923670</p>
                        </div>
                    </motion.div>

                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className='flex items-center space-x-4'>
                        <div className='bg-purple-500 p-4 rounded-full '>
                            <FaEnvelope className='text-white w-6 h-6' />
                        </div>
                        <div>
                            <p className='text-lg font-medium text-purple-500'>Email</p>
                            <p className='text-white '>gopinathk028@gmail.com</p>
                        </div>
                    </motion.div>

                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className='flex items-center space-x-4'>
                        <div className='bg-purple-500 p-4 rounded-full '>
                            <FaMapMarkerAlt className='text-white w-6 h-6' />
                        </div>
                        <div>
                            <p className='text-lg font-medium text-purple-500'>Address</p>
                            <p className='text-white '>Salem, Tamilnadu, India</p>
                        </div>

                    </motion.div>

                    <div>
                        <motion.div
                            ref={ref}
                            initial={{ opacity: 0, x: -50 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.7, duration: 0.5 }}
                            className='flex items-center space-x-6 text-white mt-10 ml-2'>
                            <a href="https://www.linkedin.com/in/gopinath-k-087779273/" className='hover:text-purple-500'><FaLinkedin className='w-10 h-10' /></a>
                            <a href="https://github.com/Gopinath028" className='hover:text-purple-500'><FaGithub className='w-10 h-10' /></a>
                            <a href="https://www.instagram.com/mr._gopinath_k?igsh=MWF5NG52MGM4eGp1dQ==" className='hover:text-purple-500'><FaInstagram className='w-10 h-10' /></a>
                            <a href="https://x.com/Gopinath__k?t=8agpyWTc4Hf4yN3Ayjd2nA&s=08 " className='hover:text-purple-500'><FaXTwitter className='w-10 h-10' /></a>
                            <a href="https://www.facebook.com/share/1PDcE9wbb7/" className='hover:text-purple-500'><FaFacebook className='w-10 h-10' /></a>
                        </motion.div>
                    </div>
                </div>

                <motion.form
                    ref={ref}
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, x: 50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className='space-y-4 text-white'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                        <input type="text" placeholder='Full Name'
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className='border border-purple-500 bg-gray-900 p-4 rounded-md w-full' />

                        <input type="email" placeholder='Your email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}

                            className='border border-purple-500 bg-gray-900 p-4 rounded-md w-full' />
                    </div>

                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                        <input type="tel" placeholder='Phone number'
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className='border border-purple-500 bg-gray-900 p-4 rounded-md w-full' />

                        <input type="text" placeholder='Email Subject'
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            className='border border-purple-500 bg-gray-900 p-4 rounded-md w-full' />

                    </div>
                    <textarea placeholder='Message'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className='border border-purple-500 bg-gray-900 p-4 rounded-md w-full'></textarea>


                    {loading && <p className="text-yellow-400">⏳ Sending...</p>}
                    {status && (
                        <p
                            className={`${status.startsWith("✅")
                                    ? "text-green-400"
                                    : "text-red-400"
                                }`}
                        >
                            {status}
                        </p>
                    )}


                    <motion.button
                        ref={ref}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type='submit'
                        className='bg-purple-500 text-white px-6 py-3 rounded-md hover:bg-purple-600 transition duration-200'>Submit Message</motion.button>

                </motion.form>
            </div>
            {/*footer*/}
            <motion.div
                ref={ref}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 1, duration: 0.5 }}
                className='mt-48 flex justify-between items-center p-5 text-white border-t-2 border-purple-500'>
                <p>&copy; 2025 Gopinath. All rights reserved</p>

                <div className='flex justify-center space-x-4 text-white mt-4'>
                    <a className='hover:text-purple-500'><FaFacebook className='w-6 h-6' /></a>
                    <a className='hover:text-purple-500'><FaXTwitter className='w-6 h-6' /></a>
                    <a className='hover:text-purple-500'><FaLinkedin className='w-6 h-6' /></a>
                    <a className='hover:text-purple-500'><FaInstagram className='w-6 h-6' /></a>
                </div>
            </motion.div>
        </div>
    )
}

export default Contact