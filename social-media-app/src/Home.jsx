import React from 'react'
import Feed from './Feed'
import { useContext } from 'react'
import { DataContext } from './context/DataContext'

const Home = () => {
  const {searchResults, fetchError, isLoading} = useContext(DataContext);
  return (
    // <main className='Home'>
    //   {posts.length ? (
    //   <Feed posts={posts}/>
    //   ) : (
    //     <p style={{marginTop: "2rem" }}>
    //       No posts to display.
    //     </p>
    //   )}
    // </main>
    <main className='Home'>
      {isLoading && <p style={{marginTop: "2rem" }}>Loading posts...</p>}
      {!isLoading && fetchError && <p style={{marginTop: "2rem", color: "red"}}>{`Error: ${fetchError}`}</p>}
      {!isLoading && !fetchError && (searchResults.length ? <Feed posts={searchResults} /> : <p style={{marginTop: "2rem" }}>
          No posts to display.  
        </p> )}
    </main>
  )
}

export default Home