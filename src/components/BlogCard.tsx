import React from 'react';
import { BlogPost } from '../utils/types';

interface BlogCardProps {
  post: BlogPost;
  onClick: ()=>Promise<void>;
}

const BlogCard: React.FC<BlogCardProps> = ({ post ,onClick}) => {
  return (
    <div onClick={onClick} className="blog-card" style={{backgroundColor:"#D3D3D3"}} >
      <h3>{post.title}</h3>
    </div>
  );
};

export default BlogCard;
