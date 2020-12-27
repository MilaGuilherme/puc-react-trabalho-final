import './app.css';
import { Resources } from '../resources'
import { Spellbook } from '../spellbook'

function App() {
  return (
    <>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossOrigin="anonymous"></link>
      <div className="App">
        <header>
          <h1>DnD 5e</h1>
        </header>
        <main>
          <div className="sidebar">
            <Resources />
          </div>
          <div className="mainContent">
            <Spellbook />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
