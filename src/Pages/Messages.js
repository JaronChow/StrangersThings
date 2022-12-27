import { useState } from "react"
import { sendMessages } from "../util/API";
import { useOutletContext } from "react-router-dom";

const Messages = ({id}) => {

   const [content, setContent] = useState('')
   const [sentMessage, setSentMessage] = useState('')
   const [token] = useOutletContext()

   async function submitForm(event){
    event.preventDefault();
    const message = {
        message:{
            content
        }
    }

    await sendMessages(message,id,token);
    setContent('');
    if(!content){
        setSentMessage('Enter a message')
    }else{
        setSentMessage('Message Sent')
    }
   }

    return (
        <>
        <form onSubmit={submitForm}>
            <input 
                type='text' 
                value={content} 
                onChange={(e) => {setContent(e.target.value)}}
                ></input>
            <button type='submit'>Send Message</button>
            <p>{sentMessage}</p>
        </form>
        </>
    )
}

export default Messages;

//only allow authenticated users to send messages/ need to imbed token into messages form