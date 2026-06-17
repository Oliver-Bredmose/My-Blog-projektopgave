import styles from "./Navbar.module.scss"

function Navbar({ categories, setActiveCategory }) {
  return (
    <nav className={styles.navbar}>
      <span className={styles.logo}>Kroniken</span>
      <div className={styles.categories}>
        {categories.map((category) => (
          <button key={category} onClick={() => setActiveCategory(category)}>
            {category}
          </button>
        ))}
      </div>
    </nav>
  )
}

export default Navbar