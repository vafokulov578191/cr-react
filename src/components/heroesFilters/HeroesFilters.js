// Задача для этого компонента:
// Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active
// Изменять json-файл для удобства МОЖНО!
// Представьте, что вы попросили бэкенд-разработчика об этом

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchFilter } from "../../store/filtersThunk";

const HeroesFilters = (props) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchFilter())
    }, [])


    return (
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">Отфильтруйте героев по элементам</p>
                <div className="btn-group">
                    <button onClick={(e) => props.finded(e.target.innerHTML)} className="btn btn-outline-dark active">all</button>
                    <button onClick={(e) => props.finded(e.target.innerHTML)} className="btn btn-danger">fire</button>
                    <button onClick={(e) => props.finded(e.target.innerHTML)} className="btn btn-primary">water</button>
                    <button onClick={(e) => props.finded(e.target.innerHTML)} className="btn btn-success">wind</button>
                    <button onClick={(e) => props.finded(e.target.innerHTML)} className="btn btn-secondary">earth</button>
                </div>
            </div>
        </div>
    )
}

export default HeroesFilters;