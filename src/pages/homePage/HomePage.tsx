import { faMedal } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CoursesAndCertifications from './components/coursesAndCertiffications/CoursesAndCertifications'
import FirstInfo from './components/firstInfo/FirstInfo'
import ImgContainer from './components/imgContainer/ImgContainer'
import MyInfo from './components/myInfo/MyInfo'
import styles from './HomePage.module.scss'

export default function HomePage() {
    return (
        <div className={styles.king}>
            <div className={styles.infoAndImgContainer}>
                <FirstInfo />
                <ImgContainer />
            </div>

            <div className={styles.aboutMe}>
                <MyInfo />
            </div>

            <div className={styles.coursesAndCertificationsContainer}>
                <div className={styles.certificationsHeader}>
                    <FontAwesomeIcon icon={faMedal} />
                    <span>
                        Courses & Certifications
                    </span>
                </div>
                <div className={styles.coursesAndCertifications}>
                    <CoursesAndCertifications header={'web design pack'} institute={'tehran institute of technology'} date={'March-April 2022'} />
                    <CoursesAndCertifications header={'react'} institute={'tehran institute of technology'} date={'March-April 2023'} />
                </div>
            </div>

        </div>
    )
}