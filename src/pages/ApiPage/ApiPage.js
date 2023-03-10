import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const ApiPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/students/')
      .then(res => res.json())
      .then(postsData => {
        setPosts(postsData);
      })
  }, [])

  const newPostHandler = () => {
    fetch('http://localhost:3000/countries', {
      method: 'POST',
      body: JSON.stringify({
        title: 'Musu pirmas postas',
        body: 'Pirmo posto turinys',
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  const deletePostHandler = () => {
    fetch('http://localhost:3000/posts/5', {
      method: 'DELETE',
    });
  }

  const updatePostHandler = () => {
    fetch('http://localhost:3000/posts/4', {
      method: 'PATCH',
      body: JSON.stringify({
        id: 4,
        title: 'Atnaujintas pavadinimas',
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  return (
    <div>
      <button onClick={newPostHandler}>New Post</button>
      <button onClick={deletePostHandler}>Delete 1st post</button>
      <button onClick={updatePostHandler}>Update 6th post</button>
      {posts && posts.length > 0 && posts.map((post, index) => (
        <div key={index}>
          <Link to={'/api/posts/' + post.id}>
            {post.title}
          </Link>
        </div>
      ))}
    </div>
  )
}

export default ApiPage