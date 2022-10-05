import HeroesList from '../heroesList/HeroesList';
import HeroesAddForm from '../heroesAddForm/HeroesAddForm';
import HeroesFilters from '../heroesFilters/HeroesFilters';
import './app.scss';
import { useState } from 'react';
import { useSelector } from 'react-redux';


const App = () => {
    let [filter, setFilter] = useState('')
    const state = useSelector(state => state.heroes)
    
        let filtered = state.filter(item => {
            if(filter === "all") {
                return item
            } else if(item.element.includes(filter)) {
                return item
            }
        })
        console.log(filtered);


    return (
        <main className="app">
            <div className="content">
                <HeroesList arr={filtered}/>
                <div className="content__interactive">
                    <HeroesAddForm/>
                    <HeroesFilters finded={setFilter} filter={filter} />
                </div>
            </div>
        </main>
    )
}

export default App;