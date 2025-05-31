import styles from './FirstInfo.module.scss';

export default function FirstInfo() {
    return (
        <div className={styles.king}>
            <div className={styles.myName}>mohammad nourizadeh</div>
            <p className={styles.feDeveloper}>front-end developer</p>
            <p className={styles.description}>i am a front-end developer with experience in building modern web application</p>
        </div>
    )
}
