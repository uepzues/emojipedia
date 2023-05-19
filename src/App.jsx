import Card from "./components/Card";
import Header from "./components/Header";
import emojipedia from "./components/docs";

function createEntry(eTerm) {
  return (
    <Card
      emoji={eTerm.emoji}
      name={eTerm.name}
      meaning={eTerm.meaning}
      key={eTerm.key}
    />
  );
}

function App() {
  return (
    <>
      <Header />
      <div>{emojipedia.map(createEntry)}</div>
    </>
  );
}

export default App;
