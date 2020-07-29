import React, {useState} from "react";
import "../../Styles/Pagination.css"

const Pagination = () => {
  const [count, setCount] = useState()

  return (
    <nav aria-label="Search results pages">
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link colornumbers  poppins22" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li className="page-item">
          <a className="page-link colornumbers poppins22" href="#">
            1
          </a>
        </li>
        <li className="page-item">
          <a className="page-link colornumbers  poppins22" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
