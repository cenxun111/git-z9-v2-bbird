import {
  createPost,
  updateSuccess,
  postError,
  getUserPosts,
  updateStart,
  getSinglePost,
  deletePost,
  updatePost,
  allUserPost,
  updateLike,
  updateunLike
} from "./postSlice";

import {
  postDataAPI,
  getDataAPI,
  deleteDataAPI,
  patchDataAPI,
} from "./fetchData";

export const createNewsPost = async (newPost, token, dispatch) => {
  dispatch(updateStart());
  try {
    const res = await postDataAPI("createNewsPost", newPost, token);
    // console.log(res);
    dispatch(
      createPost({
        post: res.data,
      })
    ),
      dispatch(updateSuccess());
    dispatch(updateStart());
  } catch (error) {
    dispatch(postError(error.message));
  }
};

export const allPost = (token) => async (dispatch) => {
  try {
    const res = await getDataAPI("user_posts", token);
    // console.log(res);
    dispatch(
      getUserPosts({
        data: res.data,
      })
    );
  } catch (error) {
    dispatch(postError(error.message));
  }
};
export const allYonPost = (token) => async (dispatch) => {
  try {
    const res = await getDataAPI("allpost", token);
    // console.log(res);
    dispatch(
      allUserPost({
        data: res.data,
      })
    );
  } catch (error) {
    dispatch(postError(error.message));
  }
};

export const allUserfa =
  ({username }, token) =>
  async (dispatch) => {
    try {
      const res = await getDataAPI(`userpost/${username}`, token);
      dispatch(
        allUserPost({
          data: res.data,
        })
      );
    } catch (error) {
      dispatch(postError(error.message));
    }
  };

export const singlePost =
  ({ id }, token) =>
  async (dispatch) => {
    try {
      const res = await getDataAPI(`post/${id}`, token);
      dispatch(
        getSinglePost({
          data: res.data,
        })
      );
    } catch (error) {
      dispatch(postError(error.message));
    }
  };

export const dePost = (id, token) => async (dispatch) => {
  //   console.log(id, token);
  try {
    const res = await deleteDataAPI(`post/${id}`, token);

    dispatch(
      deletePost({
        data: res.data,
      })
    );
    // console.log(data);
  } catch (error) {
    dispatch(postError(error.message));
  }
};

export const upPost = async (newPost, id, token, dispatch) => {
  try {
    const res = await patchDataAPI(`post/${id}`, newPost, token);
    // console.log(res);
    dispatch(
      updatePost({
        data: res.data,
      })
    );
  } catch (error) {
    dispatch(postError(error.message));
  }
};
export const upPostC = async (content, id, token, dispatch) => {
  try {
    const res = await patchDataAPI(`postc/${id}`, content, token);
    console.log(res);
    dispatch(
      updatePost({
        data: res.data,
      })
    );
  } catch (error) {
    dispatch(postError(error.message));
  }
};

export const likePost = async (posts, userData, dispatch) => {
 
  // console.log(posts)
  try {
    const res = await patchDataAPI(
      `postlike/${posts._id}`,
      null,
      userData.token
    );
    // console.log(userData.token)
    const newPosts = { ...posts, likes: [...posts.likes, userData.user] };
    // console.log(newPosts);
    dispatch(
      updateLike({
        data: newPosts,
      })
    );
  } catch (error) {
    // console.log(newPost)
    dispatch(postError(error.message));
  }
};

export const unlikePost = async (posts, userData, dispatch) => {

  try {
    const res = await patchDataAPI(
      `postunlike/${posts._id}`,
      null,
      userData.token
    );
    console.log(userData.token)
    const newPost = { ...posts, likes:posts.likes.filter(like => like !== userData.user._id)};
    console.log(newPost)
    dispatch(
      updateunLike({
        data: newPost,
      })
    );
  } catch (error) {
    // console.log(newPost)
    dispatch(postError(error.message));
  }
};


// export const deletePost =({id})
// export const allPost =()=> async(dispatch) => {
//     try{
//         const res = await getDataAPI("allPost");
//         console.log(res)
//         dispatch(getPosts({
//             data:res.data
//         }));
//     }catch(error) {
//         dispatch(postError(error.message))
//     }
// };

// export const userPosts =({username})=> async(dispatch) => {
//     try{
//         const res = await getDataAPI(`user_posts/${username}`)
//         console.log(username)
//         console.log(res)
//         dispatch(getUserPosts({
//             data:res.data
//         }));
//     }catch(error) {
//         dispatch(postError(error.message))
//     }
// };

