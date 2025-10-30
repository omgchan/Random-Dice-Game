import styles from './Numbers.module.css'

function Numbers(props) {
  
  return (
    <div 
    className={styles.number} 
    onClick={props.onClick}
    style={{
        backgroundColor: props.isSelected ? 'black' : 'white',
        color: props.isSelected ? 'white' : 'black'
    }}>
      {props.number}
    </div>
  )
}

export default Numbers
