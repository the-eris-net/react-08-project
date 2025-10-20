import { useContext } from 'react';
import styles from './MyPageInfo.module.css';
import { AuthContext } from '@/contexts/AuthContext';

export default function MyPageInfo() {
  const {
    userInfo: { user },
  } = useContext(AuthContext);
  console.log(user);

  return (
    <div className={styles.myPageInfo}>
      <div className={styles.container}>
        <img
          className={styles.img}
          src={user.profileImageUrl}
          alt="User Avatar"
        />
        <div>
          <div className={styles.title}>환영합니다 {user.userName}님!</div>
          <div className={styles.info}>
            <div>
              <strong>일련번호:</strong> {user.id}
            </div>
            <div>
              <strong>이메일:</strong> {user.email}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
