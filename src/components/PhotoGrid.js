import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function PhotoGrid(props) {


  return (
    <div id="photo-grid-container">
      {Object.keys(props.data).length
      ? props.data.map(photo => {
        return (
          <img key={photo.url} className="photos" src={photo.url}></img>
        )
      })
    : ''
      }
    </div>
  )
}

