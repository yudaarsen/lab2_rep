import './App.css';
import React, { useState, useEffect, createFactory } from 'react';

function sendDelete(id) {
  fetch('http://localhost:8080/rest/product/' + id, {
    method : 'DELETE',
  }).then();
}

function Products(props) {

  function clickHandle(e) {
    if(!props.flag) {
      props.setFlagChanged(true);
      var name;
      var category;
      var price;
      var id;
      id = e.target.parentElement.id.substring(2);
      for(var el of e.target.parentElement.children) {
        if(el.getAttribute('name') == 'name')
          name = el.innerHTML;
        if(el.getAttribute('name') == 'category')
          category = el.innerHTML;
        if(el.getAttribute('name') == 'price')
          price = el.innerHTML;
      }
      props.setName(name);
      props.setCategory(category);
      props.setPrice(price);
      props.setId(id);
    }
  }

  function clickDelete(e) {
    props.setFlagChanged(false);
    sendDelete(e.target.parentElement.id.substring(2));
  }

  const [data, setData] = useState();

  useEffect(() => {
    fetch('http://localhost:8080/rest/products')
    .then(response => response.json())
    .then(data => {
      var result = [];
      for(var it of data) {
        result.push((
          <div id={'id' + it.id}>
            <span>{it.id}</span>
            <span name="name">{it.name}</span>
            <span name="category">{it.category}</span>
            <span name="price">{it.price}</span>
            <button onClick={(e) => clickDelete(e)}>Удалить</button>
            <button onClick={(e) => clickHandle(e)}>Изменить</button>
          </div>
          )
          );
      }
      setData(result);
    })
  }, []);

  
  return <>{data}</>;
}

function sendChange(product) {
  fetch('http://localhost:8080/rest/product', {
      method : 'PATCH',
      body : JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
      }
    }).then();
}

function AddButton(props) {
  function sendCreate(product) {
    fetch('http://localhost:8080/rest/product', {
      method : 'POST',
      body : JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
      }
    }).then();
  }

  function clickHandle() {
    if(props.flag) {
      props.setFlag(false);
      sendChange({id : props.id, name : props.name, category : props.category, price : props.price});
      props.setName();
      props.setCategory('Фрукты');
      props.setPrice();
    } else {
      sendCreate({name : props.name, category : props.category, price : props.price});
    }
  }
  return <button onClick={clickHandle}>{props.flag ? 'Изменить' : 'Добавить'}</button>
}

function Options(props) {

  const [cat, setCat] = useState();

  useEffect(() => {
    fetch('http://localhost:8080/rest/categories', {}).then(response => response.json())
      .then(data => {
        var result = [];
        for(var cat of data) {
          result.push(<option>{cat}</option>);
        }
        setCat(result);
      });
  }, []);

  return <>{cat}</>;
}

function App() {

  const [flagChange, setFlagChanged] = useState();
  const [name, setName] = useState();
  const [category, setCategory] = useState('Фрукты');
  const [price, setPrice] = useState();
  const [id, setId] = useState();

  return (
    <div>
      <div>
        <div>
          <div>
            <label for="name">Название:</label>  
            <input onChange={(e) => setName(e.target.value)} value={name} id="name" type="text"></input>
          </div>
          <div>
            <label for="category">Категория</label>
            <select onChange={(e) => setCategory(e.target.value)} value={category} id="category" datalist="categories">
              <Options/>
            </select>
          </div>
          <div>
            <label for="price">Цена:</label>  
            <input onChange={(e) => setPrice(e.target.value)} value={price} id="price" type="number" min="1" step="any"></input>
          </div>
          <div>
            <AddButton flag={flagChange} setFlag={setFlagChanged} setName={setName} name={name} setCategory={setCategory} category={category} setPrice={setPrice} price={price} setId={setId} id={id}/>
          </div>
        </div>

        <div>
          <Products setFlagChanged={setFlagChanged} setName={setName} name={name} setCategory={setCategory} category={category} setPrice={setPrice} price={price} setId={setId} id={id}/>
        </div>
      </div>
    </div>
  );
}

export default App;
