
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from '@material-ui/core';
import './App.css';
import CategoryCard from './Components/CategoryCard/CategoryCard';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <CategoryCard></CategoryCard>
    </div>
  );
}

export default App;
