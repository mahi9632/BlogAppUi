import React from 'react';
import { BlogPost } from '../utils/types';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <div className="blog-card" style={{backgroundColor:"#D3D3D3"}} >
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
};

export default BlogCard;
