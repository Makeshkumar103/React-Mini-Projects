import About from './About'
import Footer from './Footer'
import Header from './Header'
import Home from './Home'
import Missing from './Missing'
import Nav from './Nav'
import Newpost from './Newpost'
import PostPage from './PostPage'








function App() {

  return (
      <div className="App">
        <Header />
        <Nav />
        <Home />
        <Newpost />
        <PostPage />
        <About />
        <Missing />
        <Footer />
      </div>
  )
}

export default App
