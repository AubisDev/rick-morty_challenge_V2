import { useEffect } from 'react'
import ReactPaginate from 'react-paginate';
import chars from './../styles/chars.module.css';
interface PaginationProps {
  page: number;
  setPage: (page:number) => void;
}


export const Pagination = ({ page,setPage }: PaginationProps) => {

  const handlePagination = (e:any ) => {
    setPage(e.nextSelectedPage +  1); 
  }

  useEffect(() => {
    window.scrollTo({top:0, behavior: 'smooth'});
    
  }, [page])
  
  return (
    <>
      <ReactPaginate
        onClick={ (e) => handlePagination(e)}
        breakLabel="..."
        className={chars.pagination}
        initialPage={page-1}
        nextLabel={`${page < 42 ? ' next >' : ''}`}
        
        pageRangeDisplayed={5}
        pageCount={42}
        previousLabel={`${page > 1 ? "< previous" : ''}`}
      />
    </>
  )
}

export default Pagination