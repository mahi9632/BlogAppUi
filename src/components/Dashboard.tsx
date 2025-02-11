import React, { useEffect, useState } from 'react';
import BlogCard from "./BlogCard";
import { fetchBlogPosts, getBlodDetails } from "../api/posts.api";
import { BlogPost } from "../utils/types"
import LoginImage from "../assests/images/blogLoginWallPaper.jpg"
import DetailedBlogCard from "./DetailedBlogCard";
import { CreatePost } from "./CreatePost";
import { ToastContainer } from "react-toastify";
import StaticBlogLoginPage from "./StaticBlogLoginPage";




export const DashBoard: React.FC = () => {


  const [isLoggedIn, setIsLoggedIn] = useState<Boolean>(false);
  const [posts, setPosts] = useState<BlogPost[] | undefined>(undefined);
  const [blogDetails, setBlogDetils] = useState<BlogPost | undefined>(undefined);
  const [loading, setLoading] = useState<Boolean>(false)

  useEffect(() => {
    // Check if there's a token in the URL when the app loads
    const checkToken = () => {

      const token = sessionStorage.getItem('token')
      if (token) {
        setIsLoggedIn(true)
      } else {
        const urlParams = new URLSearchParams(window.location.search);
        const newToken = urlParams.get('token');
        if (newToken) {
          sessionStorage.setItem('token', newToken) ;
          setIsLoggedIn(true)          
        }
      }
    };
    checkToken();
  }, []);


  const loadPosts = async () => {
    const posts = await fetchBlogPosts();    
    posts && setPosts(posts)
  }

  useEffect(() => {
    if (isLoggedIn) {            
      loadPosts()
    }
  }, [isLoggedIn, loading]);


  const handleCardClick = async (id: number) => {
    const details = await getBlodDetails(id)
    setBlogDetils(details)
  }

  const logOut =()=>{
    sessionStorage.clear();
    setIsLoggedIn(false)
  }


  return (<>
    {!isLoggedIn ? <StaticBlogLoginPage/> : (
      <div>
        <h1>Blog App</h1>
        <div style={{ justifySelf: "center", width: "700px" }}>
          <div className="posts" style={{ display: "flex", flexDirection: "column", borderRadius: "10px", marginTop: "2%", padding: "1%", }}>
            {!blogDetails ? posts?.map(post => (
              <BlogCard key={post.id} post={post} onClick={() => handleCardClick(post.id)} />
            )) :
              <div>
                <DetailedBlogCard blogDetails={blogDetails} />
                <button type="button" className="btn btn-primary" style={{marginTop:"2%"}} onClick={()=>setBlogDetils(undefined)}>Back to Posts List</button>
              </div>
            }
          </div>
        </div>
        <CreatePost setLoading={setLoading} />
        <div>
        <div
          onClick={() => logOut()}
          style={{
            backgroundColor: "#012169",
            padding: "0.5%",
            color: "white",
            position: "absolute",
            top: "1%",
            borderRadius: 5,
            right: "1%",
            cursor: "pointer",
          }}
        >
          <i className="bi bi-person-fill"> Logout</i>
        </div>
      </div>
      </div>
    )}
  </>)
}