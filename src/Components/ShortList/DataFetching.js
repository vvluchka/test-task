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


    const hidePost = (index) => {
        const newPosts = [...posts];
        newPosts.splice(index, 1);
        setPosts(newPosts);
    }
    


    

    return(
        <div>
            <ul>
               {posts.map(post => <li onClick={hidePost}className="list-item">{post}</li>)}
            </ul>
            <button onClick={addMore}className="button">Load more</button>     
        </div>
        
    )
}

export default DataFetching;