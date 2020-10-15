import React from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";


function Feed() {
        
    return (
        <div className="feed">
            {/* Header */}
            <div className="feed__header">
            <h2>Home</h2>
            </div>
            {/* TweetBox */}
            <TweetBox />

            {/* Post */}
            
            
            <Post displayName="Rajat"
            username= "RajatPrasad"
            verified = "true"
            text="Helllooooo everyone"
            avatar="https://image.freepik.com/free-vector/profile-icon-male-avatar-hipster-man-wear-headphones_48369-8728.jpg"
            image="https://media0.giphy.com/media/1iv69y6QxMS2SUmPvC/giphy.gif"
            />

            <Post displayName="Rajat"
            username= "RajatPrasad"
            verified = "true"
            text="Miss those days...."
            avatar="https://image.freepik.com/free-vector/profile-icon-male-avatar-hipster-man-wear-headphones_48369-8728.jpg"
            image="https://media1.giphy.com/media/Q7XVySfOWIUEKj1AAj/giphy.gif"
            /> 

            <Post displayName="Rajat"
            username= "RajatPrasad"
            verified = "true"
            text="Do what you love ♥"
            avatar="https://image.freepik.com/free-vector/profile-icon-male-avatar-hipster-man-wear-headphones_48369-8728.jpg"
            image="https://i.pinimg.com/originals/34/fb/b9/34fbb9aa7bfeb8df98412067d64c2029.gif"
            />
            
            <Post displayName="Rajat"
            username= "RajatPrasad"
            verified = "true"
            text="Magic is every where"
            avatar="https://image.freepik.com/free-vector/profile-icon-male-avatar-hipster-man-wear-headphones_48369-8728.jpg"
            image="https://www.makersmakingchange.com/wp-content/uploads/2018/01/Wizard-Clap-by-Markus-Magnusson.gif"
            /> 
            
            
        </div>
    )
}

export default Feed;
