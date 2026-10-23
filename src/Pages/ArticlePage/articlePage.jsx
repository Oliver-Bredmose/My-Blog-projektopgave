import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { fetchBlogById } from "../../Hygraph-fetch"
import Footer from "../../Components/Footer/Footer"
import styles from "./articlePage.module.scss"

export function ArticlePage() {
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
            {/* content.text indeholder tegnene \n i stedet for rigtige linjeskift.
                content.html er det samme indhold, men med rigtige <p>-afsnit fra
                Hygraph. Indholdet kommer fra mit eget CMS, som kun jeg kan skrive i. */}
            <div
              className={styles.content}
              dangerouslySetInnerHTML={{ __html: blog.content.html }}
            />
          </div>
        </div>
      )}
      <Footer/>
    </div>
  )
}
