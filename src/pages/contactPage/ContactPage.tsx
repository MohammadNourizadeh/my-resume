import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faMobile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './ContactPage.module.scss'

export default function ContactPage() {
    return (
        <div className={styles.king}>
            <div className={styles.contactBox}>
                <div className={styles.imgAndNameContainer}>
                    <div>
                        <img src="../../../public/images/contactPageImg.JPG" alt="Mohammad" />
                    </div>
                    <span>
                        Mohammad <br />
                        Nourizadeh
                    </span>
                </div>
                <div className={styles.info}>
                    <div className={styles.iconContainer}>
                        <FontAwesomeIcon icon={faGoogle} />
                    </div>
                    <div>email :</div>
                    <div>
                        <a href="mailto:mo.nourizadeh1@gmail.com" target="_blank" rel="noopener noreferrer">
                            mo.nourizadeh1@gmail.com
                        </a>
                    </div>
                </div>
                <div className={styles.info}>
                    <div className={styles.iconContainer}>
                        <FontAwesomeIcon icon={faGithub} />
                    </div>
                    <div>GitHub :</div>
                    <div>
                        <a href="https://github.com/MohammadNourizade" target="_blank" rel="noopener noreferrer">
                            MohammadNourizade
                        </a>
                    </div>
                </div>
                <div className={styles.info}>
                    <div className={styles.iconContainer}>
                        <FontAwesomeIcon icon={faMobile} />
                    </div>
                    <div>Mobile Number :</div>
                    <div>
                        <a href="tel:09197878264">09197878264</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
