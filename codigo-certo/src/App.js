import { Header } from './sections/Header';
import './App.css';

import { Presentation } from './sections/Presentation';
import { Projects } from './sections/Projects';
import { Objetivos } from './sections/Objetivos';

function App() {
  return (

    <div className="App">
      <Header/>
      <Presentation/>
      <Projects/>
      <Objetivos/>
    </div>
  );
}

export default App;
