import { useState } from 'react';

export default function useUserName() {
  const getUserName = () => {
    const userNameString = sessionStorage.getItem('userName');
    const userName = JSON.parse(userNameString);
    return userName
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