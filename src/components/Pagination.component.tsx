import ReactPaginate from 'react-paginate';
import chars from './../styles/chars.module.css';

interface PaginationProps {
  page: number;
  handlePagination: (e:any) => void;
}

export const Pagination = ({ page, handlePagination}:PaginationProps) => {
  
  return (
    <>
      <ReactPaginate
        onClick={ (e) => handlePagination(e)}
        breakLabel="..."
        className={chars.pagination}
        initialPage={page-1}
        nextLabel={`${page < 42 ? ' Next >' : ''}`}
        pageRangeDisplayed={5}
        pageCount={42}
        previousLabel={`${page > 1 ? "< Previous" : ''}`}
        pageClassName="page"
        activeClassName="selected"
      />
    </>
  )
}

export default Pagination