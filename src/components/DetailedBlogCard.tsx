import React from 'react';
import { BlogPost } from '../utils/types';

interface DetailedBlogCardProps {
  blogDetails:BlogPost
}

const DetailedBlogCard: React.FC<DetailedBlogCardProps> = ({ blogDetails}) => {
 const {title,content}  = blogDetails;
 
  return (
    <div  style={{backgroundColor:"#D3D3D3", borderRadius:3,padding:"2%"}} >
      <div style={{display:"flex",padding:"2%", fontWeight:'bolder'}}>
            {title}
      </div>
      <div style={{ textAlign: "justify",paddingLeft:"3%" }}>{content}</div>

    </div>
  );
};

export default DetailedBlogCard;
