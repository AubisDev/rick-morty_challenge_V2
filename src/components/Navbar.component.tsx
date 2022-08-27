import styles from './../styles/styles.module.css';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {

  const location = useLocation();

  return (
    <nav className={`${styles.container} ${location.pathname === '/Characters' && styles.navbarColor}`}>
      <div className={styles.navbar}>
        <ul className={`${styles.navbar__menu} `} >
          {
            ['/','Characters'].map( (page) => (
              <li key={page} className={styles.navbar__item}>
                <NavLink 
                  to={page}
                  style={({ isActive }) =>
                    isActive ? {color: '#d3e85e'} : {color: 'white'}
                }
                >
                  {page === '/' ? <> <i className="fa-solid fa-house"></i> Home </> : <> <i className="fa-solid fa-people-group"></i> {page}  </>}
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