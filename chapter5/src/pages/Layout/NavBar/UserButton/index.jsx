import { Link } from 'react-router-dom';
import styles from './UserButton.module.css';

export default function UserButton({ userInfo: { user } }) {
  return (
    <div
      className={styles.userButton}
    >
      <div className={styles.userButtonImage}
       style={{ backgroundImage: `url(${user.profileImageUrl})` }}
      >
      </div>
      <ul className={styles.menu}>
        <li className={styles.menuItem}><Link to="/mypage">마이페이지</Link></li>
        <li className={styles.menuItem}><Link to="/logout">로그아웃</Link></li>
      </ul>
    </div>
  );
}
