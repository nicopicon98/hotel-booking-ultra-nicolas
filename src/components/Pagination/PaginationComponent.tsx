interface Props {
  hotelsPerPage: number
  totalHotels: number
  paginate: (pageNumber: number) => void;
}

const PaginationComponent = ({ hotelsPerPage, totalHotels, paginate }: Props) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalHotels / hotelsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul style={{display: 'flex', justifyContent: 'center', gap: '2px'}}>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <button onClick={() => paginate(number)} style={{backgroundColor: '#7b1fa2', border: 'none'}}>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default PaginationComponent;