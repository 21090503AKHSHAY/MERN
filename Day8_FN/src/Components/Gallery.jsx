//props

import React from 'react'

{/*we can use different names for props*/}
const Gallery = (props) => {
  return (
    <div>
        {/*if there is no value it will not show any error */}
      <h1>This is a {props.page} page</h1>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBhrADCyzA-OKMd5aLsPpHGmvJvWFQxAmRYA&s" alt="meme bro" />
      <p>Image is {props.image}</p>
    </div>
  )
}

export default Gallery