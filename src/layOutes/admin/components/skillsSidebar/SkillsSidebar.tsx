import { JSX } from 'react'
import { SiBootstrap, SiCss3, SiGit, SiHtml5, SiJavascript, SiReact, SiSass, SiTypescript } from 'react-icons/si'
import styles from './SkillsSidebar.module.scss'


export default function SkillsSidebar() {

    const skills: JSX.Element[] = [
        <SiHtml5 />,
        <SiCss3 />,
        <SiSass />,
        <SiBootstrap />,
        <SiJavascript />,
        <SiReact />,
        <SiTypescript />,
        <SiGit />,
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
