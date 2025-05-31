import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './ImgContainer.module.scss'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

export default function ImgContainer() {
    return (
        <div className={styles.imgContainer}>
            <img src="../../../public/images/myImg.JPG" className={styles.img} alt="mohammad" />
            <p>
                more about me
                <span>
                    <FontAwesomeIcon icon={faArrowDown} />
                </span>
            </p>
        </div>
    )
}
