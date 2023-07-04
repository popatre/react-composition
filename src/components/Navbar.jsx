import { Link } from "react-router-dom";
import styles from "../styles/Nav.module.css";

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navbarList}>
                <li className={styles.navbarItem}>
                    <Link to="/" className={styles.navbarLink}>
                        Home
                    </Link>
                </li>
                <li className={styles.navbarItem}>
                    <Link to="/blog" className={styles.navbarLink}>
                        Blog
                    </Link>
                </li>
                <li className={styles.navbarItem}>
                    <Link to="/random" className={styles.navbarLink}>
                        Other Words
                    </Link>
                </li>
                <button className={styles.signinButton}>Sign in</button>
            </ul>
        </nav>
    );
}
