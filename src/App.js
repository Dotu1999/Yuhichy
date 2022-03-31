import logo from "./logo.svg";
import "./App.css";
import { Header } from "./Views/header";
import { Fooder } from "./Views/fooder";
import { Content } from "./Views/content";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./css/custom.css";
function App() {
  return (
    <div className="App container-fluid">
      <Header></Header>
      <Content />
      <Fooder></Fooder>
    </div>
  );
}

export default App;
