import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const Data = useLoaderData();
  /* const [Data, setData] = useState({})
    useEffect(()=>{
        fetch('https://api.github.com/users/sm-1512')
        .then(response => response.json())
        .then(Data => {
            console.log("Data",Data);
            setData(Data)
        })
    },[]) */

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github followers: {Data.followers}
      <img src={Data.avatar_url} alt="Git Profile Picture" width={300} />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/sm-1512");
  return response.json();
};
