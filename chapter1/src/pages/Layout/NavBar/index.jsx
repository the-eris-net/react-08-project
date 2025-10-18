import styles from './NavBar.module.css';

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
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
