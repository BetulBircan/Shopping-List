import { useState } from "react"

const data = [
  {
    id : 1,
    title : "Yumurta",
    quantity : 10,
    completed : true
  },
  {
    id : 2,
    title : "Ekmek",
    quantity : 2,
    completed : true
  },
  {
    id : 3,
    title : "Süt",
    quantity : 1,
    completed : false
  },
  {
    id : 4,
    title : "Et",
    quantity : 1,
    completed : true
  },
  {
    id : 5,
    title : "Zeytin",
    quantity : 1,
    completed : false
  },

]

function App() {
  
  const [list, setList] = useState(data)
  // const [list, setList] = useState([])
  function handleAddItem(listItem) {
    setList((list) => [...list,listItem])
  }

  function handleDeleteItem(id) {
    setList(list => list.filter(item => item.id !== id))
  }

  return (
   <div className="app">
      <Header />
      <Form onAddListItem = {handleAddItem} />
      <List list={list} onDeleteItem={handleDeleteItem}/>
      <Summary />
   </div>
  )
}

function Header() {
  return (
    <h1>🛒 Shopping List</h1>
  )
}

//LİSTEYE ÜRÜN EKLEME/ SİLME
function Form({onAddListItem}) {

  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const item = {id : Date.now(), title,quantity, completed : false}
    console.log(item);
    setTitle('');
    setQuantity(1);
    onAddListItem(item)

  }

  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <input type="text" placeholder="Ürün adı giriniz" value={title} onChange={(e) =>setTitle(e.target.value)}/>
      <select value = {quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
        {/* Birden 10 a kadar sayı üretir ama array from girilen string i elemaları parçalayarak diziye çevirir burda da 1 den 10 a kadar sayı sizisi üretiyor sonta da mapleyip yazdırıyoruz tek tek */}
        {
          Array.from({length:10},(v,i) => i + 1).map(num=>
            <option value={num} key={num}>{num}</option>
          )
        }
      </select>
      <button type="submit">Ekle</button>
    </form>
  )
}

function List({list, onDeleteItem}) {
  return (
    <>
    {
      list.length > 0 ? (
         <div className="list">
      <ul>
        {list.map((listItem,index)=>( <ListItem listItem={listItem} key={index} onDeleteItem={onDeleteItem}/> ))}
      </ul>
    </div>
      ) : (
        <p>Sepetinizde ürün bulunmamaktadır.</p>
      )
    }
    </>
   
  )
}

function ListItem({listItem, onDeleteItem}) {
  return (
    <li>
      <span style={ listItem.completed ? {textDecoration : 'line-through'} : {textDecoration : 'none'} }> {listItem.quantity} {listItem.title}</span>
      <button onClick={() => onDeleteItem(listItem.id)}>X</button>
    </li>
  )
}

function Summary() {
  return (
    <footer className="summary">
      <p>Alışveriş sepetinizde 10 ürün bulunmaktadır.</p>
    </footer>
  )
}
export default App
