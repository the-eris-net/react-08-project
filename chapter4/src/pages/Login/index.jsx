import Button from '@/components/Button';
import styles from './Login.module.css';
import FormInput from '@/components/FormInput';

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className={styles.login}>
      <h2 className={styles.title}>로그인</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="이메일"
          type="email"
          name="email"
          errorMessage="이메일 형식을 맞춰주세요"
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
        <Button className={styles.button} type="submit">
          로그인
        </Button>
      </form>
    </div>
  );
}
