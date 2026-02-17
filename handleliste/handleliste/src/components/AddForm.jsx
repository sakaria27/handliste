function AddForm() {
  return (
    <form>
      <label>
        Vare
        <input type="text" />
      </label>

      <label>
        Antall
        <input type="number" />
      </label>

      <button type="submit">Legg til vare</button>
    </form>
  )
}

export default AddForm