import {headerLogo} from '../assets/images';
import {hamburger} from '../assets/icons';
import { navLinks } from '../constants';
const Navbar = () => {
  return (
    <header className='absolute z-10 w-full py-8 padding-x'>
        <nav className='flex items-center justify-between max-container'>
            <a href=""><img src={headerLogo} alt="logo" width={120} height={29} /></a>
            <ul className="flex items-center justify-center flex-1 gap-16 max-lg:hidden">{navLinks.map((items) => (
                
                <li key={items.label}><a href={items.href} className='text-lg leading-normal font-montserrat text-slate-gray'>{items.label}</a></li>
            ))}
            </ul>
            <div className='hidden max-lg:block '><img src={hamburger} width={25} height={25} alt="" /></div>
        </nav>
    </header>
  )
}

export default Navbar
