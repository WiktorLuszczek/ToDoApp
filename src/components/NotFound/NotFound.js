import styles from './NotFound.module.scss'

const NotFound = () => {
    return (
        <div className={styles.container}>
            <h1>404 not found</h1>
            <p>Wrong page address was given.</p>
        </div>
    )
}
export default NotFound;