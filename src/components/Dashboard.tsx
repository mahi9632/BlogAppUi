import React, { useEffect, useState } from 'react';
import BlogCard from "./BlogCard";
import { fetchBlogPosts } from "../api/posts.api";
import {BlogPost} from "../utils/types"
import LoginImage from "../assests/images/blogLoginWallPaper.jpg"
import { handleLogin } from "../api/login.api";




export const DashBoard : React.FC = () => {


 const [isLoggedIn,setIsLoggedIn] = useState<Boolean>(false)
 const [posts,setPosts] = useState<BlogPost[]|undefined>(undefined)

 useEffect(() => {
  // Check if there's a token in the URL when the app loads
  const checkToken = () => {
    const urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams);

    const token = urlParams.get('token');
    if (token) {
      sessionStorage.setItem('token',token);
      setIsLoggedIn(true)

    }
  };
  checkToken();
}, []);






const  loadPosts = async() =>{
 console.log("lg1");
 
 const posts = await fetchBlogPosts();
 setPosts(posts)
}

useEffect(() => {
 if (isLoggedIn) {
  loadPosts()
 }
}, [isLoggedIn]);




 return(<>
 <h1>Blog App</h1>
      {!isLoggedIn ? (
        <div style={{ flex: 1, justifyItems: "center" }}>
          <div style={{ backgroundColor: "#D3D3D3", borderRadius: "10px", marginTop: "2%", padding: "1%", width: "500px" }}>
            <img src={LoginImage} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <button className="login-with-google-btn" onClick={handleLogin} style={{marginTop:"1%"}}>Login with Google</button>
          </div>
        </div>
      ) : (
        <div>
          <h2>Welcome to the Blog!</h2>
          <div style={{justifySelf:"center", width: "700px"}}>
          <div className="posts" style={{ display:"flex", flexDirection:"column", borderRadius: "10px", marginTop: "2%", padding: "1%", }}>
            {posts?.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
          </div>
        </div>
      )}
      </>)
}