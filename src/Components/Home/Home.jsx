import React, { useState } from 'react'
import './Home.css'

import home_image from '../Assets/home_image.png'
export const Home = () => {

    return (
        <div>
            <div className='container'>
                <div className='text'>
                    <div className='header'>Dive Deep into the Web of Knowledge.</div>
                    <div className='description'>In a world overloaded with information, find what truly connects.</div>
                    <div className='query_button'><button>Start your journey</button></div>
                </div>
                <div className='image'><img src={home_image} alt="" className="" /></div>
            </div>
        </div>
    )
}