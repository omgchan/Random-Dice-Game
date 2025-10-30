import styled from 'styled-components'

function Rules() {
  return (
    <Box>
        <h3>How to play Game?</h3>

        <ul>
            <li>Select any number</li>
            <li>Click on Dice</li>
            <li>after click on  dice  if selected number is equal to dice number you will get same point as dice </li>
            <li>if you get wrong guess then  2 point will be dedcuted </li>
        </ul>
    
    </Box>
  )
}

export default Rules


const Box = styled.div`

    background-color: #FBF1F1;
    max-width: 794px;
    height: 208px;
    margin: 20px auto;
    padding: 20px;

    h3 {
        margin-bottom: 24px;
        
    }
    ul li {
        margin-left: 10px;
        line-height: 30px;
    }

`;
