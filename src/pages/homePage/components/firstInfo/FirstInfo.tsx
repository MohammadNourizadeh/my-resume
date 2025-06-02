import styles from './FirstInfo.module.scss';

export default function FirstInfo() {
    return (
        <div className={styles.king}>
            <div className={styles.myName}>mohammad nourizadeh</div>
            <p className={styles.feDeveloper}>front-end developer</p>
            <p className={styles.description}>Front-end developer focused on building modern, user-friendly web apps and improving skills.</p>
        </div>
    )
}
