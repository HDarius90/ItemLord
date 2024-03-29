import styles from './Stats.module.css';
import { useSelector } from 'react-redux';

export default function Stats() {
  const stats = useSelector((state) => state.stats)
  return (
    <div className={styles.mainElement}>
      <h4>Stats</h4>
      <span className={styles.yellow}>Location: {stats.location}</span>
      <span className={styles.yellow}>Health: {stats.health}</span>
      <span className={styles.yellow}>
        Day: {stats.day}/{stats.lastDay}
      </span>
      <span className={styles.yellow}>Rank: {stats.rank}</span>
      <span className={styles.green}>Cash: ${stats.cash}</span>
      <span className={styles.green}>Bank: ${stats.bank}</span>
      <span className={styles.red}>Debt: ${stats.debt}</span>
    </div>
  );
}
