import './HomePage.scss'
import discord from './imgs/discord.png'
import facebook from './imgs/facebook.png'
import github from './imgs/github.png'
import linkedin from './imgs/linkedin.png'

export default function HomePage() {
    return (
        <div className="homepage-container">
            <div className='homepage-left-part'>
                <h1>Hi, I'm Sébastien.</h1>
                <h2>Frontend Developer</h2>
                <p>Passionate about web development, I commit myself every day to deepen my knowledge and take on new challenges.<br />
                    My motivation and desire to learn guide me on the path to becoming a skilled developer, ready to contribute to this ever-evolving digital world<br />
                    I am currently looking for a two-year apprenticeship starting in September 2024 to complete my studies at the G4 Digital School.
                </p>
                <div className='homepage-social-link'>
                    <ul>
                        <li><a href="#"><img src={linkedin} alt="linkedin" /></a></li>
                        <li><a href="#"><img src={github} alt="github" /></a></li>
                        <li><a href="#"><img src={discord} alt="discord" /></a></li>
                        <li><a href="#"><img src={facebook} alt="facebook" /></a></li>
                    </ul>
                </div>
            </div>
            <div className='homepage-right-part'>
                <img src="https://placehold.co/450x450" alt="" />
            </div>
        </div>
    )
}