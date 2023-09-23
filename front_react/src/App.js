import './App.css';
import React, { useState } from 'react';


function sendChange() {

}

function AddButton(props) {
  return <button onClick={() => props.flag ? props.setFlag(false) : sendChange()}>{props.flag ? 'Изменить' : 'Добавить'}</button>
}

function Card(props) {
  return (
    <div>
      <span>{props.id}</span>
      <span>{props.name}</span>
      <span>{props.category}</span>
      <span>{props.price}</span>
      <button>Удалить</button>
      <button onClick={() => props.setFlagChanged(true)}>Изменить</button>
    </div>
  );
}

function App() {

  const [propProduct, setPropProduct] = useState();
  const [flagChange, setFlagChanged] = useState();

  return (
    <div>
      <div>
        <div>
          <div>
            <label for="name">Название:</label>  
            <input id="name" type="text"></input>
          </div>
          <div>
            <label for="category">Категория</label>
            <select id="category" datalist="categories">
              <option>opt1</option>
              <option>opt2</option>
            </select>
          </div>
          <div>
            <label for="price">Цена:</label>  
            <input id="price" type="number" min="1" step="any"></input>
          </div>
          <div>
            <AddButton flag={flagChange} setFlag={setFlagChanged}/>
          </div>
        </div>

        <div>
          <Card id="1" name="abc" category="MILK" price="123456" setFlagChanged={setFlagChanged}/>
        </div>
      </div>
    </div>
  );
}

export default App;
