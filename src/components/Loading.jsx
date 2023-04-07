import styles from './loading.module.css'

export const Loading = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loader}>
        <div />
      </div>
    </div>
  )
}
