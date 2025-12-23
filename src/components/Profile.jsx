import React from 'react'
import Image from '../assets/Image.png'
import { IoLogoYoutube } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
export default function Profile() {
    return (
        <div className='flex flex-col items-center w-78 p-8 rounded-xl shadow-sm shadow-white  bg-linear-to-r from-blue-200 via-blue-400 to-blue-600'>
            <img className=' h-40 w-40 rounded-full object-cover flex' src={Image} alt="Profile Image" />
            <h1 className='font-bold text-2xl'>Tanveer Singh</h1>
            <p className='font-semibold text-xl'>Web-Beginner</p>
            <h2 className='font-semibold text-xl'>Frontend-Developer</h2>
            <div className='flex gap-4 text-2xl mt-4'>
                <a target='_blank' className='hover:scale-130 transition-all' href="https://www.youtube.com/@fit-tanveerr"><IoLogoYoutube /></a>
                <a target='_blank' className='hover:scale-130 transition-all' href="https://www.instagram.com/anirudh_766/"><RiInstagramFill /></a>
                <a target='_blank' className='hover:scale-130 transition-all' href="https://www.linkedin.com/in/tanveer-singh-ab008637b/"><TbBrandLinkedinFilled /></a>
                <a target='_blank' className='hover:scale-130 transition-all' href="https://wa.me/9319376656/"><FaSquareWhatsapp /></a>
                <a target='_blank' className='hover:scale-130 tranisition-all' href="mailto:tanveersinghh854446@gmail.com"><MdMail /></a>
            </div>
        </div>
    )
}
