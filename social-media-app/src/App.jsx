import About from './About'
import Footer from './Footer'
import Header from './Header'
import Home from './Home'
import Missing from './Missing'
import Nav from './Nav'
import Newpost from './Newpost'
import PostPage from './PostPage'
import Post from './Post'
import EditPost from './EditPost'
import { Route, Routes, Link} from 'react-router-dom'
import { DataProvider } from './context/DataContext'
// import PostLayout from './PostLayout'
function App() {
 
  return (
      <div className="App">
        <DataProvider>

       
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
        
        <Header title="Mk Social Media" />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="post" >
            <Route index element={ <Newpost /> } 
            />
            <Route path=":id" element={<PostPage />} />
          </Route>
          <Route path="/edit/:id" element={<EditPost />} />
          {/* <Route path="postpage" element={<PostPage /> } /> */}
          <Route path="about" element={<About /> } />
          <Route path="*" element={<Missing /> } />
        </Routes>
        <Footer />
       </DataProvider>
      </div>
  )
}

export default App
