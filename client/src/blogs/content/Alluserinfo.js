import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { allUserfa } from "../../redux/postAction";
import { singleUser } from "../../redux/userAction";
import Userpo from './Userpo';
import FollowBtn from "./FollowBtn";
import Following from "./Following";
import Follower from "./Follower";

const Alluserinfo = () => {
  const { post } = useSelector((state) => state);
  const { login } = useSelector((state) => state);
  const { username } = useParams();
  const { userdata } = useSelector((state) => state);
  const dispatch = useDispatch();

  // const [follow,setFollow] = useState([]);
  const [showFollower, setShowFollower] = useState(false);
  const [showFollowing, setShowFollowing] = useState(false);

  console.log(userdata.singuser);

  useEffect(() => {
    dispatch(singleUser(username, login.userData.token));
  }, [dispatch, login.userData.token]);

  useEffect(() => {
    dispatch(allUserfa({ username }, login.userData.token));
  }, [dispatch, login.userData.token]);
  // const foll = {userInfo.following}
  const handleShower = () => {
    setShowFollower(true);
  };
  const handleShowing = () => {
    setShowFollowing(true);
  };
  // console.log(follow)
  return (
    <div className="grid grid-cols-1 mx-2 md:grid-cols-3">
      <div className="col-span-1">
        {userdata.singuser.map((users) => (
          <div key={users._id}>
            {/* <img src ={users.avatar} />
           <h1>{users.username}</h1> 
           </div> */}

            <div className="flex-col w-10/12 mt-14 mx-auto relative">
              <div>
                <img
                  src={users.avatar}
                  className="h-40 w-40 mt-1 rounded-full m-auto "
                />
              </div>
              <div className="text-center">
                <div>
                  <button
                    className=" bg-green-300  w-1/3 py-1 mt-2 rounded-md"
                    onClick={handleShowing}
                  >
                    following
                  </button>
                  {showFollowing && <Following userInfo={users} />}
                  <button
                    className=" bg-green-300  w-1/3 py-1 mt-2 rounded-md "
                    onClick={handleShower}
                  >
                    follower
                  </button>
                  {showFollower && <Follower userInfo={users} />}
                </div>
                <h1 className="pl-3 pt-2 text-black hover:text-green-700 cursor-pointer ">
                  USERNAME--{users.username}
                </h1>
                <h1 className="pl-3 pt-2 text-black hover:text-green-700 cursor-pointer ">
                  EMAIL--{users.email}
                </h1>
                <h1 className="pl-3 pt-2 text-black hover:text-green-700 cursor-pointer ">
                  ABOUT--{users.username}
                </h1>

                <a className="pl-3 pt-2 text-black hover:text-green-700 cursor-pointer">
                  <Link to="/mysite">WEBSITE--{users.website}</Link>
                </a>
              </div>
              <div className="flex justify-center">
                {users._id === login.userInfo._id ? (
                  <button className=" bg-green-300  w-2/3 py-1 mt-2 rounded-md ">
                    Edit Profile
                  </button>
                ) : (
                  <FollowBtn userInfo={users} />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    
        {post.allPost.map((post) => (
          <Userpo key={post._id} posts={post} />
        ))}
      
    </div>
  );
};

export default Alluserinfo;
