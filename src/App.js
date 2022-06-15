import { TableContainer, Table, TableRow, TableCell, TableHead, TableBody, TextField, Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import './App.css';

function App() {  
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [numberOne, setNumberOne] = useState("0");
  const [numberTwo, setNumberTwo] = useState("0");
  const [simbol, setSimbol] = useState("");
  const [result, setResult] = useState(0);
  const [flag, setFlag] = useState(false);
  const [flag2, setFlag2] = useState(false);
  const [names, setNames] = useState([{
    name: 'Erik',
    lastname: 'Romero',
    age: 18,
    favouriteFood: "Burritos",
    favouriteColor: "Blue",
    counter: 0
  }]);

  const operation = () => {
    if(numberTwo !== '0'){
      switch(simbol){
        case "": window.alert("Presiona algun número"); break;
        case "+": setResult(Number.parseInt(numberOne) + Number.parseInt(numberTwo)); setFlag(false); setFlag2(true); break;
        case "-": setResult(Number.parseInt(numberOne) - Number.parseInt(numberTwo)); setFlag(false); setFlag2(true); break;
        case "/": setResult(Number.parseInt(numberOne) / Number.parseInt(numberTwo)); setFlag(false); setFlag2(true); break;
        case "X": setResult(Number.parseInt(numberOne) * Number.parseInt(numberTwo)); setFlag(false); setFlag2(true); break;
      }
    }else{
      window.alert("ingresa un numero");
    }
  }
  
  useEffect(() => {
    if(result === 0){
      setFlag(false);
      setNumberOne('0');
      setNumberTwo('0');
      setSimbol('');      
    }
  }, [result]);

  const newOperation = (text) => {
    setFlag(true); 
    setSimbol(text);
    setResult(0);
    setFlag2(false);
  }

  const newOperationTwo = (text) => {
    setFlag(true); 
    setFlag2(false);
    setSimbol(text);
    setNumberOne(result);
    setNumberTwo('0');
  }

  return (
    <div className="new-card">
      <div className='borroso'>
        <div className='div-table-2'>
          <TableContainer className='div-table' style={{ borderRadius: '20px 20px 0px 20px' }} component={Paper}>
            <div className='center-a'>
              <h2>Agregar usuario</h2>
            </div>
            <div className='text center-a' style={{padding: '10px 0px 10px 0px'}}>Erik Roman Romero Flores, 9A, 190811 IDGS DWI</div>
            <div className='center-a' style={{display: 'flex'}}>
              <div className='textField'>
                <TextField label="Nombre" variant="standard" className="textField" type="text" name="firstNumber" onChange={(e) => setName(e.target.value)} />
              </div>
              <div className='textField'>
                <TextField label="Apellido" variant="standard" className="textField" type="text" name="secondNumber" onChange={(e) => setLastname(e.target.value)} />
              </div>
            </div>
            <div className='center-a' style={{ marginBottom: '35px' }}>
              <Button className='btn-add' onClick={() => setNames((current) => [{ name, lastname }, ...current])}>Agregar</Button>
            </div>
            <Table style={{ width: '100%' }} sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className='table-cell'>
                    Nombres
                  </TableCell>
                  <TableCell className='table-cell'>
                    Apellidos
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  names.map((row, index) => (
                    <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell className='table-cell'>{row.name}</TableCell>
                      <TableCell className='table-cell'>{row.lastname}</TableCell>
                    </TableRow>
                  ))
                }
              </TableBody>
            </Table>          
          </TableContainer>
        </div>
        <div className='div-calculator'>
          <div className='calculator'>
            <div style={{ display: 'flex', padding: '15px 15px 0px 0px', wordBreak: 'break-word' }} className="contenedor">
              <div className='result'>{flag2 === false ? numberOne : null}{flag === true ? (<strong style={{color: '#BEBEBE'}}>{simbol}</strong>) : null}{flag === false || numberTwo === '0' ? null : numberTwo}</div>
            </div>   
            <div className='result'>{result !== 0 && result !== '0' ? result.toString().length > 5 ? result.toString().slice(0,10) + '...' : result : null}</div>
            <div className='d-flex' style={{paddingTop: '5px'}}>
              <button className='btn-calc center-a center-a color-btn' onClick={(e) => {
                setNumberOne('0');
                setNumberTwo('0');
                setSimbol("");
                setResult(0);
                setFlag(false);
                setFlag2(false);
              }}>C</button>
              <button className='btn-calc center-a center-a color-btn' onClick={(e) => result === 0 ? newOperation('/') : newOperationTwo('/')}>/</button>
              <button className='btn-calc center-a center-a color-btn' onClick={(e) => result === 0 ? newOperation('X') : newOperationTwo('X')}>X</button>
              <button className='btn-calc center-a center-a' onClick={(e) => {
                flag === false ? setNumberOne(numberOne.substring(0, numberOne.length - 1)) : setNumberTwo(numberTwo.substring(0, numberTwo.length - 1));
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#007BFF" className="bi bi-backspace" viewBox="0 0 16 16">
                  <path d="M5.83 5.146a.5.5 0 0 0 0 .708L7.975 8l-2.147 2.146a.5.5 0 0 0 .707.708l2.147-2.147 2.146 2.147a.5.5 0 0 0 .707-.708L9.39 8l2.146-2.146a.5.5 0 0 0-.707-.708L8.683 7.293 6.536 5.146a.5.5 0 0 0-.707 0z" />
                  <path d="M13.683 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7.08a2 2 0 0 1-1.519-.698L.241 8.65a1 1 0 0 1 0-1.302L5.084 1.7A2 2 0 0 1 6.603 1h7.08zm-7.08 1a1 1 0 0 0-.76.35L1 8l4.844 5.65a1 1 0 0 0 .759.35h7.08a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-7.08z" />
                </svg>
              </button>
            </div>
            <div className='d-flex'>
              <button className='btn-calc center-a center-a' onClick={(e) => {
                flag === false ? numberOne === '0' ? setNumberOne('7') : setNumberOne((current) => current + '7') : numberTwo === '0' ? setNumberTwo('7') : setNumberTwo((current) => current + '7');
              }}>7</button>
              <button className='btn-calc center-a center-a' onClick={(e) => {
                flag === false ? numberOne === '0' ? setNumberOne('8') : setNumberOne((current) => current + '8') : numberTwo === '0' ? setNumberTwo('8') : setNumberTwo((current) => current + '8');
              }}>8</button>
              <button className='btn-calc center-a center-a' onClick={(e) => {
                flag === false ? numberOne === '0' ? setNumberOne('9') : setNumberOne((current) => current + '9') : numberTwo === '0' ? setNumberTwo('9') : setNumberTwo((current) => current + '9');
              }}>9</button>
              <button className='btn-calc center-a center-a' onClick={(e) => result === 0 ? newOperation('-') : newOperationTwo('-')}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#007BFF" className="bi bi-dash-lg" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z" />
                </svg>
              </button>
            </div>
            <div className='d-flex'>
              <button className='btn-calc center-a center-a' onClick={(e) => {
                flag === false ? numberOne === '0' ? setNumberOne('4') : setNumberOne((current) => current + '4') : numberTwo === '0' ? setNumberTwo('4') : setNumberTwo((current) => current + '4');
              }}>4</button>
              <button className='btn-calc center-a center-a' onClick={(e) => {
                flag === false ? numberOne === '0' ? setNumberOne('5') : setNumberOne((current) => current + '5') : numberTwo === '0' ? setNumberTwo('5') : setNumberTwo((current) => current + '5');
              }}>5</button>
              <button className='btn-calc center-a center-a' onClick={(e) => {
                flag === false ? numberOne === '0' ? setNumberOne('6') : setNumberOne((current) => current + '6') : numberTwo === '0' ? setNumberTwo('6') : setNumberTwo((current) => current + '6');
              }}>6</button>
              <button className='btn-calc center-a center-a' onClick={(e) => result === 0 ? newOperation('+') : newOperationTwo('+')}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#007BFF" className="bi bi-plus-lg" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                </svg>
              </button>
            </div>
            <div style={{ display: 'flex', width: '100%' }}>
              <div style={{ width: '75%' }}>
                <div style={{ width: '100%', display: 'flex' }}>
                  <button className='btn-calc-2 center-a' onClick={(e) => {
                    flag === false ? numberOne === '0' ? setNumberOne('1') : setNumberOne((current) => current + '1') : numberTwo === '0' ? setNumberTwo('1') : setNumberTwo((current) => current + '1');
                  }}>1</button>
                  <button className='btn-calc-2 center-a' onClick={(e) => {
                    flag === false ? numberOne === '0' ? setNumberOne('2') : setNumberOne((current) => current + '2') : numberTwo === '0' ? setNumberTwo('2') : setNumberTwo((current) => current + '2');
                  }}>2</button>
                  <button className='btn-calc-2 center-a' onClick={(e) => {
                    flag === false ? numberOne === '0' ? setNumberOne('3') : setNumberOne((current) => current + '3') : numberTwo === '0' ? setNumberTwo('3') : setNumberTwo((current) => current + '3');
                  }}>3</button>
                </div>
                <div style={{ width: '100%', display: 'flex' }}>
                  <button className='btn-calc-2 center-a br-1' onClick={(e) => {
                    flag === false ? setNumberOne(((Number.parseInt(numberOne)/100)).toString()) : setNumberTwo(((Number.parseInt(numberTwo)/100)).toString())
                  }}>%</button>
                  <button className='btn-calc-2 center-a' onClick={(e) => {
                    flag === false ? numberOne === '0' ? setNumberOne('0') : setNumberOne((current) => current + '0') : numberTwo === 0 ? setNumberTwo('0') : setNumberTwo((current) => current + '0');
                  }}>0</button>
                  <button className='btn-calc-2 center-a' onClick={(e) => {
                    flag === false ? numberOne === '0' ? setNumberOne('0.') : setNumberOne((current) => current + '.') : numberTwo === '.' ? setNumberTwo('.') : setNumberTwo((current) => current + '.');
                  }}>.</button>
                </div>
              </div>
              <div style={{ width: '25%' }}>
                <button className='btn-calc-3 center-a br-2' onClick={(e) => operation(simbol)}>=</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;