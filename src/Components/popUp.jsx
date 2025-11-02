import styled from "styled-components";
import Button from "./Buttons/Button";

function PopUp(props) {
  return (
    <PopUpBox>
        <div className="popupContent">
            <h3>⚠️ No Number Selected</h3>
            <p>Please select a number before rolling the dice!</p>
            <Button 
                text="OK" 
                onClick={props.onClose}
            />
        </div>
    </PopUpBox>
  )
}

export default PopUp;


const PopUpBox = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    .popupContent {
        background: white;
        padding: 30px;
        border-radius: 10px;
        text-align: center;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        max-width: 400px;
    }

    .popupContent h3 {
        margin-bottom: 15px;
        color: #333;
    }

    .popupContent p {
        margin-bottom: 20px;
        color: #666;
    }

`;
