import { useState } from "react"
export default function Form({onAddListItem, onClearList}) {
  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if(title) {
      const item = {id : Date.now(), title,quantity, completed : false}
      setTitle('');
      setQuantity(1);
      onAddListItem(item)
    }
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
      <button type="submit">➕ Ekle</button>
      <button type="button" onClick={onClearList}>🗑️ Temizle</button>
    </form>
  )
}