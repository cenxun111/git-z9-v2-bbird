import { getDataAPI, patchFollowAPI } from "./fetchData";
import { getUsers, getSingUser, follows } from "./userSlice";

export const alluser = (token) => async (dispatch) => {
  try {
    const res = await getDataAPI("alluser", token);
    // console.log(res)
    dispatch(
      getUsers({
        data: res.data,
      })
    );
  } catch (error) {
    error.message;
  }
};

export const singleUser = (username,token) => async(dispatch) => {
    try {
      const res = await getDataAPI(`user/${username}`, token);
      console.log(res)
      dispatch(
        getSingUser({
          data: res.data,
        })
      );
    } catch (error) {
      error.message;
    }
  };

export const userfollowers =  ({id},userid,token) => async(dispatch) =>{
    try {
      const res = await patchFollowAPI(`follow/${id}`,userid, token);
      console.log(res)
      dispatch(
        follows({
          data: res.data,
        })
      );
    } catch (error) {
      error.message;
    }
  };

  export const userUnfollowers =  ({id},userid,token) => async(dispatch) =>{
    try {
      const res = await patchFollowAPI(`unfollow/${id}`,userid, token);
    //   console.log({id})
      dispatch(
        follows({
          data: res.data,
        })
      );
    } catch (error) {
      error.message;
    }
  };