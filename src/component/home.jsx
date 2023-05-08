import React from 'react'
import './TopNav.css'
import './home.css'
import MainBackImg from '../image/Free-Images-Wallpaper-HD-Background.jpg'
import { TopNav } from './TopNav'


export const Home = () => {
    return (

        <div className="home-main">

            <TopNav></TopNav>

            <div className="my-info-container">

                <div className="about">

                    <h1>About me</h1>


                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente architecto saepe dicta cum in? 
                        Blanditiis distinctio sequi nobis, odit facilis obcaecati assumenda minima deserunt nesciunt inventore optio.
                         Saepe quisquam temporibus perspiciatis earum vel dolorem, illum ullam maiores tempore impedit ut excepturi 
                         necessitatibus laboriosam delectus eveniet quia placeat facilis eligendi velit!

                    </p>
                </div>
                <div className="mypic">

                    <img src={ MainBackImg} className='pic-my'></img>
                </div> 




            </div>




        </div>

    )
}
