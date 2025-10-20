import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './NavBar.module.css';
import Button from '@/components/Button';
import { useDebounce } from '@/hooks';
import { ThemeContext } from '@/contexts/ThemeContext';
import {useSupabaseAuth} from '@/supabase';

export default function NavBar() {
  const [text, debouncedText, setText] = useDebounce();
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const currentTheme = isDark ? 'dark' : 'light';
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

      {/* theme를 body에 붙힌 전역 css로 사용하는 방식 */}
      <div className={styles.searchBox}>
        <input
          className={styles.search}
          type="text"
          placeholder="검색어를 입력하세요"
          value={text}
          onChange={handleChange}
        />
      </div>

      {/* theme를 직접 컴포넌트에 내려주는 방식, 세세한 설정 가능 */}
      <div className={styles.buttons}>
        <Button className={currentTheme} onClick={toggleTheme} >
          {isDark ? '라이트 모드 전환' : '다크 모드 전환'}
        </Button>
        <Button className={currentTheme} onClick={() => navigate('/login')}>로그인</Button>
        <Button className={currentTheme} onClick={() => navigate('/signup')}>회원가입</Button>
      </div>
    </nav>
  );
}
