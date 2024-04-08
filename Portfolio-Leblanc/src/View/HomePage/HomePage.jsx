// import './HomePage.scss'
import discord from './imgs/discord.png'
import facebook from './imgs/facebook.png'
import github from './imgs/github.png'
import linkedin from './imgs/linkedin.png'
import mail from './imgs/mail.png'

export default function HomePage() {
    return (
        <div id="homepage-part" className="flex flex-col justify-center items-center px-10 pt-20 gap-10 md:pt-32 md:px-20 lg:flex-row ">
            <div className='flex flex-col gap-3 lg:w-2/5'>
                <h1 className='text-3xl font-semibold md:text-5xl md:text-5xl'>Hi, I'm Sébastien.</h1>
                <h2 className='text-2xl font-semibold text-cyan-600 md:text-3xl lg:text-4xl'><span className='typeWriter' data-text='["Frontend developer", "In search of an apprenticeship", "Future full-stack developer"]' data-speed='3' data-end='500'></span></h2>
                <p className='text-l'>Passionate about web development, I commit myself every day to deepen my knowledge and take on new challenges.<br />
                    My motivation and desire to learn guide me on the path to becoming a skilled developer, ready to contribute to this ever-evolving digital world<br />
                    I am currently looking for a two-year apprenticeship starting in September 2024 to complete my studies at the G4 Digital School.
                </p>
                <div>
                    <ul className='flex flex-row gap-3 py-5'>
                        <li className='w-10 h-10 rounded-full' ><a href="https://www.linkedin.com/in/leblanc-sbt/" target="_blank"><img className='rounded-full transition duration-700 shadow hover:shadow-cyan-600 hover:scale-110' src={linkedin} alt="Linkedin" /></a></li>
                        <li className='w-10 h-10 rounded-full' ><a href="https://github.com/sugiilol" target="_blank"><img className='rounded-full transition duration-700 shadow hover:shadow-cyan-600 hover:scale-110' src={github} alt="Github" /></a></li>
                        <li className='w-10 h-10 rounded-full' ><a href="https://www.facebook.com/sebastien.leblanc.353250" target="_blank"><img className='rounded-full transition duration-700 shadow hover:shadow-cyan-600 hover:scale-110' src={facebook} alt="Facebook" /></a></li>
                        <li className='w-10 h-10 rounded-full' ><a href="mailto:leblanc.sbt@gmail.com"><img className='rounded-full transition duration-700 shadow hover:shadow-cyan-600 hover:scale-110' src={mail} alt="mail" /></a></li>
                    </ul>
                </div>
                <div>
                    {/* <button className='pl-5 pr-5 h-12 rounded-full border-2 border-cyan-600 duration-700 hover:bg-cyan-600'>Hire me !</button> */}
                    <a href="#contact-part" className='pl-5 pr-5 pt-3 pb-3 rounded-full border-2 border-cyan-600 duration-700 hover:bg-cyan-600'>Hire me !</a>
                </div>
            </div>
            <div className='flex items-center justify-center rounded-full pb-20 md:w-100'>
                <img className="w-full rounded-full transition duration-700 shadow-xl shadow-cyan-600 lg:w-100" src="https://placehold.co/300x300" alt="Leblanc Sébastien" />
            </div>
        </div>
    )
}