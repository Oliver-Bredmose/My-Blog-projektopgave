import { useState, useEffect } from "react"
import { fetchblogs } from "../Hygraph-fetch"
import { Link } from "react-router-dom"

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
    <div>
      {categories.map((cat) => (
        <button key={cat} onClick={() => setActiveCategory(cat)}>{cat}</button>
      ))}
      {filteredBlogs.map((blog) => (
        <div key={blog.id}>
          <p>{blog.category}</p>
          <h1>{blog.title}</h1>
          <img src={blog.image.url} width={300}/>
          <p>{new Date(blog.date).toLocaleDateString("da-DK")} - af {blog.author}</p>
          <p>{blog.content.text.slice(0, 100)}...</p>
          <Link to={`/artikel/${blog.id}`}>Læs mere</Link>
        </div>
      ))}
    </div>
  )
}

export default MainPage