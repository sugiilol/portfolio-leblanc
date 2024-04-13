import ProjectCard from "../../Components/ProjectCard/ProjectCard"
import TechnoIcons from "../../Components/TechnoIcons/TechnoIcons"
import htmlIcon from './imgs/htmlLogo.png'
import cssIcon from './imgs/cssLogo.png'
import jsIcon from './imgs/jsLogo.png'
import reactIcon from './imgs/reactLogo.png'
import tailwindIcon from './imgs/tailwindLogo.png'
import wordpressIcon from './imgs/wordpressLogo.png'
import prestaIcon from './imgs/prestaLogo.png'
import figmaIcon from './imgs/figmaLogo.png'
import bateau from './imgs/bateau.jpg'
import thorvald from './imgs/vaisseau.png'


export default function Projects() {
    return (
        <div id="projects-part" className="flex flex-col justify-center items-center px-5 mb-20">
            <h2 className="text-5xl font-semibold my-16">Project<span className="text-cyan-600">s</span></h2>
            {/* <ul className='flex flex-row flex-wrap justify-center items-center gap-10 px-20 mb-16 md:gap-16'>
                <li><img title="Html" className="h-11 md:h-11 duration-700 hover:scale-110" src={htmlIcon} alt="html" /></li>
                <li><img title="Css" className="h-11 md:h-11 duration-700 hover:scale-110" src={cssIcon} alt="css" /></li>
                <li><img title="Js" className="h-11 md:h-11 duration-700 hover:scale-110" src={jsIcon} alt="js" /></li>
                <li><img title="React" className="h-11 md:h-11 duration-700 hover:scale-110" src={reactIcon} alt="react" /></li>
                <li><img title="Tailwind" className="h-11 md:h-11 duration-700 hover:scale-110" src={tailwindIcon} alt="tailwind" /></li>
                <li><img title="Wordpress" className="h-11 md:h-11 duration-700 hover:scale-110" src={wordpressIcon} alt="wordpress" /></li>
                <li><img title="Prestashop" className="h-11 md:h-11 duration-700 hover:scale-110" src={prestaIcon} alt="prestashop" /></li>
                <li><img title="Figma" className="h-11 md:h-11 duration-700 hover:scale-110" src={figmaIcon} alt="figma" /></li>
            </ul> */}
            <ul className='flex flex-row flex-wrap justify-center items-center gap-5 px-20 mb-16'>
                <TechnoIcons img={htmlIcon} alt="html" name="html"/>
                <TechnoIcons img={cssIcon} alt="Css" name="Css"/>
                <TechnoIcons img={jsIcon} alt="Js" name="Js"/>
                <TechnoIcons img={reactIcon} alt="React" name="React"/>
                <TechnoIcons img={tailwindIcon} alt="Tailwind" name="Tailwind"/>
                <TechnoIcons img={wordpressIcon} alt="Wordpress" name="Wordpress"/>
                <TechnoIcons img={prestaIcon} alt="Prestashop" name="Prestashop"/>
                <TechnoIcons img={figmaIcon} alt="Figma" name="Figma"/>
            </ul>
            <div className="flex flex-row flex-wrap justify-center items-center gap-10">
                <ProjectCard imageUrl={bateau} link="https://fullmoon-shop.com/fr/" title="FullMoon Shop" />
                <ProjectCard imageUrl={thorvald} title="Thorvald" description="(In progress)" />
            </div>
        </div>
    )
}