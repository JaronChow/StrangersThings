import { useState, useEffect } from 'react';
import { useOutletContext } from "react-router-dom";
import { submitPosts } from '../util/API';


//if it comes from API, store it in State


const CreatePosts  = ({posts, setPosts}) => {


    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [token] = useOutletContext();

    async function submitForm (event) {
        event.preventDefault();
        const post = {
            post: {
                title,
                description,
                price,
            }
        }
    
        const response = await submitPosts(token,post)
        console.log(response)
        setTitle('')
        setDescription('')
        setPrice('')

        if(!title || !description || !price){
            setErrorMessage('Please enter all fields')
        } else {
            setErrorMessage('')
            setPosts([...posts, response.data.post])

        }
    }

    return(
        <>
        <h3> Create a Post</h3> 
        <form onSubmit={submitForm}>
            <input 
            type='text' 
            placeholder='Title'
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            />
            <input 
            type='text' 
            placeholder='Description'
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            />
            <input 
            type='text' 
            placeholder='Price'
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            />
            <button type="submit" onChange={event => (event.target.value)}>Post</button>
            <p>{errorMessage}</p>
        </form>
        </>
    )

}

export default CreatePosts;
