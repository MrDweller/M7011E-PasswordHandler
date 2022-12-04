import { useState } from 'react';

export default function useToken() {
  const getUserName = () => {
    const tokenString = sessionStorage.getItem('userName');
    const userToken = JSON.parse(tokenString);
    return userToken
  };

  const [userName, setUserName] = useState(getUserName());

  const saveUserName = userName => {
    if(!userName) {
        userName = null;
    }
    sessionStorage.setItem('userName', JSON.stringify(userName));
    setUserName(userName);
  };

  return {
    setUserName: saveUserName,
    userName
  }
}