import React from 'react'

const CarouselContent = ({id, url, alt}) => {
    console.log(url);
  return (
    <div>
        <img src={url} alt={alt} />
        
    </div>
  )
}

export default CarouselContent