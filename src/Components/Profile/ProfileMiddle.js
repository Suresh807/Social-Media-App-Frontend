import Info from './ProfileComponents/InfoProfile/Info'
import UserHome from '../UserHome/UserHome'

import Profile from "../../assets/profile.jpg"
import img1 from "../../assets/User-post/img1.jpg"
import img2 from "../../assets/User-post/img2.jpg"
import img3 from "../../assets/User-post/img3.jpg"
import { useEffect, useState } from 'react'
import "../Profile/ProfileMiddle.css"

import moment from 'moment'
import ProfileInputPost from './ProfileComponents/ProfileInputPost'

const ProfileMiddle = ({following,
                        search,
                        images,
                        setImages,
                        profileImg,
                        setProfileImg,
                        name,
                        setName,
                        userName,
                        setUserName,
                        modelDetails,
                        setModelDetails}) => {

  const [userPostData ,setUserPostData] =useState(
    [
      {
        id:1,
        username:"Suresh Kumar K",
        profilepicture:Profile,
        img:img1,
        datetime:moment("20230401", "YYYYMMDD").fromNow(),
        body:"First Post,The highlight of Lesa Lesa is its enchanting music by Harris Jayaraj, with songs like Mudhal Mudhalai and Lesa Lesa becoming timeless classics. Every melody blends seamlessly into the story, amplifying the emotions of the characters.",
        like: 22,
        comment:12
    },
    {
        id:2,
        username:"Suresh Kumar K",
        profilepicture:Profile,
        img:img2,
        datetime:moment("20230525", "YYYYMMDD").fromNow(),
        body:"Second Post,Ambikapathy isn’t just about love; it also explores themes of selflessness and destiny. The intense moments, coupled with tender emotions, make the film a poignant experience.",
        like: 84,
        comment:30
    },
    {
        id:3,
        username:"Suresh Kumar K",
        profilepicture:Profile,
        img:img3,
        datetime:moment.utc("2023-08-13 12:45:00").local().startOf('seconds').fromNow(),
        body:"Lovable Post,Siddharth’s natural charm and Amala Paul's sincerity shine through, making the chemistry between the two feel real and genuine. The film also tackles the concept of relationships in the age of technology and how social media influences our interactions.",
        like: 340,
        comment:76
    }
    ]
  )
  const [body,setBody] =useState("")
  const [importFile,setImportFile] =useState("")
  
 

  const handleSubmit =(e)=>{
    e.preventDefault()

  
    const id =userPostData.length ? userPostData[userPostData.length -1].id +1 :1
    const username="Suresh Kumar K"
    const profilepicture=Profile
    const datetime=moment.utc(new Date(), 'yyyy/MM/dd kk:mm:ss').local().startOf('seconds').fromNow()
    const img= images ? {img:URL.createObjectURL(images)} : null

   
    const obj ={id:id,
               profilepicture:profilepicture,
               username:username,
               datetime:datetime,
               img:img && (img.img),
               body:body,
               like:0,
               comment:0
              }

    const insert =[...userPostData,obj]
    setUserPostData(insert)
    setBody("")
    setImages(null)
  }


  

  const [searchResults,setSearchResults] =useState("")
    
    useEffect(()=>{
      const searchData = userPostData.filter((val)=>(
        (val.body.toLowerCase().includes(search.toLowerCase()))
       ||
       (val.username.toLowerCase().includes(search.toLowerCase()))
       ))
       setSearchResults(searchData)
       
    },[userPostData,search])

   

    

  return (
    <div className='profileMiddle'>
        <Info 
        modelDetails ={modelDetails}
        setModelDetails={setModelDetails}
        profileImg={profileImg}
        setProfileImg={setProfileImg}
        userPostData={userPostData}
        following={following}
        name={name}
        setName={setName}
        userName={userName}
        setUserName={setUserName}
        />
        
        <ProfileInputPost
        modelDetails={modelDetails}
        profileImg={profileImg}
        handleSubmit={handleSubmit}
        body ={body}
        setBody ={setBody}
        importFile ={importFile}
        setImportFile ={setImportFile}
        images={images}
        setImages={setImages}
        />
        
        <UserHome 
        modelDetails={modelDetails}
        profileImg={profileImg}
        setUserPostData={setUserPostData}
        userPostData={searchResults}
        images={images}
        />
    </div>
  )
}

export default ProfileMiddle