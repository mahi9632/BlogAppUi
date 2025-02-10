
import axios from "axios";

import { FormData } from '../utils/types';

export const fetchBlogPosts = async () => {
 try {
  const token = sessionStorage.getItem('token')
  const response = await axios.get('http://localhost:8080/posts', {
   headers: {
     Authorization: `Bearer ${token}`
   }
 })
  return response.data
 } catch (error) {
   console.error('Error fetching blog posts:', error);
 }
};


export const getBlodDetails = async (id:number) => {
  try {
    const token = sessionStorage.getItem('token') 
    const response = await axios.get(`http://localhost:8080/posts/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
 
   return response.data[0]
 
  } catch (error) {
    console.error('Error fetching blog posts:', error);
  }
 };


 export const createPost = async(formData: FormData)=>{
  try {
    const token = sessionStorage.getItem('token')
    const response = await fetch(`http://localhost:8080/posts`, {
      method: "POST",
      headers: { "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
       },
      body: JSON.stringify(formData),
    });
    return response
  } catch (error) {
    console.error("Request failed", error);
  }
 }