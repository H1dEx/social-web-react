import React, { useState } from 'react'
import style from '../../Main/Users/users.module.css'

type PropsType = {
  totalUsersCount: number
  pageSize: number
  currentPage: number
  onPageChange: (pageNum: number) => void
  portionSize?: number
}

const Paginator: React.FC<PropsType> = ({
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChange,
  portionSize = 5,
}) => {
  const [portionNumber, setPortionNumber] = useState(1)
  const pagesCount = Math.ceil(totalUsersCount / pageSize)
  const pages = []

  function changePortion(value: number) {
    setPortionNumber(portionNumber + value)
  }

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }
  return (
    <div>
      <button onClick={() => changePortion(-1)} disabled={portionNumber <= 1}>
        Prev
      </button>
      {pages.map((el) =>
        el > (portionNumber - 1) * portionSize &&
        el <= portionNumber * portionSize ? (
          <span
            className={currentPage === el ? style.active : ''}
            onClick={() => onPageChange(el)}
          >
            {el}{' '}
          </span>
        ) : null
      )}
      <button
        onClick={() => changePortion(1)}
        disabled={portionNumber >= Math.floor(pagesCount / portionSize)}
      >
        Next
      </button>
    </div>
  )
}

export default Paginator
