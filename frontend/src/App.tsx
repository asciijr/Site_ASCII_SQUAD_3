import Header from "./components/organisms/Header";
import ConnectionCard from "./components/organisms/ConnectionCard";

function App() {
  return (
    <>
      <Header />
      <main style={{ background: "#1756ae", padding: 24 }}>
        <h1>Tecnologia para o seu próximo passo.</h1>
        <div style={{ maxWidth: 510 }}>
          <ConnectionCard />
        </div>
      </main>
    </>
  );
}

export default App;
