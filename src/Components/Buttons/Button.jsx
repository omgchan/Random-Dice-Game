import styles from './Button.module.css'

function Button({ text, onClick, isOutline }) {
  return (
    <button 
      onClick={onClick}
      className={isOutline ? styles.secondary_btn : styles.primary_btn}>
        {text}
    </button>
  )
}

export default Button