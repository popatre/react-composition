import { Link } from "react-router-dom";
import styles from "../styles/Nav.module.css";

export default function Navbar() {
    const navLinks = [
        { path: "", label: "Home" },
        { path: "blog", label: "Blog" },
        { path: "random", label: "Other Words" },
    ];
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navbarList}>
                {navLinks.map((link) => {
                    return (
                        <li key={link.label} className={styles.navbarItem}>
                            <Link
                                to={`/${link.path}`}
                                className={styles.navbarLink}
                            >
                                {link.label}
                            </Link>
                        </li>
                    );
                })}

                <button className={styles.signinButton}>Sign in</button>
            </ul>
        </nav>
    );
}
