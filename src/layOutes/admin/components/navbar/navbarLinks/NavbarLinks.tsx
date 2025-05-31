import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './NavbarLinks.module.scss'

type linksType = {
    href: string,
    linkName: string
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
            href: '/admin/home',
            linkName: 'about'
        },
        {
            href: '/admin/home',
            linkName: 'contact'
        },
    ]

    return (
        <div className={styles.king}>
            {links.map((link, index) => (
                <Link to={link.href}
                    onClick={() => { setPage(link.linkName) }}
                    className={page === link.linkName ? styles.selectedItem : ''}
                    key={index}>
                    {link.linkName}
                </Link>
            ))}
        </div>
    )
}
