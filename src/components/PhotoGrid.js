import React, {useEffect, useState} from 'react';




export default function PhotoGrid(props) {

 
  return (
    <div id={props.theme ? "photo-grid-dark-mode" : "photo-grid-container"} >
      {Object.keys(props.data).length
      ? props.data.map(photo => {
        return (
          <div className="photo-wrapper">
            <img key={photo.url} onClick={() => 
              {props.setModal(true);
               props.setSelectedPhoto(photo.url)
              }}
               className="photos" src={photo.url}></img>
            <h1 className={props.theme ? "image-font-dark-mode" : "image-font"} key={photo._id}>{photo.dateTaken}</h1>
            <h1 className={props.theme ? "image-font-dark-mode" : "image-font"} key={photo._id + photo.dateTaken}>{photo.placeTaken}</h1>
          </div>
        )
      })
    : ''
      }
    

    </div>
   
  )
}

