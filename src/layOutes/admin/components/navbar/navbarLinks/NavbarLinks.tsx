import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './NavbarLinks.module.scss'

type linksType = {
    href?: string,
    linkName: string,
    disable?: boolean
}

export default function NavbarLinks() {
    // state
    const [page, setPage] = useState<string>('home')

    // var
    const links: linksType[] = [
        {
            href: '/admin/home',
            linkName: 'home'
        },
        {
            linkName: 'chat',
            disable: true
        },
        {
            href: '/admin/contact',
            linkName: 'contact'
        },
    ]

    return (
        <div className={styles.king}>
            {links.map((link, index) => (

                !link.disable ?
                    <Link to={link.href ? link.href : ''}
                        onClick={() => { setPage(link.linkName) }}
                        className={page === link.linkName ? styles.selectedItem : ''}
                        key={index}>
                        {link.linkName}
                    </Link>

                    :

                    <div className={styles.disabledLink}>
                        {link.linkName}
                    </div>
            ))}
        </div>
    )
}
