// import { useState } from 'react';
// import { useOutletContext } from "react-router-dom";
// import { editPosts } from '../util/API';

// //if it comes from API, store it in State
// const ChangePosts  = ({posts, setPosts, postId, setPostId}) => {
//     const [title, setTitle] = useState('');
//     const [description, setDescription] = useState('');
//     const [price, setPrice] = useState('');
//     const [location, setLocation] = useState([]);

//     const [token] = useOutletContext();
//     async function submitForm (event) {
//         event.preventDefault();
//         const post = {
//             post: {
//                 title,
//                 description,
//                 price
//             }
//         }
//         const response = await editPosts(token,post,postId)
//         const data = response.data.post
//         const id = response.data.post._id
//         console.log(data)
//         console.log(id)

//         // if(data && id){
//         //     const newPosts = posts.map(post => {
//         //         if (id === postId){
//         //             return data;
//         //         }else {
//         //             return post
//         //         }
//         //     });
//         //     setPosts(newPosts);
  
//         // }
//             setTitle('');
//             setDescription('');
//             setPrice('');
//             setPostId(null)
//     }

//     return(
//         <>
//         <h3>Update a Post</h3> 
//         <form onSubmit={submitForm}>
//             <input 
//             type='text' 
//             placeholder='Title'
//             value={title}
//             onChange={(event) => setTitle(event.target.value)}
//             />
//             <input 
//             type='text' 
//             placeholder='Description'
//             value={description}
//             onChange={(event) => setDescription(event.target.value)}
//             />
//             <input 
//             type='text' 
//             placeholder='Price'
//             value={price}
//             onChange={(event) => setPrice(event.target.value)}
//             />
//             <button type="submit" onChange={event => (event.target.value)}>Edit</button>
//         </form>
//         </>
//     )

// }

// export default ChangePosts;
