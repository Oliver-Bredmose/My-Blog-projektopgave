import { useState } from "react"
import styles from "./Navbar.module.scss"
import { useNavigate } from "react-router-dom"

function Navbar({ categories, setActiveCategory, activeCategory }) {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className={styles.navbar}>
      <span className={styles.logo}>Kroniken</span>
      <button className={styles.burger} onClick={() => setMenuOpen(!menuOpen)}>☰</button>
      <div className={`${styles.categories} ${menuOpen ? styles.open : ""}`}>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setActiveCategory(category)
              setMenuOpen(false)
            }}
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