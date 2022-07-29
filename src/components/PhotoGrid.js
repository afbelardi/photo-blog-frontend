import React, {useEffect, useState} from 'react';




export default function PhotoGrid(props) {

 
  return (
    <div id="photo-grid-container" >
      {Object.keys(props.data).length
      ? props.data.map(photo => {
        return (
          <div className="photo-wrapper">
            <img key={photo.url} onClick={() => props.setModal(true)} className="photos" src={photo.url}></img>
            <h1 key={photo._id}>{photo.dateTaken}</h1>
            <h1 key={photo._id + photo.dateTaken}>{photo.placeTaken}</h1>
          </div>
        )
      })
    : ''
      }
    

    </div>
   
  )
}

