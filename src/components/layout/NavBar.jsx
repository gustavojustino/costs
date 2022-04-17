import {Link} from 'react-router-dom';
import Container from './Container';
import styles from './NavBar.module.css';
import logo from './../../img/costs_logo.png';
const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            <Container>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/"><img src={logo} alt="Costs"/></Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/">Início</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/projects">Meu Projeto</Link>
                    </li>

                    <li className={styles.item}>
                        <Link to="/company">Empresa</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/contact">Contato</Link>
                    </li>  
                </ul>
            </Container>
        </nav>
    )
}
export default NavBar;