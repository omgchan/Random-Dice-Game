import styles from './UserView.module.css'
import Button from '../Buttons/Button'
import { useState } from 'react';


function UserView(props) {
    

return (
    <div className={`${styles.init_container} container`}>
        <div className={styles.image}>
            <img src='images/dice.png' alt="Dice images"/>
        </div>

        <div className={styles.text}>
            <h1>DICE GAME</h1>
            <Button text="Play Now" onClick={props.toggle} />
        </div>
    </div>
    )
}

export default UserView
