import { useState, useEffect, useMemo } from 'react'
import axios from 'axios'
import Header from './components/ui/Header'
import CharacterGrid from './components/characters/CharacterGrid'
import './App.css';

const App = () => {

  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState("")


  //fetch
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://hp-api.onrender.com/api/characters`)

      //console.log(result.data)
      setItems(result.data)
      setIsLoading(false)
    }
    fetchItems()
  }, [])

  
  //filter
  const setQueryValue = (e) => {
    setQuery(e.target.value)
  }

  const filteredCards = useMemo(() => {
    return items.filter(item => {
      return item.name.toLowerCase().includes(query.toLowerCase())
    })
  }, [items, query])

  return (
    <div className="container">
      <Header
      query={query}
      setQueryValue={setQueryValue} />
     
      <CharacterGrid
        isLoading={isLoading}
        items={items}
        filteredCards={filteredCards} />
    </div>
  );
}

export default App;
