// import React from 'react'

// const UserLi = ({like}) => {
//     return (
//         <div>
//            {like.map((likepost)=>(
//                <div key={likepost._id}>
//                    <h1>{likepost.username}</h1>
//                 </div>
//            ))}
//         </div>
//     )
// }

// export default UserLi
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
import { likePost, unlikePost } from "../../redux/postAction";
import { singleUser } from "../../redux/userAction";

const UserLi = () => {
  // const PF = "http://localhost:6400/images/";
  const PF = "/images/";
  const { userData } = useSelector((state) => state.login);
  const { login } = useSelector((state) => state);
  const { singuser } = useSelector((state) => state.userdata);
  // console.log(userData.user)
  const dispatch = useDispatch();
  const [vid, setVid] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [isLike, setIsLike] = useState(true);
  const [loadLike, setLoadlike] = useState(false);

  // useEffect(() => {
  //     if(like.likes.find(likeid => likeid  === userData.user._id)){
  //         setIsLike(true)
  //     }
  // },[like.likes,userData.user._id])

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
//   console.log(like);
  // console.log(userData.user._id)
  // console.log(posts.likes)

  const handleLike = async () => {
    if (loadLike) return;
    setIsLike(true);
    setLoadlike(true);
    await likePost(posts, userData, dispatch);
    setLoadlike(false);
  };
  const handleUnlike = async () => {
    if (loadLike) return;
    setIsLike(false);
    setLoadlike(true);
    await unlikePost(posts, userData, dispatch);
    setLoadlike(false);
  };
  console.log(singuser)

//   useEffect(() => {
//     if (like.username === userData.user.username) {
//       setAdmin(true);
//     }
//   }, [like.username, userData.user.username]);

  // console.log(admin)
  useEffect(() => {
    dispatch(singleUser(login.userName.username, login.userData.token));
  }, [dispatch, login.userName.username,login.userData.token]);
  return (
    <div >
      {singuser.map((likepszhou) => (
          <div key={likepszhou._id} className="grid grid-cols-2 gap-1 mx-1  md:grid-cols-3 ">
              {likepszhou.likes.map((likeps)=>(
        <div key={likeps._id} >
          <div className="bg-green-500 h-full w-full mt-4 mx-auto rounded-md text-center relative">
            {admin && <Dropde key={likeps._id} postInfo={likeps} />}
            <img
              src={pug}
              className="h-10 w-10 rounded-md absolute top-1 left-3"
            />
            <h1 className="hover:text-gray-300 text-gray-700 pt-3 pl-16 absolute">
              <Link to={`/user/${likeps.username}`}>{likeps.username}</Link>
            </h1>
            {/* <h1 className="pt-12 mx-2 text-left">
     <Link to={`/user_post/${posts._id}`}>{posts.content}</Link>
   </h1> */}

            {!vid ? (
              <img src={PF + likeps.photo} className="rounded-md pt-12 mx-auto" />
            ) : (
              <video
                controls
                src={PF + likeps.photo}
                className="rounded-md pt-3"
              />
            )}
            <div className="flex justify-between pt-3 pb-1 mx-2">
              <div>
                {!isLike ? (
                  <button onClick={handleLike} className="pr-1">
                    {" "}
                    <FavoriteBorderIcon />{" "}
                  </button>
                ) : (
                  <button onClick={handleUnlike}>
                    {" "}
                    <FavoriteIcon />{" "}
                  </button>
                )}

                <CommentIcon />
              </div>
              <BookmarkBorderIcon />
              {/* <BookmarkIcon /> */}
            </div>
          </div>
          </div>
              ))}
          </div>
      ))}
    </div>
  );
};

export default UserLi;
