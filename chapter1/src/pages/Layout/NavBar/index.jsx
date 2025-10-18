import { useNavigate } from 'react-router-dom';
import styles from './NavBar.module.css';

export default function NavBar() {
  const navigate = useNavigate();

  const handleClickSearch = () => {
    navigate('/');
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo} onClick={handleClickSearch}>
        <span className={styles.oz}>OZ</span>무비<span className={styles.dot}>.</span>
      </div>

      <div>
        <input  className={styles.search} type="text" placeholder="검색어를 입력하세요" />
      </div>

      <div className={styles.buttons}>
        <button className="login">로그인</button>
        <button className="signup">회원가입</button>
      </div>
    </nav>
  );
}
