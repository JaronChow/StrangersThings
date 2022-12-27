// import { useState, useEffect } from "react";
// import { removePosts } from '../util/API';
// import { isLoggedIn } from '../util/API'
// import { useOutletContext } from "react-router-dom";

// const DeletePost = ({ _id,}) => {
//     const [token] = useOutletContext();
//     const [posts, setPosts] = useState([]);
//     const [userData, setUserData] = useState(isLoggedIn(token));

//     useEffect(() => {
//         const seePosts = async () =>{
//             const response = await isLoggedIn(token);
//             const data = response.data
//             console.log(data)
//             setUserData(data)
//         } 
//         seePosts()
//     },[token])

// // const deletePosts = async () => {
// //     const data = await removePosts(token,postId._id)
// //     console.log(data)
// //     if (data){
// //         const newPosts = posts.filter(post => post._id !== postId._id);
// //         setPosts(newPosts)
// //         console.log(newPosts)
// //     } 
// // }

//     // return (
//     //     <>
//     //     <button type="button" onClick={(event) => {
//     //         event.preventDefault(); 
//     //         deletePosts({_id})
//     //     }}>DELETE</button>
//     //     </>
//     // )
// }

// export default DeletePost