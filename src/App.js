import './App.css';
import Card from './components/Card-component/Card';
import Content from './components/Content-component/Content';
import Header from './components/Header-component/Header';
import data from "./data"

function App() {

  const cards = data.map(item => {
    return (
      <Card
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
        openSpots={item.openSpots}
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
