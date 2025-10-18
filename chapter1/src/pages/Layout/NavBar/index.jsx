import { useNavigate } from 'react-router-dom';
import styles from './NavBar.module.css';
import Button from '@/components/Button';

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
        <Button>로그인</Button>
        <Button>회원가입</Button>
      </div>
    </nav>
  );
}
