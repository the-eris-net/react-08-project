import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './NavBar.module.css';
import Button from '@/components/Button';
import { useDebounce } from '@/hooks';
import { ThemeContext } from '@/contexts/ThemeContext';

export default function NavBar() {
  const [text, debouncedText, setText] = useDebounce();
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const handleClickSearch = () => {
    navigate('/');
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    navigate(`/?keyword=${debouncedText}`);
  }, [debouncedText]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo} onClick={handleClickSearch}>
        <span className={styles.oz}>OZ</span>무비
        <span className={styles.dot}>.</span>
      </div>

      <div className={styles.searchBox}>
        <input
          className={styles.search}
          type="text"
          placeholder="검색어를 입력하세요"
          value={text}
          onChange={handleChange}
        />
      </div>

      <div className={styles.buttons}>
        <Button onClick={toggleTheme}>
          {isDark ? '라이트 모드 전환' : '다크 모드 전환'}
        </Button>
        <Button>로그인</Button>
        <Button>회원가입</Button>
      </div>
    </nav>
  );
}
