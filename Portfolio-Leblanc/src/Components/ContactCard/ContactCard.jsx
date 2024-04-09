import linkedin from './linkedin.png'
import fleche from './imgs/fleche30x30.png'

export default function ContactCard() {
    return (
        <a target="_blank" href="http://www.google.com">
            <div className="flex flex-row justify-center items-center rounded-xl bg-sugii-blue border-2 drop-shadow-m border-cyan-600 gap-10 p-3 duration-700 hover:scale-105 hover:bg-cyan-950">
                <div className="">
                    <img className='w-10 h-10' src={linkedin} alt="linkedin" />
                </div>
                <div className="">
                    /leblanc-sbt/
                </div>
                <div className="">
                    <img className='w-6 h-6' src={fleche} alt="fleche" />
                </div>
            </div>
        </a>
    )
}   