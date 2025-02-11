import React from 'react';

import { handleLogin } from "../api/login.api";

const StaticBlogLoginPage: React.FC = () => {
 const blogPostData = {
  title: '5 Essential Exercises for a Full-Body Workout',
  content: `When it comes to fitness, a full-body workout is one of the best ways to improve your overall strength, stamina, and endurance. Below are the five essential exercises that target multiple muscle groups and help you build a strong, toned body:

    1. **Squats**: A great exercise to strengthen your legs and core.
    2. **Push-ups**: Excellent for building upper body strength.
    3. **Deadlifts**: Strengthens the back, core, and legs.
    4. **Pull-ups**: A powerful bodyweight exercise for building arm and back muscles.
    5. **Planks**: Core-strengthening exercise that improves stability.

    These exercises, when done regularly and with proper form, can significantly improve your fitness level.`,
  author: 'John Doe',
  date: 'February 10, 2025',
 };

 // Inline styles
 const appStyles = {
  backgroundColor:'#2c6678',
  // backgroundImage:  `url('/images/sampleBlogImage.jpg')`,  // Path to image in the public folder
  backgroundSize: 'cover',
  flex: 1,
  backgroundPosition: 'center center',
  backgroundAttachment: 'fixed',
  color: 'white', // Text color
  height: '100vh', // Full viewport height
  display: 'flex',
  justifyContent: 'center', // Centering content
  padding: '0',
  margin: '0',
 };




 return (
  <div style={appStyles}>
   <main>
    <div style={{
     borderRadius: 10,
     width: '37%',
     position: 'absolute',
     left: "33%", top: "17%",
    }} >
     <div style={{
       backgroundColor: "#36454F",
      opacity: 0.9,
     }} className="blog-card">
      <h2>{blogPostData.title}</h2>
      <div style={{ textAlign: "justify", marginTop: "4%" }}>{blogPostData.content}</div>
     </div>
     <div style={{color:"#36454F"}}>
      Read More Blogs by Logging In ...
      <div style={{ flex: 1, justifyItems: "center" }}>
          <button className="login-with-google-btn" onClick={handleLogin} style={{ marginTop: "7%" }}>Login with Google</button>
      </div>
     </div>
    </div>

   </main >
  </div >
 );
};

export default StaticBlogLoginPage;
