import htmlIcon from './imgs/htmlLogo.png'
import cssIcon from './imgs/cssLogo.png'
import jsIcon from './imgs/jsLogo.png'
import reactIcon from './imgs/reactLogo.png'
import wordpressIcon from './imgs/wordpressLogo.png'
import prestaIcon from './imgs/prestaLogo.png'
import figmaIcon from './imgs/figmaLogo.png'
export default function Skills() {
    return (
        <div className="flex flex-col justify-center items-center px-5">
            <h2 className="text-5xl font-semibold my-16">Skill<span className="text-cyan-600">s</span></h2>
            <ul className='flex flex-row flex-wrap justify-center items-center gap-10 md:gap-20'>
                <li><img className="h-12 md:h-24" src={htmlIcon} alt="html" /></li>
                <li><img className="h-12 md:h-24" src={cssIcon} alt="css" /></li>
                <li><img className="h-12 md:h-24" src={jsIcon} alt="js" /></li>
                <li><img className="h-12 md:h-24" src={reactIcon} alt="react" /></li>
                <li><img className="h-12 md:h-24" src={wordpressIcon} alt="wordpress" /></li>
                <li><img className="h-12 md:h-24" src={prestaIcon} alt="prestashop" /></li>
                <li><img className="h-12 md:h-24" src={figmaIcon} alt="figma" /></li>
            </ul>
        </div>
    )
}