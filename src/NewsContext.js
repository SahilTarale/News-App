import React, { createContext, useEffect, useState } from "react";
import axios from "axios";


export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const apiKey = "18967549894441e39e5036c77e6bb638";

  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const day = String(currentDate.getDate()).padStart(2, '0');
  const month = String(currentDate.getMonth() + 1).padStart(2, '0'); 

  const formattedDate = `${year}-${day}-${month}`;

  console.log(formattedDate,19);

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=tesla&from=${formattedDate}&sortBy=publishedAt&apiKey=${apiKey}`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);
console.log(data);
  return (
   
      <NewsContext.Provider value={{ data }}>
        {props.children}
      </NewsContext.Provider>
    
    
  );
};