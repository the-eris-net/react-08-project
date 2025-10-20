import Button from '@/components/Button';
import styles from './SignUp.module.css';
import FormInput from '@/components/FormInput';
import { useSupabaseAuth } from '@/supabase';

export default function SignUp() {
  const { signUp } = useSupabaseAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const userName = formData.get('userName');
    const password = formData.get('password');
    signUp({ email, password, userName });
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
          name="userName"
          errorMessage="이름 형식을 맞춰주세요(2~8자, 숫자, 한글, 영어만 사용)"
          placeholder="2~8자, 숫자, 한글, 영어만 사용"
          pattern="^[A-Za-z0-9가-힣]{2,8}$"
          required
        />
        <FormInput
          label="비밀번호"
          type="password"
          name="password"
          placeholder="6자 이상 8자 미만"
          errorMessage="비밀번호 형식을 맞춰주세요(6~8자)"
          minLength="6"
          maxLength="8"
          required
        />
        <FormInput
          label="비밀번호 확인"
          type="password"
          name="password-verification"
          placeholder="비밀번호 확인"
          errorMessage="비밀번호 형식을 맞춰주세요(6~8자)"
          minLength="6"
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
