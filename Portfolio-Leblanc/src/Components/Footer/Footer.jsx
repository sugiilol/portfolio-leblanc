import discord from './imgs/discord.png'
import facebook from './imgs/facebook.png'
import github from './imgs/github.png'
import linkedin from './imgs/linkedin.png'

export default function Footer() {
    return (
        <div className="w-100 flex flex-col items-center justify-center pb-8">
            <ul className='flex flex-row gap-3'>
                <li className='w-10 h-10 rounded-full' ><a href="#"><img className='rounded-full transition duration-700 shadow hover:shadow-cyan-600 hover:scale-110' src={linkedin} alt="Linkedin" /></a></li>
                <li className='w-10 h-10 rounded-full' ><a href="#"><img className='rounded-full transition duration-700 shadow hover:shadow-cyan-600 hover:scale-110' src={github} alt="Github" /></a></li>
                <li className='w-10 h-10 rounded-full' ><a href="#"><img className='rounded-full transition duration-700 shadow hover:shadow-cyan-600 hover:scale-110' src={discord} alt="Discord" /></a></li>
                <li className='w-10 h-10 rounded-full' ><a href="#"><img className='rounded-full transition duration-700 shadow hover:shadow-cyan-600 hover:scale-110' src={facebook} alt="Facebook" /></a></li>
            </ul>
            <ul className='flex flex-row gap-3 py-5'>
                <li className='duration-700 hover:text-cyan-600'><a href="#">Home</a></li>
                <li className='duration-700 hover:text-cyan-600'><a href="#">About</a></li>
                <li className='duration-700 hover:text-cyan-600'><a href="#">Services</a></li>
                <li className='duration-700 hover:text-cyan-600'><a href="#">Portfolio</a></li>
                <li className='duration-700 hover:text-cyan-600'><a href="#">Contact</a></li>
            </ul>
            <p className='text-xs'>© Leblanc Sébastien | All Rights Reserved</p>
        </div>
    )
}