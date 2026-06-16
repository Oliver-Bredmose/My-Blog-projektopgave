import styles from "./Navbar.module.scss"

function Navbar({ categories, setActiveCategory }) {
  return (
    <nav className={styles.navbar}>
      <span className={styles.logo}>INGN</span>
      <div className={styles.categories}>
        {categories.map((category) => (
          <button key={category} onClick={() => setActiveCategory(category)}>
            {category}
          </button>
        ))}
      </div>
      <div className={styles.icons}>
        <img src="/iconBars.png" alt="menu"/>
        <img src="/iconUser.png" alt="bruger"/>
      </div>
    </nav>
  )
}

export default Navbar