import * as actionTypes from "./types";
import jwt_decode from "jwt-decode";

import { AsyncStorage } from "react-native";
import instance from "./instance";


export const fetchProfile = () => async dispatch => {
  try {
    const res = await instance.get("profile/");
    const profile = res.data;
    dispatch({ type: actionTypes.FETCH_PROFILE, payload: profile });
  } catch (error) {
    console.error(error);
  }
};

const resetProfile = () => ({
  type: actionTypes.RESET_PROFILE,
});


export const checkForExpiredToken = navigation => {
  return async dispatch => {
    // Get token
    const token = await AsyncStorage.getItem("token");

    if (token) {
      const currentTime = Date.now() / 1000;

      // Decode token and get user info
      const user = jwt_decode(token);

      // Check token expiration
      if (user.exp >= currentTime) {
        // Set auth token header
        setAuthToken(token);
        // Set user
        dispatch(setCurrentUser(user));
      } else {
        dispatch(logout());
      }
    }
  };
};

const setAuthToken = async token => {
  if (token) {
    await AsyncStorage.setItem("token", token);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    await AsyncStorage.removeItem("token");
    delete instance.defaults.headers.common.Authorization;
  }
};

const setCurrentUser = user => ({
  type: actionTypes.SET_CURRENT_USER,
  payload: user
});

export const login = (userData, navigation) => {
  return async dispatch => {
    try {
      let response = await instance.post("login/", userData);
      let user = response.data;
      console.log("user:", user)
      let decodedUser = jwt_decode(user.access);
      setAuthToken(user.access);
      dispatch(setCurrentUser(decodedUser));

      //Ask Khalid what he means by then goBack()
      //Khalid's Note Navigate to profile after defining login screen in ProfileTab then goBack()
      navigation.replace("ProfileScreen");
    } catch (error) {
      console.error(error);
    }
  };
};

export const signup = (userData, navigation) => {
  return async dispatch => {
    try {
      await instance.post("register/", userData);
      dispatch(login(userData, navigation));
    } catch (error) {
      console.error(error);
    }
  };
};

export const logout = () => {
  return async dispatch => {

    setAuthToken();
    dispatch(setCurrentUser());
    dispatch(resetProfile());

  }
}
  // setAuthToken();
  // return (setCurrentUser())

//}




