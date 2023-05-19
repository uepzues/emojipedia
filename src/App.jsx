import Card from "./components/Card";
import Header from "./components/Header";
import Footer from "./components/Footer";
import emojipedia from "./components/docs";

function createEntry(eTerm) {
  return (
    <Card
      key={eTerm.id}
      emoji={eTerm.emoji}
      name={eTerm.name}
      meaning={eTerm.meaning}
    />
  );
}

function App() {
  return (
    <>
      <div>
        <Header />
        <div className="card-group">{emojipedia.map(createEntry)}</div>
        <Footer />
      </div>
    </>
  );
}

export default App;
