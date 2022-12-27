import { useState, useEffect } from 'react';
import { useOutletContext} from "react-router-dom";
import CreatePosts from './CreatePosts';
import { getPosts } from '../util/API';
import Messages from './Messages';
import { removePosts } from '../util/API';

//if it comes from API, store it in State
/*
C - Create
R - Read
U - Update
D - Delete/Destroy
*/
const Posts  = () => {
    const [posts, setPosts] = useState([]);
    const [token] = useOutletContext();
    

    useEffect(() =>{
        const seePosts = async () =>{
            const response = await getPosts(token);
            const data = response.data
            setPosts(data.posts)
          }
          seePosts()
    },[token])
         
    const deletePosts = async (postId) => {
        const data = await removePosts(token,postId._id)
        console.log(data,postId._id)
        if (data){
            const newPosts = posts.filter(post => post._id !== postId._id);
            setPosts(newPosts)
        }
    }    
        
    return(
        <>
        <h1> Posts </h1>
        {token && <CreatePosts posts={posts} setPosts={setPosts} token={token} />}
        <ul>
            {posts.map(({title, description, price, location, willDeliver,messages,_id,isAuthor, author}) => (
                <>
                
                <li key={_id}>
                    <h2>{title}</h2>
                    <h3>Description: {description}</h3>
                    <ul>Price: {price}</ul>
                    <ul>Location: {location}</ul>
                    <ul>Delivery: {willDeliver}</ul>
                    <ul>Author: {author.username} </ul>
                    <ul>Messages: {messages} </ul>

                    {!isAuthor && token && <Messages id={_id} isAuthor={isAuthor} posts={posts} setPosts={setPosts} />}
                    {
                    isAuthor && token &&
                    <button 
                    type="button" 
                    onClick={(event) => {
                        event.preventDefault(); 
                        deletePosts({_id})
                        }}>DELETE</button>
                    }
                </li>
                </>
            ))}
        </ul>
        </>
    )

}

export default Posts;
