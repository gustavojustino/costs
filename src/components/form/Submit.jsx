import styles from './Submit.module.css';

const Submit = ({text}) => {
    return (
        <div>
       <button className={styles.btn_submit} type="submit">{text}</button>
       </div>
    )
}

export default Submit;