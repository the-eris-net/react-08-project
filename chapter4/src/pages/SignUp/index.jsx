import Button from '@/components/Button';
import styles from './SignUp.module.css';
import FormInput from '@/components/FormInput';

export default function SignUp() {
  const handleSubmit = (event) => {
    // Handle form submission
  };

  return (
    <div className={styles.signup}>
      <h2 className={styles.title}>회원가입</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="이메일"
          type="email"
          name="email"
          errorMessage="이메일 형식을 맞춰주세요"
          required
        />
        <FormInput
          label="이름"
          type="text"
          name="name"
          errorMessage="이름 형식을 맞춰주세요(2~8자, 숫자, 한글, 영어만 사용)"
          placeholder="2~8자, 숫자, 한글, 영어만 사용"
          pattern="^[A-Za-z0-9가-힣]{2,8}$"
          required
        />
        <FormInput
          label="비밀번호"
          type="password"
          name="password"
          placeholder="4자 이상 8자 미만"
          errorMessage="비밀번호 형식을 맞춰주세요(4~8자)"
          minLength="4"
          maxLength="8"
          required
        />
        <FormInput
          label="비밀번호 확인"
          type="password"
          name="password-verification"
          placeholder="비밀번호 확인"
          errorMessage="비밀번호 형식을 맞춰주세요(4~8자)"
          minLength="4"
          maxLength="8"
          required
        />
        <Button className={styles.button} type="submit">
          회원가입
        </Button>
      </form>
    </div>
  );
}
