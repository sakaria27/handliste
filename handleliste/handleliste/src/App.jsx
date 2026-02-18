import { useState } from "react";
import AddForm from "./components/AddForm.jsx";
import ShoppingList from "./components/ShoppingList.jsx";

function App() {
  const [items, setItems] = useState([
    { id: 1, name:"Melk", quantity: 2, purchased: false },
    { id: 2, name:"Egg", quantity: 1, purchased: true}
  ]);
  return (
    <main>
      <section>
        <h1>Handleliste</h1>

        <AddForm />
        <ShoppingList items={items} />
      </section>
    </main>
  )
}

export default App
