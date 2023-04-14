
function Pagination({ totalPages, currentPage, onPageChange }) {
  const pageNumbers = [];

   for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i); }
     return ( 
     <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}> 
     {pageNumbers.map(pageNumber => (
      <li key={pageNumber} style={{ margin: '0 0.5rem' }}>
       <button style={{ backgroundColor: '#fff', border: '1px solid #ddd', color: '#333', cursor: 'pointer', fontWeight: pageNumber === currentPage ? 'bold' : 'normal', outline: 'none', padding: '0.5rem', textDecoration: 'none', transition: 'background-color 0.3s ease', }} 
       onClick={() => onPageChange(pageNumber)} disabled={pageNumber === currentPage} >
        {pageNumber} </button>
         </li> 
         ))} 
         </ul> );
          }
          export default Pagination