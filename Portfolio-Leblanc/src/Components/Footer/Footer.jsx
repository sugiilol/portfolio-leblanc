import discord from './imgs/discord.png'
import facebook from './imgs/facebook.png'
import github from './imgs/github.png'
import linkedin from './imgs/linkedin.png'

export default function Footer() {
    return (
        <div className="w-100 flex flex-col items-center justify-center pb-8">
            <ul className='flex flex-row gap-3'>
                <li className='w-10 h-10 rounded-full' ><a href="https://www.linkedin.com/in/leblanc-sbt/" target="_blank"><img className='rounded-full transition duration-700 shadow hover:shadow-cyan-600 hover:scale-110' src={linkedin} alt="Linkedin" /></a></li>
                <li className='w-10 h-10 rounded-full' ><a href="https://github.com/sugiilol" target="_blank"><img className='rounded-full transition duration-700 shadow hover:shadow-cyan-600 hover:scale-110' src={github} alt="Github" /></a></li>
                {/* <li className='w-10 h-10 rounded-full' ><a href="#"><img className='rounded-full transition duration-700 shadow hover:shadow-cyan-600 hover:scale-110' src={discord} alt="Discord" /></a></li> */}
                <li className='w-10 h-10 rounded-full' ><a href="https://www.facebook.com/sebastien.leblanc.353250" target="_blank"><img className='rounded-full transition duration-700 shadow hover:shadow-cyan-600 hover:scale-110' src={facebook} alt="Facebook" /></a></li>
            </ul>
            <ul className='flex flex-row gap-3 py-5'>
                <li className='duration-700 hover:text-cyan-600'><a href="#homepage-part">About</a></li>
                <li className='duration-700 hover:text-cyan-600'><a href="#skills-part">Skills</a></li>
                <li className='duration-700 hover:text-cyan-600'><a href="#skills-part">Projects</a></li>
                <li className='duration-700 hover:text-cyan-600'><a href="#cursus-part">Cursus</a></li>
                <li className='duration-700 hover:text-cyan-600'><a href="#contact-part">Contact me</a></li>
            </ul>
            <p className='text-xs'>© Leblanc Sébastien | All Rights Reserved</p>
        </div>
    )
}