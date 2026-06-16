import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { fetchBlogById } from "../Hygraph-fetch"

function Artikel() {
  const [blog, setBlog] = useState(null)
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    fetchBlogById(id).then((data) => {
        console.log(data.myblog);
        
      setBlog(data.myblog)
    })
  }, [])

  return (
    <div>
      <button onClick={() => navigate(-1)}>Tilbage</button>
      {blog && (
        <div>
          <p>{blog.category}</p>
          <h1>{blog.title}</h1>
          <img src={blog.image.url} width={300}/>
          <p>{new Date(blog.date).toLocaleDateString("da-DK")} - af {blog.author}</p>
          <p>{blog.content.text}</p>
        </div>
      )}
    </div>
  )
}

export default Artikel