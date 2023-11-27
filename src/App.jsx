import { useState } from 'react'
import styled from 'styled-components'



export default function App() {
  const [numbers, setNumbers] = useState({
    1: {
      location: 'left',
      check: false
    },
    2: {
      location: 'left',
      check: true
    },
    3: {
      location: 'left',
      check: false
    },
    4: {
      location: 'right',
      check: true
    }
  })

  const handleOnClick = (location) => {
    let newNumbers = { ...numbers }
    Object.keys(newNumbers).forEach(number => {
      if(newNumbers[number].location === location && newNumbers[number].check) {
        let newLocation = location === 'left' ? 'right' : 'left'
        newNumbers[number].location = newLocation
        newNumbers[number].check = false
      }
    })
    setNumbers(newNumbers)
  }

  const handleOnChange = (number) => {
    let newNumbers = { ...numbers }
    newNumbers[number].check = !newNumbers[number].check
    setNumbers(newNumbers)
  }

  const checkbox = (number) => (
    <label key={number}>
      <input onChange={() => handleOnChange(number)} checked={numbers[number].check} type='checkbox' />{number}
    </label>
  )
  let leftList = []
  let rightList = []
  Object.keys(numbers).forEach(number => {
    if(numbers[number].location === 'left') {
      leftList.push(checkbox(number))
    } else if(numbers[number].location === 'right') {
      rightList.push(checkbox(number))
    }
  })

  return (
    <Container>
      <ListContainer> {leftList} </ListContainer>
      <ButtonContanier>
        <Button onClick={ () => handleOnClick('left') } type="button">&gt;</Button>
        <Button onClick={ () => handleOnClick('right') } type="button">&lt;</Button>
      </ButtonContanier>
      <ListContainer> {rightList} </ListContainer>
    </Container>
  )
}

const Container = styled.div`
  width: 800px;
  height: 500px;
  border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 400px;
  border: 1px solid black;
  border-radius: 10px;
  input {
    margin: 5px;
    width: 20px;
    height: 20px;
  }
  label {
    font-size: 18px;
  }
`
const ButtonContanier = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`
const Button = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  border-radius: 10px;
  border: 1px solid black;
  background-color: lightgray;
  &:active {
    background-color: gray;
  }
  cursor: pointer;
`