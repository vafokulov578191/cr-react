
// Задача для этого компонента:
// Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active
// Изменять json-файл для удобства МОЖНО!
// Представьте, что вы попросили бэкенд-разработчика об этом

import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchFilter } from "../../store/filtersThunk";

const HeroesFilters = () => {
    const dispatch = useDispatch()
    let [all, setAll] = useState('')
    let [fire, setFire] = useState('')
    let [water, setWater] = useState('')
    let [wind, setWind] = useState('')
    let [earth, setEarth] = useState('')

    useEffect(() => {
        dispatch(fetchFilter())
    }, [])

    return (
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">Отфильтруйте героев по элементам</p>
                <div className="btn-group">
                    <button onClick={(e) => setAll(e.target.innerHTML)} className="btn btn-outline-dark active">Все</button>
                    <button onClick={(e) => setFire(e.target.innerHTML)} className="btn btn-danger">Огонь</button>
                    <button onClick={(e) => setWater(e.target.innerHTML)} className="btn btn-primary">Вода</button>
                    <button onClick={(e) => setWind(e.target.innerHTML)} className="btn btn-success">Ветер</button>
                    <button onClick={(e) => setEarth(e.target.innerHTML)} className="btn btn-secondary">Земля</button>
                </div>
            </div>
        </div>
    )
}

export default HeroesFilters;