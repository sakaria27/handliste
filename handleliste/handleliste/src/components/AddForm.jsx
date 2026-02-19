import { useState } from "react";

function AddForm({ addItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
  e.preventDefault();

  if (!name.trim() || !quantity) {
    setError("Du må fylle ut begge feltene.");
    return;
  }

  if (Number(quantity) < 1) {
    setError("Antall må være minst 1.");
    return;
  }

  addItem(name.trim(), Number(quantity));

  setName("");
  setQuantity("");
  setError("");
}

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Vare
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label>
        Antall
        <input
          type="number"
          value={quantity}
          min="1"
          onChange={(e) => setQuantity(e.target.value)}
        />
      </label>

      <button type="submit">Legg til vare</button>

      {error && <p>{error}</p>}
    </form>
  );
}

export default AddForm;