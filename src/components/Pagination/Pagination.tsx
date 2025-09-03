import React from 'react'
import { StylesPagination } from './Pagination.styled'
import { ChevronLeft, ChevronRight } from "lucide-react";

function Pagination() {
  return (
    
    <StylesPagination>
        <div className="content-section">
            <div className="pagination">
                <div><ChevronLeft/></div>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div><ChevronRight/></div>
            </div>
        </div>
    </StylesPagination>
  )
}

export default Pagination