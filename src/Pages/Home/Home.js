import {  useState } from 'react'
import Profile from "../../assets/profile.jpg"
import img1 from "../../assets/Post Images/img1.jpg"
import img2 from "../../assets/Post Images/img2.jpg"
import img3 from "../../assets/Post Images/img3.jpg"
import img4 from "../../assets/Post Images/img4.jpg"
import img5 from "../../assets/Post Images/img5.jpg"
import img6 from "../../assets/Post Images/img6.jpg"


import DPimg1 from "../../assets/DP/img1.jpg"
import DPimg2 from "../../assets/DP/img2.jpg"
import DPimg3 from "../../assets/DP/img3.jpg"
import DPimg4 from "../../assets/DP/img4.jpg"
import DPimg5 from "../../assets/DP/img5.jpg"
import DPimg6 from "../../assets/DP/img6.jpg"

import cover from "../../assets/Info-Dp/img-3.jpg"

import Cover1 from "../../assets/Friends-Cover/cover-1.jpg"
import Cover2 from "../../assets/Friends-Cover/cover-2.jpg"
import Cover3 from "../../assets/Friends-Cover/cover-3.jpg"
import Cover5 from "../../assets/Friends-Cover/cover-5.jpg"
import Cover7 from "../../assets/Friends-Cover/cover-7.jpg"
import Cover8 from "../../assets/Friends-Cover/cover-8.jpg"
import Cover9 from "../../assets/Friends-Cover/cover-9.jpg"

import Uimg1 from "../../assets/User-post/img1.jpg"
import Uimg2 from "../../assets/User-post/img2.jpg"
import Uimg3 from "../../assets/User-post/img3.jpg"


import "../Home/Home.css"

import Left from "../../Components/LeftSide/Left"
import Middle from "../../Components/MiddleSide/Middle"
import Right from '../../Components/RightSide/Right'
import Nav from '../../Components/Navigation/Nav'
import moment from 'moment/moment'

