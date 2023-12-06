import React, { useState } from "react";
import DetailView from "./DetailView";
import { useNavigate } from "react-router-dom";

function NewsArticle({ data }) {
  const [art, setart]=useState({data});
  const navigate = useNavigate();
  const handleClick =() =>{
      // {art ? <DetailView data={data[i]}  ></DetailView> : "Loading"}
       navigate("/detailview", {
          state : {title : data.title,
            desc:data.description,
            auth: data.author,
            img : data.urlToImage,
            url : data.url,
            content : data.content,
            published: data.publishedAt,
            source : data.source.name

          }
      });
  }
  return (
    <div className="news">
      <h1 className="news__title" onClick={handleClick}>{data.title}</h1>
      <p className="news__desc">{data.description}</p>
      <span className="news__author">{data.author}</span> <br />
      <span className="news__published">{data.publishedAt}</span>
      <span className="news__source">{data.source.name}</span>
    </div>
  );
}

export default NewsArticle;