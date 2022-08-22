import styles from './../styles/styles.module.css';
import logo from './../assets/images/Rick_and_Morty.svg.webp';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  return (
    <nav className={styles.container}>
      <div className={styles.navbar}>
        <ul className={styles.navbar__menu}>
          {
            ['/','Characters'].map( (page) => (
              <li key={page} className={styles.navbar__item}>
                <NavLink 
                  to={page}
                  style={({ isActive }) =>
                    isActive ? {text: '#34c0c9'} : {color: '#d3e85e'}
                }
                >
                  {page === '/' ? 'Home' : page}
                </NavLink>
              </li>
            ))
          }
          
        </ul>
      </div>
    
    </nav>
  )
}

export default Navbar