const Home = ({setFriendsProfile}) => {
  
    const [posts,setPosts] = useState(
        [
          {
            id:1,
            username:"Srihari P",
            profilepicture:DPimg1,
            img:img1,
            datetime:moment("20241129", "YYYYMMDD").fromNow(),
            body:"Some movies are not just films; they are emotions etched in our hearts forever. Tamil movie 3, directed by Aishwarya R. Dhanush and starring Dhanush and Shruti Haasan, is one such masterpiece that takes us on a rollercoaster of love, happiness, and heart-wrenching pain.From the magical first meeting of Ram and Janani in their school days to the blossoming of their deep love into marriage, 3 beautifully captures every phase of their relationship. It is a story that makes you smile, laugh, and cry sometimes all at once. Dhanushs breathtaking performance as Ram, a character battling his inner demons, and Shruti Haasans emotional portrayal of Jananis undying love and resilience, are nothing short of brilliant.The movie gave us Why This Kolaveri Di, a song that became a global sensation, but beyond the beats, 3 is about raw human emotions. The love, misunderstandings, sacrifices, and struggles between Ram and Janani remind us that every relationship is beautiful but also fragile.Some love stories are meant to stay incomplete, yet they live forever in our hearts.",
            like: 44,
            comment:3,
            unFilledLike:true,
            coverpicture:Cover1,
            userid:"@srihari",
            ModelCountryName:"India",
            ModelJobName:"Full-Stack Web Developer",
            ModelJoinedDate:"Joined in 2024-11-28",
            followers:1478
          },
          {
            id:2,
            username:"Sudhakar S",
            profilepicture:DPimg2,
            img:img2,
            datetime:moment("20241128", "YYYYMMDD").fromNow(),
            body:"Vaaranam Aayiram is not just a film; it is a journey through life, love, and resilience. Directed by Gautham Vasudev Menon, this timeless classic starring Suriya showcases a father-son bond that touches the heart and a love story that feels deeply personal.",
            like: 84,
            comment:3,
            coverpicture:Cover2,
            userid:"@sudhakar",
            ModelCountryName:"India",
            ModelJobName:"AWS",
            ModelJoinedDate:"Joined in 2024-11-27",
            followers:1730
          },
          {
            id:3,
            username:"Siva Ganeshan",
            profilepicture:DPimg3,
            img:img3,
            datetime:moment("20241128", "YYYYMMDD").fromNow(),
            body:"Azhagu is a beautiful Tamil film that delicately weaves emotions, relationships, and the essence of life into a story that resonates with every heart. Directed by Thangarbachan, this gem is a poignant tale of love, family, and human values.",
            like: 340,
            comment:76,
            coverpicture:Cover3,
            userid:"@siva",
            ModelCountryName:"India",
            ModelJobName:"Python Developer",
            ModelJoinedDate:"Joined in 2024-11-28",
            followers:426
          },
          {
            id:4,
            username:"Suresh Kumar Kannan",
            profilepicture:Profile,
            img:Uimg1,
            datetime:moment("20241128", "YYYYMMDD").fromNow(),
            body:"Lesa Lesa is a breezy yet emotional Tamil movie that beautifully captures the essence of friendship, love, and life’s bittersweet moments. Directed by Priyadarshan, this film stands out for its refreshing narrative and vibrant visuals.",
            like: 22,
            comment:3,
            coverpicture:cover,
            userid:"@suresh",
            ModelCountryName:"India",
            ModelJobName:"Web Developer",
            ModelJoinedDate:"Joined in 2024-11-28",
            followers:5000
          },
          {
            id:5,
            username:"Venkat S",
            profilepicture:DPimg4,
            img:img4,
            datetime:moment("20241128", "YYYYMMDD").fromNow(),
            body:"Ambikapathy is a soul-stirring Tamil movie that portrays a love story as pure as poetry and as intense as a storm. Directed by Anand L Rai and starring Dhanush and Sonam Kapoor, the film is a beautiful tale of love that blossoms amidst the cultural richness and challenges of life.",
            like: 44,
            comment:3,
            coverpicture:Cover5,
            userid:"@venkat",
            ModelCountryName:"India",
            ModelJobName:"Frontend Developer",
            ModelJoinedDate:"Joined in 2023-11-28",
            followers:3005
          },
          {
            id:6,
            username:"Suresh Kumar K",
            profilepicture:Profile,
            img:Uimg2,
            datetime:moment("20241128", "YYYYMMDD").fromNow(),
            body:"Ambikapathy isn’t just about love; it also explores themes of selflessness and destiny. The intense moments, coupled with tender emotions, make the film a poignant experience.The movie’s music by A R Rahman is nothing short of magical, with songs like Moongil Thottam creating a serene and romantic",
            like: 84,
            comment:3,
            coverpicture:cover,
            userid:"@suresh12",
            ModelCountryName:"India",
            ModelJobName:"Web Developer",
            ModelJoinedDate:"Joined in 2024-11-28",
            followers:5000
          },
          {
            id:7,
            username:"James Roobin",
            profilepicture:DPimg5,
            img:img5,
            datetime:moment("20241128", "YYYYMMDD").fromNow(),
            body:"Ambikapathy is a celebration of love in its rawest form. What did you love the most about this timeless romance? Share your thoughts and let’s relive the magic of Kundan and Zoya.",
            like: 30,
            comment:3,
            coverpicture:Cover7,
            userid:"@james",
            ModelCountryName:"India",
            ModelJobName:"Full Stack Web Developer",
            ModelJoinedDate:"Joined in 2024-11-28",
            followers:626
          },
          {
            id:8,
            username:"Suresh Kumar K",
            profilepicture:Profile,
            img:Uimg3,
            datetime:moment("20241128", "YYYYMMDD").fromNow(),
            body:"Kadhalil Sodhappuvadhu Yeppadi is a refreshing and relatable love story that brings out the complexities of modern relationships with a blend of humor and emotion. Directed by Balaji Mohan, this film, starring Siddharth and Amala Paul, delves into the intricacies of love in the journey of a relationship.",
            like: 340,
            comment:3,
            coverpicture:Cover8,
            userid:"@suresh",
            ModelCountryName:"India",
            ModelJobName:"Web Developer",
            ModelJoinedDate:"Joined in 2024-11-28",
            followers:5000

          },
          {
            id:9,
            username:"Harish Raja K",
            profilepicture:DPimg6,
            img:img6,
            datetime:moment("20241128", "YYYYMMDD").fromNow(),
            body:"The movie revolves around the life of a man who, while navigating the complexities of his personal and professional life, comes to realize the importance of love, family, and understanding. Through its relatable characters, Indru Nethu Nalai brings importance of cherishing every moment we have.",
            like: 844,
            comment:3,
            coverpicture:Cover9,
            userid:"@harish",
            ModelCountryName:"India",
            ModelJobName:"Back End Developer in Microsoft",
            ModelJoinedDate:"Joined in 2024-11-28",
            followers:3599
           }
        ]
      )

      const [body,setBody] =useState("")
      const [importFile,setImportFile] =useState("")
      

      const handleSubmit =(e)=>{
        e.preventDefault()
        
        
        const id =posts.length ? posts[posts.length -1].id +1 :1
        const username="Suresh Kumar K"
        const profilepicture=Profile
        const datetime=moment.utc(new Date(), 'yyyy/MM/dd kk:mm:ss').local().startOf('seconds').fromNow()
        const img =images ? {img:URL.createObjectURL(images)} : null
        
        const obj ={id:id,
                   profilepicture:profilepicture,
                   username:username,
                   datetime:datetime,
                   img:img && (img.img),
                   body:body,
                   like:0,
                   comment:0
                  }

        

        const insert =[...posts,obj]
        setPosts(insert)
        setBody("")
        setImages(null)

      }
   
   const [search,setSearch] =useState("")

    
  const [following,setFollowing] =useState("")
        
  const [showMenu,setShowMenu] =useState(false)
  const [images,setImages] =  useState(null)

  return (
    <div className='interface'>
        <Nav 
        search={search}
        setSearch={setSearch}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        />

    <div className="home">
   
        <Left />

        <Middle 
        handleSubmit={handleSubmit}
        body ={body}
        setBody ={setBody}
        importFile ={importFile}
        setImportFile ={setImportFile}
        posts={posts}
        setPosts={setPosts}
        search={search}
        setFriendsProfile={setFriendsProfile}
        images={images}
        setImages={setImages}

        />

        <Right
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        following={following}
        setFollowing={setFollowing}
        />
    </div>

    </div>
  )
}

export default Home