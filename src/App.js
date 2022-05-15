import './App.css';
import Card from './components/Card-component/Card';
import Content from './components/Content-component/Content';
import Header from './components/Header-component/Header';
import data from "./data"

function App() {

  const cards = data.map(item => {
    return (
      <Card
        key={item.id}

        // object props (Need to add item.{fieldname} to use at desination)
        // item={item}

        // spead props
        {...item}
      />
    )
  })

  return (
    <div className="App">
      <Header />
      <Content />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  );
}

export default App;
