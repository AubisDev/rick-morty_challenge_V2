import styles from './../styles/styles.module.css';
import logo from './../assets/images/logo.webp';
import { NavLink } from 'react-router-dom';

const Navbar = () => {


  let activeClassName = "underline";
  return (
    <nav className={styles.container}>
      <div className={styles.navbar}>
        <img src={logo} alt="logo rick and morty" className={styles.navbar__logo} />
        <ul className={styles.navbar__menu}>
          {
            ['/','Characters','Episodes'].map( page => (
          <li className={styles.navbar__item}>
            <NavLink 
              to={page}
              style={({ isActive }) =>
                isActive ? {text: '#34c0c9'} : {color: 'rgb(105,247,70,0.6)'}
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