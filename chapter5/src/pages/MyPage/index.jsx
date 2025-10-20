import BookMark from './BookMark';
import MyPageInfo from './MyPageInfo';
import { useContext } from 'react';
import { AuthContext } from '@/contexts/AuthContext';
import { Navigate } from 'react-router-dom';

export default function MyPage() {
  const { userInfo } = useContext(AuthContext);

  if (!userInfo) {
    alert('로그인이 필요합니다.');
    return <Navigate to="/" />;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <MyPageInfo userInfo={userInfo} />
      <BookMark />
    </div>
  );
}
