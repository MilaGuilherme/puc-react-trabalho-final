import './app.css';
import { Resources } from '../resources'

function App() {
  return (
    <>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous"></link>
      <div className="App">
        <header>
        <h1>DnD 5e</h1>
        </header>
        <main>
          <Resources/>
        </main>
      </div>
    </>
  );
}

export default App;
