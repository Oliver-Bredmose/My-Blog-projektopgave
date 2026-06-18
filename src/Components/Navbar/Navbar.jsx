import styles from "./Navbar.module.scss"
import { useNavigate } from "react-router-dom"

function Navbar({ categories, setActiveCategory, activeCategory }) {
  const navigate = useNavigate()

  return (
    <nav className={styles.navbar}>
      <span className={styles.logo}>Kroniken</span>
      <div className={styles.categories}>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={activeCategory === category ? styles.active : ""}
          >
            {category}
          </button>
        ))}
      </div>
      <button className={styles.loginButton} onClick={() => navigate("/Login")}>Opret konto</button>
    </nav>
  )
}

export default Navbar