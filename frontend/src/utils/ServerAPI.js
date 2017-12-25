const api = process.env.REACT_APP_READABLE || 'http://localhost:3001'

let token = localStorage.token


if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)




const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Authorization': token
}



export const getCats = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories)

export const getAllPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())
    .then(data => data)

// GET /:category/posts
export const getPostsByCategory = (cat) => 
  fetch(`${api}/${cat}/posts`, { headers })
    .then(res => res.json())
    .then(data => data)


export const addPostToSer = (data) => {

   fetch(`${api}/posts`, { method: "POST", 
                          body: JSON.stringify(data),
                          headers })
    .then(res => res.json())
    .then(data => data)
}

    


/*

export const remove = (contact) =>
  fetch(`${api}/contacts/${contact.id}`, { method: 'DELETE', headers })
    .then(res => res.json())
    .then(data => data.contact)

export const create = (body) =>
  fetch(`${api}/contacts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(res => res.json())

*/