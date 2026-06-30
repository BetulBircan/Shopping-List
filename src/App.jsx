import { useState } from "react"
import Header from "./components/Header"
import Form from "./components/Form"
import List from "./components/List"
import Summary from "./components/Summary"
import { data } from "./data"

function App() {
  
  const [list, setList] = useState(data)
  // const [list, setList] = useState([])
  function handleAddItem(listItem) {
    setList((list) => [...list,listItem])
  }

  function handleDeleteItem(id) {
    setList(list => list.filter(item => item.id !== id))
  }

  function handleUpdateItem(id) {
    setList(list => list.map(listItem => listItem.id == id ? {...listItem, completed: !listItem.completed} : listItem))
  }

  function handleClearList() {
    const onay = window.confirm("Listedeki tüm ürünleri silmek istediğinizden emin misiniz")
    if(onay) {
      setList([]);
    }
  }

  return (
   <div className="app">
      <Header />
      <Form onAddListItem = {handleAddItem} onClearList = {handleClearList}/>
      <List list={list} onDeleteItem={handleDeleteItem} onUpdateItem = {handleUpdateItem}/>
      <Summary list = {list}/>
   </div>
  )
}


export default App
