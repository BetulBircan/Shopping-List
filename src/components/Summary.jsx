export default function Summary({list}) {
  if(list.length === 0) {
    return (
      <footer className="summary">Alışveriş listenizi hazırlamaya başlayabilirsiniz</footer>
    )
  }
  const listCount = list.length;
  const completedItemsCount = list.filter(listItem => listItem.completed).length
  return (
    <footer className="summary">
      {listCount === completedItemsCount ? 
      <p>Alışverişi tamamladınız . 😍</p> :
       <p>Alışveriş sepetinizde {listCount} üründen {completedItemsCount} tanesini aldınız.</p>
      }
     
    </footer>
  )
}