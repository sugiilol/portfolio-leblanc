import linkedin from './linkedin.png'
import fleche from './imgs/fleche30x30.png'

export default function ContactCard(props) {
    return (
        <a target="_blank" href={props.link}>
            <div className="flex flex-row justify-between items-center w-64 rounded-xl bg-sugii-blue border-2 border-cyan-900 gap-10 p-3 duration-700 hover:scale-105 hover:border-cyan-600">
                <img className='w-10 h-10' src={props.icon} alt={props.alt} />
                {props.title}
                <img className='w-6 h-6' src={fleche} alt="fleche" />
            </div>
        </a>
    )
}   