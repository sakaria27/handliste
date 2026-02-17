import AddForm from " ./components/AddForm.jsx";
import ShoppingListe from " ./components/ShoppingListe.jsx";
 
function App(){
    return(
        <main>
            <section>
                <h1>Handleliste</h1>
                <AddForm />
                <ShoppingListe />
            </section>
        </main>
    );
}

export default App;