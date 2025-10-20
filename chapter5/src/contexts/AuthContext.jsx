import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

/* 로컬 스토리지는 넣기만 하고 사용하지는 않는다 */
export function AuthProvider({ children }) {
  const [userInfo, setUserInfo] = useState(null);

  const registUserInfo = (info) => {
    localStorage.setItem('savedUserInfo', JSON.stringify(info));
    setUserInfo(info);
  }

  const removeUserInfo = () => {
    localStorage.removeItem('savedUserInfo');
    setUserInfo(null);
  }

  return (
    <AuthContext value={{ userInfo, registUserInfo, removeUserInfo }}>
      {children}
    </AuthContext>
  );
}