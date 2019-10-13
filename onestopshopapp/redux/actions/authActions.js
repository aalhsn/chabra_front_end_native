import * as actionTypes from "./types";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { AsyncStorage } from "react-native";

const instance = axios.create({
  baseURL: "http://178.128.114.232/api/"
});

export const checkForExpiredToken = navigation => {
  return async dispatch => {
    // Get token
    const token = await AsyncStorage.getItem("token");

    if (token) {
      const currentTime = Date.now() / 1000;

      // Decode token and get user info
      const user = jwt_decode(token);

      console.log((user.exp - currentTime) / 60);

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
    axios.defaults.headers.common.Authorization = `jwt ${token}`;
  } else {
    await AsyncStorage.removeItem("token");
    delete axios.defaults.headers.common.Authorization;
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
      let decodedUser = jwt_decode(user.token);
      setAuthToken(user.token);
      dispatch(setCurrentUser(decodedUser));
      navigation.replace("Profile");
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
  setAuthToken();
  return setCurrentUser();
};
