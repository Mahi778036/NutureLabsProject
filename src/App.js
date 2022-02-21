
import './App.css';
import Last from './components/Last';
import Middle from './components/Middle';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="App">
      <div className="top-line">
      Lorem Ipsum is simply dummy text of the printing
      </div>
      <section className="main">
        <SideBar />
        <Middle />
        <Last />
      </section>
    </div>
  );
}

export default App;
