// import './Navbar.scss'
import navbarItems from './navbarItems.json'


export default function Navbar() {

    return (
        <div className="hidden md:flex md:p-5 md:flex-row md:justify-evenly">
            <div>
                <a className="text-3xl font-semibold duration-1000 hover:text-cyan-600" href="#">Leblanc.</a>
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