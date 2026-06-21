const list = [
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

  return (
   <div className="app">
      <Header />
      <Form />
      <List />
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
function Form() {
  return (
    <form className="form">
      <input type="text" placeholder="Ürün adı giriniz" />
      <select >
        {/* Birden 10 a kadar sayı üretir ama array from girilen string i elemaları parçalayarak diziye çevirir burda da 1 den 10 a kadar sayı sizisi üretiyor sonta da mapleyip yazdırıyoruz tek tek */}
        {
          Array.from({length:10},(v,i) => i + 1).map(num=>
            <option value="{num}">{num}</option>
          )
        }
      </select>
      <button type="submit">Ekle</button>
    </form>
  )
}

function List() {
  return (
    <div className="list">
      <ul>
        {list.map((listItem,index)=>( <ListItem listItem={listItem} key={index}/> ))}
      </ul>
    </div>
  )
}

function ListItem({listItem}) {
  return (
    <li>
      <span style={ listItem.completed ? {textDecoration : 'line-through'} : {textDecoration : 'none'} }> {listItem.quantity} {listItem.title}</span>
      <button>X</button>
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
