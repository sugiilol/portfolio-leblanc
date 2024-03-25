import { useState } from "react"

export default function NavBarMobile() {


    const [navbarIsOpen, setNavbarIsOpen] = useState(false)

    let classNavbarMenu = ["absolute", "rounded-r-lg", "w-44", "h-72", "duration-700", "flex", "flex-col", "justify-center", "items-center", "gap-5", "bg-cyan-700/100", "-ml-56"]

    if (navbarIsOpen === true) {
        classNavbarMenu = ["absolute", "rounded-r-lg", "w-44","h-72", "duration-700", "flex", "flex-col", "justify-center", "items-center", "gap-5", "bg-cyan-700/100", "-ml-10"]
    }

    return (
        <div className="mt-10 ml-10 fixed md:hidden" onClick={() => setNavbarIsOpen(!navbarIsOpen)}>
            <button className="flex flex-col gap-1 mb-5" onClick={() => setNavbarIsOpen(!navbarIsOpen)}>
                <span className="h-1 rounded-full w-8 bg-cyan-600"></span>
                <span className="h-1 rounded-full w-8 bg-cyan-600"></span>
                <span className="h-1 rounded-full w-8 bg-cyan-600"></span>
            </button>
            <ul className={classNavbarMenu.join(' ')}>
                <li><a href="#homepage-part" className="text-2xl text-sugii-blue font-bold">Leblanc.</a></li>
                <li><a href="#homepage-part" >Home</a></li>
                <li><a href="#skills-part">Skills</a></li>
                <li><a href="#skills-part">Projects</a></li>
                <li><a href="#cursus-part">Cursus</a></li>
                <li><a href="#contact-part">Contact me</a></li>
            </ul>
        </div>
    )
}