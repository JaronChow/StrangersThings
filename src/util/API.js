const BASE_URL = 'https://strangers-things.herokuapp.com/api/2209-ftb-pt-web-pt';
 


export async function registerUser(user){
    const response = await fetch(`${BASE_URL}/users/register`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      const data = await response.json()
      return data
}

export async function loginUser(user){
  const response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    const data = await response.json()
    return data
}

export async function isLoggedIn(token){
  const response = await fetch(`${BASE_URL}/users/me`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  })
  const data = await response.json()
  return data
}

export async function getPosts(token){
  const response = await fetch(`${BASE_URL}/posts`,{
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  })
  const data = await response.json()
  return data
}

export async function submitPosts(token,post){
  console.log({token,post})
  const response = await fetch(`${BASE_URL}/posts`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(post)
  })  
  const data = await response.json()
  return data
}

// export async function editPosts(token,post,postId){
//   const response = await fetch(`${BASE_URL}/posts/${postId}`, {
//     method: "PATCH",
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${token}`
//     },
//     body: JSON.stringify(post)
//   })
//     const data = await response.json()
//     return data
// }

export async function removePosts(token,postId){
  const response = await fetch(`${BASE_URL}/posts/${postId}`, {
    method: "DELETE",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  })  
  const data = await response.json()
  return data
}


export async function sendMessages(message,id, token) {
  const response = await fetch (`${BASE_URL}/posts/${id}/messages`, {
    method:"POST",
    headers:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(message)
  })
  const data = await response.json()
  return data

}