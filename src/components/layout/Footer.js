import styles from './Footer.module.css';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'


function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.socialList}>
                <li>
                    <a href='https://fb.com'>
                        <FaFacebook />
                    </a>
                </li>
                <li>
                    <a href='https://https://www.instagram.com/'>
                        <FaInstagram />
                    </a>
                </li>
                <li>
                    <a href='https://br.linkedin.com/in/gesiel-vaz-742453192'>
                        <FaLinkedin />
                    </a>
                </li>
            </ul>
            <p>
                <span>costs</span>&copy; 2023
            </p>
        </footer>
    )
}

export default Footer