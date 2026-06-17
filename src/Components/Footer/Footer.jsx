import style from "./Footer.module.scss"

function Footer() {
  return (
    <footer>
        <div className={style.Footer}>

      <div className="Section1">
        <p>Kroniken</p> 
      </div>

      <br />

      <div>
        <p>© 2026 · Drevet af HyGraph CMS</p>
      </div>
        </div>
    </footer>
  )
}

export default Footer