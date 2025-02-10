import React from 'react';
import { BlogPost } from '../utils/types';

interface DetailedBlogCardProps {
  blogDetails:BlogPost
}

const DetailedBlogCard: React.FC<DetailedBlogCardProps> = ({ blogDetails}) => {
 const {title,content}  = blogDetails;
 
  return (
    <div className="blog-card" style={{backgroundColor:"#D3D3D3"}} >
      <h3>{title}</h3>
      <h3>{content}</h3>

    </div>
  );
};

export default DetailedBlogCard;
