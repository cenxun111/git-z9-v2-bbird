import React, { useState, useEffect } from "react";
import pug from "../../images/pug.png";
import { Link, useHistory } from "react-router-dom";
import Dropde from "./Dropde";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import CommentIcon from "@material-ui/icons/Comment";
import { useSelector, useDispatch } from "react-redux";
import { likePost ,unlikePost} from "../../redux/postAction";

const Mainct = ({posts}) => {


    // const PF = "http://localhost:6400/images/";
    const PF = "/images/";
    const { userData } = useSelector((state) => state.login);
    // console.log(userData.user)
    const dispatch = useDispatch();
    const [vid, setVid] = useState(false);
    const [isLike, setIsLike] = useState(false);
    const [loadLike, setLoadlike] = useState(false);

    useEffect(() => {
        if(posts.likes.find(like => like  === userData.user._id)){
            setIsLike(true)
        }
    },[posts.likes,userData.user._id])

    // useEffect(() => {
    //     if(posts.likes._id = userData.user._id){
    //         setIsLike(true)
    //     }
    // },[posts.likes,userData.user._id])
    // useEffect(() => {
    // if(posts.likes.length > 0) {
    //   setIsLike(true)
    // }},[])

// console.log(posts)
// console.log(isLike)
// console.log(userData.user._id)
// console.log(posts.likes)

    const handleLike = async() => {
    if(loadLike) return;
      setIsLike(true)
      setLoadlike(true)
      await likePost(posts,userData,dispatch);
      setLoadlike(false)
    }
    const handleUnlike = async() => {
      if(loadLike) return;
      setIsLike(false)
      setLoadlike(true)
      await unlikePost(posts,userData,dispatch);
      setLoadlike(false)
    }


    return (
        <div>
           {/* <div
            style={{
              backgroundImage: `url(${PF + posts.photo})`,
              backgroundSize: "cover",
              backgroundcolor: "transparent",
             
            }}>  */}
           
        
            <div>
            <div className="h-full w-full mt-4 mx-auto rounded-md text-center relative ">
              <Dropde key={posts._id} postInfo={posts} />
  
              <img
                src={pug}
                className="h-10 w-10 rounded-md absolute top-1 left-3"
              />
              <h1 className="hover:text-gray-300 text-gray-700 pt-3 pl-16 absolute">
                <Link to={`/user_info/${posts.username}`}>{posts.username}</Link>
              </h1>
              <h1 className="pt-12 mx-2 text-left">
                <Link to={`/user_post/${posts._id}`}>{posts.content}</Link>
              </h1>
  
              {!vid ? (
                <img src={PF + posts.photo} className="rounded-md pt-3 mx-auto" />
              ) : (
                <video
                  controls
                  src={PF + posts.photo}
                  className="rounded-md pt-3"
                />
              )}
        <div className="flex justify-between pt-3 pb-1 mx-2">
                <div>
                  {!isLike ? 
                    <button onClick={handleLike} className="pr-1" > <FavoriteBorderIcon /> </button> : <button onClick={handleUnlike}> <FavoriteIcon /> </button>}
  
                  <CommentIcon />
                </div>
                <BookmarkBorderIcon />
                {/* <BookmarkIcon /> */}
              </div>
  
              {/* <object data={PF  + posts.photo} className="rounded-md pt-3 w-full h-auto" />
  <video  src={PF  + posts.photo} className="rounded-md pt-3" /> */}
            </div>
          </div>
        </div>
        // </div>
    );
  };
    

export default Mainct
