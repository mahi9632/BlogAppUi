
import axios from "axios";

import { BlogPost } from '../utils/types';
const token = sessionStorage.getItem('token')

export const fetchBlogPosts = async () => {
 try {
  console.log("lg2");

  const response = await axios.get('http://localhost:8080/posts', {
   headers: {
     Authorization: `Bearer ${token}`
   }
 })

 console.log(response,"res");
  return response.data

 } catch (error) {
   console.error('Error fetching blog posts:', error);
 }
};