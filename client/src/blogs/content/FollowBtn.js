import React,{useState,useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { userfollowers,userUnfollowers } from "../../redux/userAction";

import { Link, useHistory, useParams } from "react-router-dom";
const FollowBtn = ({userInfo}) => {

  

  const { id } = useParams();
 
    const dispatch = useDispatch();
    
    // console.log(userInfo)
    const { login } = useSelector((state) => state);
    const { user } = useSelector((state) => state);
    const [followed, setFollowed] = useState(false)


    useEffect(() => {
      if(login.userInfo.following.find(item => item === userInfo._id  ))
      {setFollowed(true)}
    },[login.userInfo.following,userInfo._id])

    // console.log(userInfo)
  


    const handleFollow = () => {
      setFollowed(true)
       dispatch(userfollowers({id},userInfo._id,login.userData.token));
    }
    // console.log(user.singuser,login.userData)
    const handleUnFollow = () => {
        setFollowed(false)
        dispatch(userUnfollowers({id},user.userInfo.userData.token));
     
    }
    // console.log({id})
    
  

    // console.log(followed)
    // console.log(login.userInfo.following)
    // console.log({id})
    // const followed = () =>{
    //   (userInfo.following.includes("{id}"))
    //   setFollowed(true)
    // }
    // useEffect(() => {
    //   dispatch(follows({ id }, login.userData.token));
    // },[dispatch, login.userData.token]);
      
  
  return (
    <div className="">{ !followed ?
        <button className=" bg-green-300  p-1 mt-2 rounded-md w-24 hover:bg-green-200" onClick = {handleFollow}
        >follow</button> :
           <button className=" bg-green-300  p-1 mt-2 rounded-md w-24 hover:bg-green-200" onClick = {handleUnFollow}
        >Unfollow</button>
        }
   
    </div>
  );
};

export default FollowBtn;
