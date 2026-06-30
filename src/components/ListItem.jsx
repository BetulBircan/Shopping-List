export default function ListItem({listItem, onDeleteItem, onUpdateItem}) {
  return (
    <li>
      <input type="checkbox" checked={listItem.completed} onChange={() => onUpdateItem(listItem.id)}/>
      <span style={ listItem.completed ? {textDecoration : 'line-through'} : {textDecoration : 'none'} }> {listItem.quantity} {listItem.title}</span>
      <button onClick={() => onDeleteItem(listItem.id)}>X</button>
    </li>
  )
}