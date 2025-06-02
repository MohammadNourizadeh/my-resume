import styles from './CoursesAndCertifications.module.scss'

type CoursesAndCertificationsPropsType = {
    header: string,
    institute: string,
    date: string,
    score: string,
    pdfName: string
}

export default function CoursesAndCertifications({ header, institute, date, score, pdfName }: CoursesAndCertificationsPropsType) {
    return (
        <div className={styles.king}>
            <div className={styles.header}>{header}</div>
            <div className={styles.certificateInfoContainer}>
                <div className={styles.info}>
                    institute : <span>{institute}</span>
                </div>
                <div className={styles.info}>
                    date : <span>{date}</span>
                </div>
                <div className={styles.info} style={{ marginBottom: 0 }}>
                    score :  <span>{score}</span>
                </div>
            </div>
            <div className={styles.buttonContainer}>
                <a href={`/pdf/${pdfName}`} download>view certificate</a>
            </div>
        </div>
    )
}
