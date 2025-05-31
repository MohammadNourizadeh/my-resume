import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import styles from '../navbar/Navbar.module.scss'
import DownloadResumeBtn from './downloadResume/DownloadResumeBtn'
import NavbarLinks from './navbarLinks/NavbarLinks'

export default function Navbar() {

    // state
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

    return (
        <>
            <nav className={styles.king}>
                <DownloadResumeBtn />
                <NavbarLinks />
            </nav >

            <nav className={styles.dropdownNavbar}>
                <div className={styles.navbarIconAndDownloadBtnContainer}>
                    <DownloadResumeBtn />
                    <div className={styles.barsIconContainer}>
                        <span onClick={() => { setIsDropdownOpen(prev => !prev) }}>
                            <FontAwesomeIcon icon={faBars} />
                        </span>
                    </div>
                </div>
                <div className={styles.dropdown} style={isDropdownOpen ? { display: 'block' } : { display: 'none' }}>
                    <NavbarLinks />
                </div>
            </nav >
        </>
    )
}
