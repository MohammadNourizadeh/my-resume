import styles from './CoursesAndCertifications.module.scss'

type CoursesAndCertificationsPropsType = {
    header: string,
    institute: string,
    date: string
}

export default function CoursesAndCertifications({ header, institute, date }: CoursesAndCertificationsPropsType) {
    return (
        <div className={styles.king}>
            <div className={styles.header}>{header}</div>
            <div className={styles.info}>
                <div className={styles.institute}>
                    institute : <span>{institute}</span>
                </div>
                <div className={styles.date}>
                    date : <span>{date}</span>
                </div>
            </div>
            <div className={styles.buttonContainer}>
                <button>view certificate</button>
            </div>
        </div>
    )
}
