import styles from './data-layout.module.css';

/* eslint-disable-next-line */
export interface DataLayoutProps {}

export function DataLayout(props: DataLayoutProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DataLayout!</h1>
    </div>
  );
}

export default DataLayout;
