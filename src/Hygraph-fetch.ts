import { gql, GraphQLClient } from "graphql-request"

const client = new GraphQLClient(import.meta.env.VITE_PUBLIC_URL)

export const getSingleBlog = gql`
  query{
  myblogs{
  id
    category
    title
    content{
      text 
      html
    }
    image{
      url
    }
    author  
  	date
  }

}
`
export async function fetchblogs() {
  console.log(import.meta.env.VITE_PUBLIC_URL)
  const data = await client.request(getSingleBlog)
  return data
}

export const GetBlogById = gql`
  query GetBlogById($id: ID!) {
    myblog(where: { id: $id }) {
      id
      title
      category
      author
      date
      content {
        text
        html
      }
      image {
        url
      }
    }
  }
`

export async function fetchBlogById(id) {
  const data = await client.request(GetBlogById, { id })
  return data
}