// import './HomePage.scss'
import discord from './imgs/discord.png'
import facebook from './imgs/facebook.png'
import github from './imgs/github.png'
import linkedin from './imgs/linkedin.png'

export default function HomePage() {
    return (
        <div className="homepage-container flex flex-row justify-center p-40 gap-20">
            <div className='homepage-left-part flex flex-col gap-3 max-w-3xl'>
                <h1 className='text-6xl font-semibold'>Hi, I'm Sébastien.</h1>
                <h2 className='text-4xl font-semibold text-cyan-600'>Frontend Developer</h2>
                <p>Passionate about web development, I commit myself every day to deepen my knowledge and take on new challenges.<br />
                    My motivation and desire to learn guide me on the path to becoming a skilled developer, ready to contribute to this ever-evolving digital world<br />
                    I am currently looking for a two-year apprenticeship starting in September 2024 to complete my studies at the G4 Digital School.
                </p>
                <div className='homepage-social-link'>
                    <ul className='flex flex-row gap-3 py-5'>
                        <li className='w-10 h-10' ><a href="#"><img src={linkedin} alt="Linkedin" /></a></li>
                        <li className='w-10 h-10' ><a href="#"><img src={github} alt="Github" /></a></li>
                        <li className='w-10 h-10' ><a href="#"><img src={discord} alt="Discord" /></a></li>
                        <li className='w-10 h-10' ><a href="#"><img src={facebook} alt="Facebook" /></a></li>
                    </ul>
                </div>
            </div>
            <div className='homepage-right-part flex-none rounded-full'>
                <img className="flex-none rounded-full" src="https://placehold.co/450x450" alt="Leblanc Sébastien" />
            </div>
        </div>
    )
}