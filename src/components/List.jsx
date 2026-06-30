import ListItem from "./ListItem"
export default function List({list, onDeleteItem, onUpdateItem}) {
  return (
    <>
    {
      list.length > 0 ? (
         <div className="list">
      <ul>
        {list.map((listItem,index)=>( <ListItem listItem={listItem} key={index} onDeleteItem={onDeleteItem} onUpdateItem={onUpdateItem}/> ))}
      </ul>
    </div>
      ) : (
        <div className="list">
           <p>Sepetinizde ürün bulunmamaktadır.</p>
        </div>
       
      )
    }
    </>
   
  )
}