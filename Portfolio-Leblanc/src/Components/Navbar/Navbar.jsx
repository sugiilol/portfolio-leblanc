// import './Navbar.scss'
import navbarItems from './navbarItems.json'


export default function Navbar() {

    return (
        <div className="navbar-container p-5 flex flex-row justify-evenly">
            <div className='navbar-left-part'>
                <a className="text-3xl font-semibold duration-1000 hover:text-cyan-600" href="#">Leblanc.</a>
            </div>
            <div className='navbar-righ-part flex items-center'>
                <ul className='navbar-list-items text-xl flex flex-row gap-5 justify-center justify-items-center'>
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