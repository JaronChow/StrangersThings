
import { useEffect, useState } from 'react';
import { useOutletContext } from "react-router-dom";
import { isLoggedIn } from '../util/API';
import jwt_decode from 'jwt-decode'

const Profile  = () => {
    const [messages, setMessages] = useState([]);
    const [token] = useOutletContext();
    const [username, setUsername] = useState('');//need to decipher token to decode username
    

    useEffect(() =>{
        const seeMessages = async(token) => {
            const response = await isLoggedIn(token);
            const data = response.data
            console.log(data.messages)
            setMessages(data.messages)
        }
        if(token){
            const decodedToken = jwt_decode(token)
            setUsername(decodedToken.username)
            seeMessages(token)
        }
    },[token])

    return (
        <>
        <h1> Welcome {username} </h1>
            <h2>Messages</h2>
                <ul>
                    {messages.map(({content,fromUser,_id}) => (
                        <>
                            <li key={_id}>
                                <h3>From user: {fromUser.username}</h3>
                                <ul>Message: {content}</ul>
                            </li>
                        </>
                    ))}
                </ul>
        </>
    )
}

export default Profile;