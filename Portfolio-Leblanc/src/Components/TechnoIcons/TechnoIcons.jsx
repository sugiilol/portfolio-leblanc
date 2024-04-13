import { useState } from "react"

export default function TechnoIcons(props) {

    // const [textVisible, setTextVisible] = useState(false)
    // let classText = ["block", "duration-700", "text-lg"]

    // if (textVisible) {
    //     classText = ["block"]
    // } else {
    //     classText = ["hidden"]
    // }

    return (
        <li>
            <div className="flex flex-col justify-center items-center rounded-md gap-3 bg-cyan-950 h-32 w-32 border-2 border-cyan-950 duration-700 hover:border-cyan-600">
                {/* <div className="flex flex-col justify-center items-center rounded-md gap-3 border-2 border-cyan-600 h-32 w-32"> */}
                {/* <div className="flex flex-col justify-center items-center bg-cyan-950 rounded-md gap-3 border-2 border-cyan-600 h-32 w-32" onMouseEnter={() => setTextVisible(true)} onMouseLeave={() => setTextVisible(false)}> */}
                <img className="h-11 md:h-11 duration-700 hover:scale-110" src={props.img} alt={props.alt} />
                <span className="text-lg">{props.name}</span>
                {/* <span className={`duration-700 text-lg ${classText}`}>{props.name}</span> */}
            </div>
        </li>
    )
}