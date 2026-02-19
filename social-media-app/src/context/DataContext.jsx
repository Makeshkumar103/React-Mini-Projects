import { createContext, useState, useEffect } from "react";
import format from 'date-fns/format'
import api from '../api/posts'
import useAxiosFetch from '../hooks/useAxiosFetch'
import useWindowSize from '../hooks/useWindowSize'
// import { DataProvider } from './context/DataContext'
import { useNavigate } from "react-router-dom";

const DataContext = createContext({})

export const DataProvider = ({ children }) => {
  const [posts, setPosts] = useState([])
  const [search, setSearch] =useState('')
  const [searchResult, setSearchResults] = useState([])
  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] =useState('')
  const [editTitle, setEditTitle] = useState('')
  const [editBody, setEditBody] = useState('')
  const navigate = useNavigate()
  const { width } = useWindowSize();

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     try {
  //       const response = await api.get('/posts');
  //       setPosts(response.data);
  //     } catch (err) {
  //       if (err.response) {
  //         // Not in the 200 response range
  //         console.log(err.response.data);
  //         console.log(err.response.status);
  //         console.log(err.response.headers);
  //       } else {
  //         console.log(`Error: ${err.message}`);
  //       }
  //     }
  //   }
  //   fetchPosts();
  // }, [])
  const { data, fetchError, isLoading } = useAxiosFetch('http://localhost:3500/posts');

  useEffect(() => {
    setPosts(data);
  }, [data])

  useEffect(() => {
    const filteredResults = posts.filter(post => 
      ((post.body).toLowerCase()).includes(search.toLowerCase()) ||
      ((post.title).toLowerCase()).includes(search.toLowerCase())
    )
    setSearchResults(filteredResults.reverse()); 
  }, [posts, search])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = {id, title:postTitle, datetime, body: postBody};
    try {
      const response = await api.post('/posts', newPost);
      // const allPosts = [...posts, newPost];
      const allPosts = [...posts, response.data];
      setPosts(allPosts);
      setPostTitle('');
      setPostBody('');
      navigate('/');
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  }

  const handleEdit = async (id) => {
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const updatedPost = {id, title: editTitle, datetime, body: editBody};
    try {
      const response = await api.put(`/posts/${id}`, updatedPost);
      setPosts(posts.map(post => post.id === id ? {...response.data} : post));
      setEditTitle('');
      setEditBody('');
      navigate('/');
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  }

  const handleDelete = async (id) => {
    try{
      await api.delete(`/posts/${id}`);
       // e.preventDefault();
      const postsList = posts.filter(post => post.id !== id)
      setPosts(postsList);
      navigate('/');
      } catch (err) {
        console.log(`Error: ${err.message}`);
      }
  }
    // const [posts, setPosts] = useState([]);
    // const [search, setSearch] = useState('');
    // const [searchResult, setSearchResult] = useState([]);
    // const [fetchError, setFetchError] = useState(null);
    // const [isLoading, setIsLoading] = useState(false);

    // useEffect(() => {
    //     const fetchPosts = async () => {
    //         setIsLoading(true);
    //         try {
    //             const response = await fetch('http://localhost:3500/posts');
    //             if (!response.ok) throw Error('Did not receive expected data');
    //             const listPosts = await response.json();
    //             setPosts(listPosts);
    //             setFetchError(null);
    //         }
    //         catch (err) {
    //             setFetchError(err.message);
    //             setPosts([]);
    //         }
    //         finally {
    //             setIsLoading(false);
    //         }
    //     }
    //     fetchPosts();
    // }, [])


    return (
        <DataContext.Provider value={{
            width,
            posts,
            search,
            setSearch,
            searchResult,
            fetchError,
            isLoading,
            postTitle,
            setPostTitle,
            postBody,
            setPostBody,
            editTitle,
            setEditTitle,
            editBody,
            setEditBody,
            handleSubmit,
            handleEdit,
            handleDelete
        }}>
            {children}
        </DataContext.Provider>
       
    )
}


export default DataContext