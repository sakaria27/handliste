function ShoppingList({items}) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.name} - {item.quantity}
        </li>  
      ))}
    </ul>
  )
}

export default ShoppingList