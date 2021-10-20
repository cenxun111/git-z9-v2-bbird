import React, {useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { alluser } from "../../redux/userAction";
import { Link, useHistory } from "react-router-dom";
import FollowBtn from "./FollowBtn";
const Alluser = () => {
  const { login } = useSelector((state) => state);
  const { userdata } = useSelector((state) => state);

  const dispatch = useDispatch();
  useEffect(() => {
    if (login.userData.token) dispatch(alluser(login.userData.token));
  }, [dispatch, login.userData.token]);

 
  return (
    <div>
      <div className=" pt-10 grid grid-cols-2 gap-1 mx-10 md:grid-cols-8">
        {userdata.allusers.map((users) => (
         
          <div key={users._id} className="mx-auto text-center bg-gray-50 p-4 rounded-md">
            <img src={users.avatar} className=" h-10 w-10 mx-auto" />
            <h1><Link to={`/user/${users.username}`}>{users.username}</Link></h1>
           <button >
             following:{users.following.length}
           </button>
           <h1>
             followers:{users.followers.length}
           </h1>
           
           {/* <FollowBtn /> */}
          </div>
          
       
        ))}
      </div>
      <div>
        
         
      
      </div>
      <h1>
              {userdata.allusers.length}
      </h1>

    </div>
  );
};

export default Alluser;
