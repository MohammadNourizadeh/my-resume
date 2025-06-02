import styles from './DownloadResumeBtn.module.scss'

export default function DownloadResumeBtn() {
    return (
        <a href='../../../../../public/pdf/resume.pdf' className={styles.king} download>download resume</a>
    )
}
