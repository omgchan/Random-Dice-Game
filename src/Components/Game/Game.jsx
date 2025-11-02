    import { useEffect, useState, useRef } from 'react'
    import Numbers from "../Numbers/Numbers"
    import styles from './Game.module.css'
    import Button from "../Buttons/Button"
    import Rules from '../Rules'
    import PopUp from '../popUp'

    function Game() {
        const [selectedNumber, setSelectedNumber] = useState(null);
        const [currentDice, setCurrentDice] = useState(3);
        const [score, setScore] = useState(0);
        const [display, setDisplay] =useState(false);
        const rulesRef = useRef(null);
        const [showPopup, setShowPopup] = useState(false);
        
        

        const toggleDisplay = (e) => { 
            setDisplay( (prev) => !prev);      
        }


        useEffect(() => {
            if (display && rulesRef.current) {
                rulesRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, [display]);
        
        function makeScore() {
            const randomNumber = Math.floor(Math.random() * 6 + 1); 
            setCurrentDice(randomNumber);
            if (selectedNumber === null) {
                setShowPopup(true);
                return;
            }   
            
            // Compare with the NEW randomNumber, not currentDice
            if(randomNumber === selectedNumber) {
                setScore(s => s + selectedNumber); // Add the selected number to score
            }
            if(randomNumber !== selectedNumber) {
                setScore(s => s-2);
            }
            setSelectedNumber(null);
        }
        function handleNumberClick(number) {
            // Toggle: if clicking the same number, deselect it
            setSelectedNumber(selectedNumber === number ? null : number);
            setDisplay(prev => false);
            
        }
        
        const dices = [1,2,3,4,5,6];
        
        return (
            <div className="game_container">
                <div className={styles.info}>
                    <div className={styles.score}>
                        <h1>{score}</h1>
                        <p>Total Score</p>
                    </div>
                    
                    <div className={styles.user_pick}>
                        <p className={styles.noSelection}></p>
                        <div className={styles.numbers}>
                            
                            {dices.map((e,i) => 
                                <Numbers key={i} number={e} 
                                isSelected={selectedNumber === e}
                                onClick={() => handleNumberClick(e)}/>
                            )}

            
                        </div>
                        <p>Select Number</p>
                    </div>
                </div>

                <div className={styles.shuffle}>
                    <div className={styles.dice} 
                    >
                        <div onClick={makeScore}>
                            <img src={`/images/dice_${currentDice}.png`} alt="dice 1"></img>
                        </div>
                        <p>Click on Dice to roll</p>
                    </div>
                    <div className={styles.game_button}>
                        <Button onClick={() => setScore(0)} text="Reset Score" isOutline={true} />
                        <Button text={display ? "Hide Rules":"Show Rules"} onClick={toggleDisplay}/>
                    </div>

                </div>
                {display && (
                    <div ref={rulesRef}>
                        <Rules/>
                    </div>
                )}
                {showPopup && <PopUp onClose={() => setShowPopup(false)} />}
            </div>
            
        )
    }

    export default Game