import './Navbar.scss'
import navbarItems from './navbarItems.json'


export default function Navbar() {

    return (
        <div className="navbar-container">
            <div className='navbar-left-part'>
                <a href="#">Leblanc.</a>
            </div>
            <div className='navbar-righ-part'>
                <ul className='navbar-list-items'>
                    {navbarItems.map((item, index) => {
                        return (
                            <li key={index}><a href={item.url}>{item.name}</a></li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}