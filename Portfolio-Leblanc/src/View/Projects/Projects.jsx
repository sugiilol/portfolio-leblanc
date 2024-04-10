import ProjectCard from "../../Components/ProjectCard/ProjectCard"
import htmlIcon from './imgs/htmlLogo.png'
import cssIcon from './imgs/cssLogo.png'
import jsIcon from './imgs/jsLogo.png'
import reactIcon from './imgs/reactLogo.png'
import tailwindIcon from './imgs/tailwindLogo.png'
import wordpressIcon from './imgs/wordpressLogo.png'
import prestaIcon from './imgs/prestaLogo.png'
import figmaIcon from './imgs/figmaLogo.png'


export default function Projects() {
    return (
        <div id="projects-part" className="flex flex-col justify-center items-center px-5">
            <h2 className="text-5xl font-semibold my-16">Project<span className="text-cyan-600">s</span></h2>
            <ul className='flex flex-row flex-wrap justify-center items-center gap-10 px-20 mb-16 md:gap-16'>
                <li><img className="h-11 md:h-11 duration-700 hover:scale-110" src={htmlIcon} alt="html" /></li>
                <li><img className="h-11 md:h-11 duration-700 hover:scale-110" src={cssIcon} alt="css" /></li>
                <li><img className="h-11 md:h-11 duration-700 hover:scale-110" src={jsIcon} alt="js" /></li>
                <li><img className="h-11 md:h-11 duration-700 hover:scale-110" src={reactIcon} alt="react" /></li>
                <li><img className="h-11 md:h-11 duration-700 hover:scale-110" src={tailwindIcon} alt="tailwind" /></li>
                <li><img className="h-11 md:h-11 duration-700 hover:scale-110" src={wordpressIcon} alt="wordpress" /></li>
                <li><img className="h-11 md:h-11 duration-700 hover:scale-110" src={prestaIcon} alt="prestashop" /></li>
                <li><img className="h-11 md:h-11 duration-700 hover:scale-110" src={figmaIcon} alt="figma" /></li>
            </ul>
            <div className="flex flex-row flex-wrap justify-center items-center gap-10">
                <ProjectCard imageUrl='/imgs/bateau.jpg' link="https://fullmoon-shop.com/fr/" title="FullMoon Shop"/>
                <ProjectCard imageUrl='/imgs/vaisseau.png' title="Thorvald" description="(In progress)"/>
            </div>
        </div>
    )
}