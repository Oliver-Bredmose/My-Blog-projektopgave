import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { fetchBlogById } from "../../Hygraph-fetch"
import Footer from "../../Components/Footer/Footer"
import styles from "./articlePage.module.scss"

function Artikel() {
  const [blog, setBlog] = useState(null)
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    fetchBlogById(id).then((data) => {
      setBlog(data.myblog)
    })
  },[])
  // square bracket gør sådan at dit data ikke bliver kladt en masse gange

  return (
    <div>
      <div className={styles.header}>
        <button className={styles.button} onClick={() => navigate(-1)}>← Tilbage</button>
        <span className={styles.logo}>Kroniken</span>
      </div>
      {blog && (
        <div>
          <img className={styles.image} src={blog.image.url}/>
          <p className={styles.meta}>{blog.category} · <span className={styles.date}>{new Date(blog.date).toLocaleDateString("da-DK")}</span></p>
          <div className={styles.textcontent}>
            <h1>{blog.title}</h1>
            <p className={styles.author}>{blog.author}</p>
            <p className={styles.content}>{blog.content.text}</p>
          </div>
        </div>
      )}
      <Footer/>
    </div>
  )
}

export default Artikel