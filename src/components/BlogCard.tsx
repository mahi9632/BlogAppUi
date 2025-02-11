import React from 'react';
import { BlogPost } from '../utils/types';

interface BlogCardProps {
  post: BlogPost;
  onClick: ()=>Promise<void>;
}

const BlogCard: React.FC<BlogCardProps> = ({ post ,onClick}) => {
  return (
    <div onClick={onClick} style={{
      opacity: 0.9, 
      backgroundColor:"#D3D3D3",
      borderRadius:3,
      padding:"2%"
     }}>
      <h3>{post.title}</h3>
    </div>
  );
};

export default BlogCard;
