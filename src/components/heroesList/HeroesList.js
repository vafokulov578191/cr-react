// Задача для этого компонента:
// При клике на "крестик" идет удаление персонажа из общего состояния
// Усложненная задача:
// Удаление идет и с json файла при помощи метода DELETE

import { useDispatch, useSelector } from "react-redux";
import Spinner from "../spinner/Spinner";
import HeroesListItem from '../heroesListItem/HeroesListItem'
import { useEffect } from "react";
import { fetchHeroes } from "../../store/heroesThunk";

const HeroesList = () => {
    const {heroes, status} = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchHeroes())
    }, [])


    if (status === "loading") {
        return <Spinner/>;
    } else if (status === "error") {
        return <h5 className="text-center mt-5">Ошибка загрузки</h5>
    }

    const renderHeroesList = (arr) => {
        if (arr.length === 0) {
            return <h5 className="text-center mt-5">Героев пока нет</h5>
        }

        return arr.map(({id, ...props}) => {
            return <HeroesListItem key={id} id={id} {...props}/>
        })
    }

    const elements = renderHeroesList(heroes);
    return (
        <ul>
            {elements}
        </ul>
    )
}

export default HeroesList;