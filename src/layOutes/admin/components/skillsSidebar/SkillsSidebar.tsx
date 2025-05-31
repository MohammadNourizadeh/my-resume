import styles from './SkillsSidebar.module.scss'

type skillsType = {
    src: string,
    alt: string
}


export default function SkillsSidebar() {
    const skills: skillsType[] = [
        {
            src: '../../../../../../public/images/icons8-html5-40.png',
            alt: 'html5'
        },
        {
            src: '../../../../../../public/images/icons8-css3-40.png',
            alt: 'css3'
        },
        {
            src: '../../../../../../public/images/icons8-sass-40.png',
            alt: 'sass'
        },
        {
            src: '../../../../../../public/images/icons8-bootstrap-40.png',
            alt: 'bootstrap'
        },
        {
            src: '../../../../../../public/images/icons8-javascript-40.png',
            alt: 'javascript'
        },
        {
            src: '../../../../../../public/images/icons8-typescript-40.png',
            alt: 'typescript'
        },
        {
            src: '../../../../../../public/images/icons8-react-40.png',
            alt: 'react'
        },
        {
            src: '../../../../../../public/images/icons8-git-40.png',
            alt: 'git'
        },
    ]

    return (
        <div className={styles.king}>
            {skills.map((skill, index) => (
                <img src={skill.src} alt={skill.alt} key={index} title={skill.alt} />
            ))}
        </div>
    )
}
