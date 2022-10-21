import React, {useState, useEffect} from "react";
import axios from "axios";
import { Outlet, useLocation, Link } from 'react-router-dom'

import "../ShortList/DataFetching.css";

function DataFetching() {
    const [posts, setPosts] = useState([]);
    
    const location = useLocation()
    const isArticle = location.pathname === '/article'

    const loadData = () => {
        return axios.get("https://baconipsum.com/api/?type=meat-and-filler")
    }

    useEffect(() => {
        loadData()
            .then(res => {
                console.log(res.data);
                setPosts(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    const addMore = () => {
        return loadData()
            .then(res => {
                console.log(res.data);
                setPosts((prevPosts) => [...prevPosts, ...res.data]);
            })
            .catch(err => {
                console.log(err);
            })
    }

    if (isArticle) {
        return <Outlet />
    }

    return (
        <div>
            <ul>
               {posts.map(post => 
                    <li className="list-item">
                        <Link className="link-to-item" style={{ color: 'black', textDecoration: 'none'}} to="/article" state={post}>
                            {post.substring(0, post.indexOf('.'))}
                        </Link>
                    </li>
                )}
            </ul>
            <button onClick={addMore}className="button">Load more</button>     
        </div>
    )
}

export default DataFetching;