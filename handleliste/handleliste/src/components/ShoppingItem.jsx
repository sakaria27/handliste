function ShoppingItem({item, toogleItem, change}) {
    return(
        <li>
      <label>
        <input
          type="checkbox"
          checked={item.purchased}
          onChange={() => toogleItem(item.id)}
        />
        {item.name} - {item.quantity}
      </label>
      <input type="number" 
       value={item.quantity}
       min="1"
       onChange={(e) =>
        change(item.id, Number(e.target.value))
       } 
       /> 
    </li>
  )
}
            
export default ShoppingItem