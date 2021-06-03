import {useState, useEffect } from 'react'
import {CardList} from './components/card-list/cardList'
import {SearchBox} from './components/search-box/searchbox'
import './App.css';



function App() {
  const [monsters, setMonsters] = useState([])

  const [searchField, setSearchField] = useState('')

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setMonsters(users))
  }, [])

 const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))

  return (
    <div className="App">
      <h1>Monster Rolodex</h1>
      <SearchBox 
        handleChange={e => setSearchField(e.target.value)} 
        placeholder="Search Monster"
      />
      <CardList monsters={filteredMonsters}/>
    </div>
  );
}

export default App;
