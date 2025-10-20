import styles from './Skeleton.module.css';

export default function Skeleton({ width = '100%', height = '100%'}) {
  return (
    <div
      className={styles.skeleton}
      style={{
        width,
        height,
      }}
    />
  );
}