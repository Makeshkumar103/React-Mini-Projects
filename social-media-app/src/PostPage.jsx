import React from 'react'
import { useContext,useParams,Link } from 'react-router-dom' 
import { DataContext } from './context/DataContext'

const PostPage = () => {
  const { id } = useParams();
  const  { posts, handleDelete } = useContext(DataContext);
  const post = posts.find(post => (post.id).toString() === id);
  
  return (
    <main className='PostPage'>
      <article className='post'>
        {post && 
          <>
            <h2>{post.title}</h2>
            <p className='postDate'>{post.datetime}</p>
            <p className='postBody'>{post.body}</p>
            <button className='editbutton'>
              <Link to={`/edit/${post.id}`}>
                Edit Post
              </Link>
            </button>
            <button 
              className='deletebutton'
              onClick={() => handleDelete(post.id)}
            >
               Delete Post
            </button>
          </>
        }
        {!post &&
          <>
          <h2>Post Not Found</h2>
          <p>Well, that's disappointing</p>
          <p>
            <Link to='/'>Visit Our Homepage</Link>
          </p>
          </>
        }
      </article>
    </main>
  )
}

export default PostPage