import styles from './Indicator.module.css';

export default function Indicator() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px',
      padding: '20px'
    }}>
      <div className={styles.spinner} />
      <p>로딩 중...</p>
    </div>
  );
}