import React, {useState} from "react";
import style from "../../Main/Users/users.module.css";

const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChange, numberOfPages = 5}) => {
	const [portionNumber, setPortionNumber] = useState(1)
	let pagesCount = Math.ceil(totalUsersCount / pageSize);
	let pages = [];
	
	function changePortion(value) {
		setPortionNumber(portionNumber + value)
	}
	
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}
	return (
		<div>
			<button onClick={() => changePortion(-1)} disabled={portionNumber <= 1}>Prev</button>
			{pages.map(el => (el > (portionNumber - 1) * numberOfPages && el <= portionNumber * numberOfPages)
				? (
					<span className={currentPage === el && style.active} onClick={() => onPageChange(el)}>
						{el}{' '}
					</span>)
				: null)}
			<button onClick={() => changePortion(1)}
					disabled={portionNumber >= Math.floor(pagesCount / numberOfPages)}>Next
			</button>
		</div>)
}

export default Paginator;