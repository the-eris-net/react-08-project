export default function SignUp() {
  return  <div className="signup-container">
    <h2>회원가입</h2>
    <form>
      <label htmlFor="name">이름</label>
      <input type="text" id="name" name="name" placeholder="홍길동" required />

      <label htmlFor="email">이메일</label>
      <input type="email" id="email" name="email" placeholder="example@email.com" required />

      <label htmlFor="password">비밀번호</label>
      <input type="password" id="password" name="password" placeholder="비밀번호를 입력하세요" required />

      <button type="submit">회원가입</button>
    </form>
  </div>
}