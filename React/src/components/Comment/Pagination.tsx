import React from "react";
import {PaginationProps} from "../../model/Comment.ts";

const Pagination: React.FC<PaginationProps> = ({itemsPerPage, totalItems, currentPage, paginate }) => {
    const pageNumbers = [];

    for (let i=1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div>
            <ul>
                {pageNumbers.map(number => (
                    <li key={number}>
                        <button onClick={() => paginate(number)}>{number}</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Pagination;