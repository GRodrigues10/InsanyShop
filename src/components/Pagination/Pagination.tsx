import React from 'react'
import { StylesPagination } from './Pagination.styled'
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  setPage: (page: number) => void;
  currentPage: number;
  totalPages: number; 
}

function Pagination({ setPage, currentPage, totalPages }: PaginationProps) {

  const alerts = () => {
    alert('Não existem mais produtos!');
  };

  return (
    <StylesPagination>
      <div className="content-section">
        <div className="pagination">
          <div onClick={() => currentPage > 1 ? setPage(currentPage - 1) : alerts()}><ChevronLeft/></div>
          <div className={currentPage === 1 ? 'selected' : ''} onClick={() => 1 <= totalPages ? setPage(1) : alerts()}>1</div>
          <div className={currentPage == 2 ? 'selected' : ''} onClick={() => 2 <= totalPages ? setPage(2) : alerts()}>2</div>
          <div className={currentPage == 3 ? 'selected' : ''} onClick={() => 3 <= totalPages ? setPage(3) : alerts()}>3</div>
          <div onClick={() => 4 <= totalPages ? setPage(4) : alerts()}>4</div>
          <div onClick={() => 5 <= totalPages ? setPage(5) : alerts()}>5</div>
          <div onClick={() => currentPage < totalPages ? setPage(currentPage + 1) : alerts()}><ChevronRight/></div>
        </div>
      </div>
    </StylesPagination>
  )
}

export default Pagination;
