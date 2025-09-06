import { Title } from './components/Title';
import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row } from './styles';
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');

  const handleAddNunber = (number) => {
    setCurrentNumber(prev => `${number}${prev === '0' ? '' : prev}`)
  }

  const handleClear = () => {
    setCurrentNumber('0')
  }
  return (
    <Container>
      <Title />
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="x" />
          <Button label="/" />
          <Button label="%" />
          <Button label="C" onClick={() => handleClear()} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNunber('7')} />
          <Button label="8" onClick={() => handleAddNunber('8')} />
          <Button label="9" onClick={() => handleAddNunber('9')} />
          <Button label="-" />
        </Row>
        <Row>
          <Button label="6" onClick={() => handleAddNunber('6')} />
          <Button label="5" onClick={() => handleAddNunber('5')} />
          <Button label="4" onClick={() => handleAddNunber('4')} />
          <Button label="+" />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNunber('1')} />
          <Button label="2" onClick={() => handleAddNunber('2')} />
          <Button label="3" onClick={() => handleAddNunber('3')} />
          <Button label="=" />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
