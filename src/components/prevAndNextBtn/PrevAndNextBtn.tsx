import styles from './PrevAndNextBtn.module.scss';

export default function PrevAndNextBtn() {
    return (
        <div className={styles.king}>
            <button>prev</button>
            <button>next</button>
        </div>
    )
}