import { Title } from './components/Title';
import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row } from './styles';
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, SetOperation] = useState('');

  const handleAddNunber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
  }

  const handleClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    SetOperation('');
  }

  const handleSumNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      SetOperation('+');
    } else {
      const res = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(res));
      SetOperation('');
    }
  }

  const handleSubtractNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      SetOperation('-');
    } else {
      const res = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(res));
      SetOperation('');
    }
  }
  const handleMultiplysNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      SetOperation('x');
    } else {
      const res = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(res));
      SetOperation('');
    }
  }
  const handleDivideNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      SetOperation('/');
    } else {
      const res = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(res));
      SetOperation('');
    }
  }
  const handlePercentageNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      SetOperation('%');
    } else {
      const res = Number(currentNumber) / 100;
      setCurrentNumber(String(res));
      SetOperation('');
    }
  }

  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch (operation) {
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleSubtractNumbers();
          break;
        case 'x':
          handleMultiplysNumbers();
          break;
        case '/':
          handleDivideNumbers();
          break;
        case '%':
          handlePercentageNumbers();
          break;
        default:
          break;
      }
    }
  }

  return (
    <Container>
      <Title />
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="x" onClick={handleMultiplysNumbers} />
          <Button label="/" onClick={handleDivideNumbers} />
          <Button label="%" onClick={handlePercentageNumbers} />
          <Button label="C" onClick={() => handleClear()} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNunber('7')} />
          <Button label="8" onClick={() => handleAddNunber('8')} />
          <Button label="9" onClick={() => handleAddNunber('9')} />
          <Button label="-" onClick={handleSubtractNumbers} />
        </Row>

        <Row>
          <Button label="4" onClick={() => handleAddNunber('4')} />
          <Button label="5" onClick={() => handleAddNunber('5')} />
          <Button label="6" onClick={() => handleAddNunber('6')} />
          <Button label="+" onClick={handleSumNumbers} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNunber('1')} />
          <Button label="2" onClick={() => handleAddNunber('2')} />
          <Button label="3" onClick={() => handleAddNunber('3')} />
          <Button label="=" onClick={handleEquals} />
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNunber('0')} />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
