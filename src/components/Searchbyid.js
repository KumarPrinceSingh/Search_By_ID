import React, { useState, useEffect } from "react";
// simport "./App.css";
import axios from "axios";

function Searchbyid() {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [searchTitle, setSearchTitle] = useState("");
  
    useEffect(() => {
      const loadPosts = async () => {
        setLoading(true);
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts(response.data);
        setLoading(false);
      };
  
      loadPosts();
    }, []);
  
    return (
      <div className="App">
        <h3>Search By Transaction ID</h3>
        <input
          style={{ width: "30%", height: "25px" }}
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearchTitle(e.target.value)}
        />
        {loading ? (
          <h4>Loading ...</h4>
        ) : (
          posts
            .filter((value) => {
              if (searchTitle === "") {
                return null;
              } else if (
                value.title.toLowerCase().includes(searchTitle.toLowerCase())
              ) {
                return value;
              }
            })
            .map((item) => <h5 key={item.id}>{item.title}</h5>)
        )}
      </div>
    );
  }
export default Searchbyid