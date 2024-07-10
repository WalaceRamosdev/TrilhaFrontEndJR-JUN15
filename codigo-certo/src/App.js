import { Header } from './sections/Header';
import './App.css';

import { Presentation } from './sections/Presentation';
import { Projects } from './sections/Projects';

function App() {
  return (

    <div className="App">
      <Header/>
      <Presentation/>
      <Projects/>
    </div>
  );
}

export default App;
