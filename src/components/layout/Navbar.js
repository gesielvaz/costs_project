import { NavLink } from "react-router-dom";
import Container from "./Container";
import logo from "../../img/costs_logo.png";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Container>
        <NavLink to="/">
          <img className={styles.img} src={logo} alt="Costs" />
        </NavLink>
        <ul className={styles.list}>
          <li className={styles.item}>
            <NavLink to="/" exact activeClassName={styles.active}>
              Home
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink to="/projects" activeClassName={styles.active}>
              Projetos
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink to="/company" activeClassName={styles.active}>
              Empresas
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink to="/newproject" activeClassName={styles.active}>
              Novo Projeto
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink to="/contact" activeClassName={styles.active}>
              Contato
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink to="/vehicles" activeClassName={styles.active}>
              Vehicles
            </NavLink>
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;
