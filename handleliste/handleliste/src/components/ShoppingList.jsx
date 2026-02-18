import ShoppingItem from "./ShoppingItem.jsx"

function ShoppingList({items, toogleItem, change}) {
  return (
    <ul>
      {items.map((item) => (
        <ShoppingItem 
        key= {item.id}
        item={item}
        toogleItem={toogleItem}
        change={change} /> 
      ))}
    </ul>
  )
}

export default ShoppingList