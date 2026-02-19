import { useState } from "react";
import AddForm from "./components/AddForm.jsx";
import ShoppingList from "./components/ShoppingList.jsx";

function App() {
  const [items, setItems] = useState([
    { id: 1, name:"Melk", quantity: 2, purchased: false },
    { id: 2, name:"Egg", quantity: 1, purchased: true}
  ]);

  function toogleItem(id) {
  setItems(
    items.map((item) =>
      item.id === id
        ? { ...item, purchased: !item.purchased }
        : item
    )
  );
}
  function change(id,value){
    if (value < 1) return;
     setItems(
      items.map((item) =>
        item.id === id
         ? { ...item, quantity: value}
         : item
    )
     )
  }

  function addItem(name, quantity) {
    const newItem = {
      id: date.now(),
      name,
      quantity,
      purchased: false
    }
    setItems([newItem, ...items])
  }

  return (
    <main>
      <section>
        <h1>Handleliste</h1>

        <AddForm />
        <ShoppingList 
        items={items}
        toogleItem ={toogleItem}
        change ={change} />
      </section>
    </main>
  )
}


export default App
