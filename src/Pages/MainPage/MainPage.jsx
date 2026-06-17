import { useState, useEffect } from "react"
import { fetchblogs } from "../../Hygraph-fetch"
import { Link } from "react-router-dom"
import Footer from "../../Components/Footer/Footer"
import Navbar from "../../Components/Navbar/Navbar"
import styles from "./MainPage.module.scss"

function MainPage() {
  const [blogs, setBlogs] = useState([])
  const [activeCategory, setActiveCategory] = useState("Alle")
  const categories = ["Alle", ...new Set(blogs.map((blog) => blog.category))]
  const filteredBlogs = activeCategory === "Alle"
    ? blogs
    : blogs.filter((blog) => blog.category === activeCategory)

  useEffect(() => {
    fetchblogs().then((data) => {
      setBlogs(data.myblogs)
    })
  }, [])

  return (
    <div className={styles.page}>
      <Navbar categories={categories} setActiveCategory={setActiveCategory} activeCategory={activeCategory}/>
      <div className={styles.container}>
        {filteredBlogs.map((blog, index) => (
          // Første blogindlæg vises som featured kort
          index === 0 ? (
            <div key={blog.id} className={styles.featured}>
              <img src={blog.image.url}/>
              <div className={styles.featuredContent}>
                <p className={styles.meta}>{blog.category} · {new Date(blog.date).toLocaleDateString("da-DK")}</p>
                <h1>{blog.title}</h1>
                <p className={styles.excerpt}>{blog.content.text.slice(0, 200)}...</p>
                <p className={styles.author}>{blog.author} · <Link to={`/artikel/${blog.id}`}>Læs →</Link></p>
              </div>
            </div>
          ) : (
            // Resten af blogindlæggene vises som almindelige kort i et grid
            <div key={blog.id} className={styles.card}>
                <img src={blog.image.url}/>
                <p className={styles.meta}>{blog.category} · {new Date(blog.date).toLocaleDateString("da-DK")}</p>
                <h2>{blog.title}</h2>
                <p className={styles.excerpt}>{blog.content.text.slice(0, 120)}...</p>
                <p className={styles.author}>{blog.author} · <Link to={`/artikel/${blog.id}`}>Læs →</Link></p>
            </div>
          )
        ))}
      </div>
      <Footer/>
    </div>
  )
}

export default MainPage