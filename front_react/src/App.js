import './App.css';
import React, { useState } from 'react';


function sendChange() {

}

function sendCreate() {

}

function sendDelete(obj) {

}

function AddButton(props) {
  function clickHandle() {
    if(props.flag) {
      props.setFlag(false);
      props.setPropProduct({});
    }
  }
  return <button onClick={clickHandle}>{props.flag ? 'Изменить' : 'Добавить'}</button>
}

function Card(props) {
  function clickHandle() {
    if(!props.flag) {
      props.setFlagChanged(true);
      props.setPropProduct({id : props.id, name : props.name, category: props.category, price : props.price});
    }
  }

  function clickDelete() {
    sendDelete({id : props.id});
    props.setPropProduct({});
    props.setFlagChanged(false);
  }

  return (
    <div>
      <span>{props.id}</span>
      <span>{props.name}</span>
      <span>{props.category}</span>
      <span>{props.price}</span>
      <button onClick={clickDelete}>Удалить</button>
      <button onClick={clickHandle}>Изменить</button>
    </div>
  );
}

function App() {

  const [propProduct, setPropProduct] = useState({});
  const [flagChange, setFlagChanged] = useState();

  return (
    <div>
      <div>
        <div>
          <div>
            <label for="name">Название:</label>  
            <input value={propProduct.name != null ? propProduct.name : ''} id="name" type="text"></input>
          </div>
          <div>
            <label for="category">Категория</label>
            <select value={propProduct.category != null ? propProduct.category : ''} id="category" datalist="categories">
              <option>opt1</option>
              <option>opt2</option>
            </select>
          </div>
          <div>
            <label for="price">Цена:</label>  
            <input value={propProduct.price != null ? propProduct.price : ''} id="price" type="number" min="1" step="any"></input>
          </div>
          <div>
            <AddButton flag={flagChange} setFlag={setFlagChanged} setPropProduct={setPropProduct}/>
          </div>
        </div>

        <div>
          <Card id="1" name="abc" category="MILK" price="123456" setFlagChanged={setFlagChanged} setPropProduct={setPropProduct}/>
        </div>
      </div>
    </div>
  );
}

export default App;
