import { useState, useEffect } from "react";
import axios from "axios";

const UseEffectAPI = () => {
  const [post, setPost] = useState([]);
  const a = " PS ";

//     const [count, setCount] = useState(0);

//     function inc() {
//           setCount(count + 1)
//     }
//     function dec() {
//         setCount(count - 1)
//   }
//     // return (
    
//     <div>
//        <p> {count} </p>

//        <button  onClick={inc}> Inc </button>
//        <button onClick={dec}> Dec </button>
//     </div>

    //)
  const [album, setAlbum] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/")
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/albums/")
      .then((res) => {
        setAlbum(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <h1>This page is meant for useEffect with API</h1>
      <h2>The contents inside my JSON post are:</h2>

      {/* Posts API */}
      <h1>Posts</h1>
      <ul>
        {post.map((e) => (
          <li key={e.id}>{e.title}</li>
        ))}
      </ul>

      {/* Albums API */}
      <h1>Albums</h1>
      <ul>
        {album.map((e) => (
          <li key={e.id}>{e.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseEffectAPI;
