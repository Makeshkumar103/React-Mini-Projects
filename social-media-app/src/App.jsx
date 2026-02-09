import About from './About'
import Footer from './Footer'
import Header from './Header'
import Home from './Home'
import Missing from './Missing'
import Nav from './Nav'
import Newpost from './Newpost'
import PostPage from './PostPage'
import Post from './Post'
import { useEffect, useState } from 'react'
import format from 'date-fns/format'
// import { Route, Routes, Link } from 'react-router-dom'
// import PostLayout from './PostLayout'

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "My First Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Made a Video about Tesla Q1 results"
    },
    {
      id:2,
      title: "My Second Post",
      datetime: "July 02, 2021 11:17:36 AM",
      body: "Made a Video about Apple Q1 results"
    },
    {
      id:3,
      title: "My Third Post",
      datetime: "July 03, 2021 11:17:36 AM",
      body: "Made a Video about Amazon Q1 results"
    },
    {
      id:4,
      title: "My Fourth Post",
      datetime: "July 04, 2021 11:17:36 AM",
      body: "Made a Video about Google Q1 results"
    },
    {
      id:5,
      title: "My Fifth Post",
      datetime: "July 05, 2021 11:17:36 AM",
      body: "Made a Video about Microsoft Q1 results"
    }
  ])
  const [search, setSearch] =useState('')
  const [searchResult, setSearchResults] = useState([])
  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] =useState('')

  useEffect(() => {
    const filteredResults = posts.filter(post => 
      ((post.body).toLowerCase()).includes(search.toLowerCase()) ||
      ((post.title).toLowerCase()).includes(search.toLowerCase())
    )
    setSearchResults(filteredResults.reverse())
  }, [posts, search])

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = {id, title:postTitle, datetime, body: postBody};
    const allPosts = [...posts, newPost];
    setPosts(allPosts);
    setPostTitle('');
    setPostBody('');
    // navigate('/');
  }

  return (
      <div className="App">
       {/* <nav>
        <ul>
          <li><Link to= "/">Home</Link></li>
          <li><Link to= "/about">About</Link></li>
          <li><Link to= "/newpost">New Post</Link></li>
          <li><Link to= "/postpage">Post Page</Link></li>
        </ul>
       </nav>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/newpost" element={<Newpost />} />
        <Route path="/postpage/:id" element={<Post />} />
        <Route path="/postpage" element={<PostLayout />} >
          <Route index element={<PostPage />} />
          <Route path=':id' element={<Post />} />
          <Route path='newpost' element={<Newpost />} />
        </Route>
        <Route path='/postpage/newpost' element={<Newpost/>} />
        <Route path="*" element={<Missing />} />  
       </Routes> */}
        
        <Header title="Mk Social Media"/>
        <Nav 
        search={search}
        setSearch={setSearch}
        />
        <Home posts={searchResult}/>
        <Newpost  handleSubmit={handleSubmit} postTitle={postTitle} setPostTitle={setPostTitle} postBody={postBody} setPostBody={setPostBody}/>
        <PostPage />
        <About />
        <Missing />
        <Footer />
      </div>
  )
}

export default App
