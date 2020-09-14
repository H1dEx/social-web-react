import React, {useState} from "react";
import style from "../../Main/Users/users.module.css";

type PropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onPageChange: (pageNumber: number) => void
    portionSize?: number
}

const Paginator: React.FC<PropsType> = ({totalItemsCount, pageSize, currentPage, onPageChange, portionSize = 8}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages: Array<number> = [];
    let [showedLinks, setShowedLinks] = useState(0)

    function nextPortion() {
        setShowedLinks(showedLinks + 1)
    }

    function prevPortion() {
        setShowedLinks(showedLinks - 1)
    }

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (<div>
        <button disabled={showedLinks === 0} onClick={prevPortion}>Prev</button>
        {pages.filter((el, i) => (i + 1) <= (showedLinks + 1) * portionSize && (i + 1) > showedLinks * portionSize).map(el => (
            <span className={currentPage === el && style.active || ""} onClick={() => onPageChange(el)}
                  key={el}>{el} </span>))}
        <button disabled={showedLinks * portionSize >= pagesCount - portionSize} onClick={nextPortion}>Next</button>
    </div>)
}

export default Paginator;