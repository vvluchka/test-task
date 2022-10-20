import React, {useState, useEffect} from "react";
import axios from "axios";
import "../ShortList/DataFetching.css";

function DataFetching(){

    
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        axios.get("https://baconipsum.com/api/?type=meat-and-filler")
        .then(res => {
            console.log(res.data);
            setPosts(res.data);
           
            

        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    const addMore = () => {
            return axios.get(`https://baconipsum.com/api/?type=meat-and-filler`)
        .then(res => {
            console.log(res.data);
            setPosts(posts.concat(res.data));

        })
        .catch(err => {
            console.log(err);
        })
    }
    
    return(
        <div>
            <ul>
               {posts.map(post => <li className="list-item">{post.substring(0, post.indexOf('.'))}</li>)}
            </ul>
            <button onClick={addMore}className="button">Load more</button>     
        </div>
        
    )
}

export default DataFetching;