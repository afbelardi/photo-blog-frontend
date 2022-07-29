import React, {useState} from 'react'

export default function Modal(props) {


  return (
    <div className="modal-background">
        <img className="modal-img" src={props.data[0].url}></img>
    </div>
    
  )
}

