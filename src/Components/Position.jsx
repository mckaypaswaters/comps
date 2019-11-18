import React from 'react'
import './position.css'

export default function Position(){
    return(
        <div className="position-parent">
            <div className="parent-div">This is the relative parent</div>
            <span className="relative">This is relative to the div above</span>
            <div className="absolute">This is absolute</div>
            <div className="fixed">This is fixed</div>
        </div>
    )
}