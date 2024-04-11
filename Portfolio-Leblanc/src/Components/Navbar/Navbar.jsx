// import './Navbar.scss'
import navbarItems from './navbarItems.json'


export default function Navbar() {

    return (
        <div className="hidden fixed w-full p-5 flex-row justify-evenly bg-sugii-blue md:flex">
            <div>
                <a className="text-3xl font-semibold duration-1000 hover:text-cyan-600" href="#homepage-part">Leblanc.</a>
            </div>
            <div className='flex items-center'>
                <ul className='text-xl flex flex-row gap-5 justify-center justify-items-center'>
                    {navbarItems.map((item, index) => {
                        return (
                            <li className="duration-700 hover:text-cyan-600" key={index}><a href={item.url}>{item.name}</a></li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}