import { Header } from './sections/Header';
import './App.css';

import { Presentation } from './sections/Presentation';
import { Projects } from './sections/Projects';
import { Objetivos } from './sections/Objetivos';
import { Hobbies } from './sections/Hobbies';
import { Rodape } from './sections/Rodape';
import { MenuMobile } from './sections/MenuMobile';

function App() {
  return (

    <div className="App">
      <Header/>
      <Presentation/>
      <Projects/>
      <Objetivos/>
      <Hobbies/>
      <Rodape/>
      <MenuMobile/>
    </div>
  );
}

export default App;
