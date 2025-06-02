import { JSX } from 'react'
import { SiBootstrap, SiCss3, SiGit, SiHtml5, SiJavascript, SiReact, SiSass, SiTypescript } from 'react-icons/si'
import styles from './SkillsSidebar.module.scss'


export default function SkillsSidebar() {

    const skills: JSX.Element[] = [
        <SiHtml5 title='HTML5' />,
        <SiCss3 title='CSS3' />,
        <SiSass title='sass' />,
        <SiBootstrap title='Bootstrap' />,
        <SiJavascript title='JavaScript' />,
        <SiReact title='React' />,
        <SiTypescript title='TypeScript' />,
        <SiGit title='Git' />,
    ]

    return (
        <div className={styles.king}>
            {skills.map((skill, index) => (
                <div key={index}>
                    {skill}
                </div>
            ))}
        </div>
    )
}
