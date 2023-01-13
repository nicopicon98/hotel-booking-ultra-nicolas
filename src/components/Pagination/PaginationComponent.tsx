import classes from './PaginationComponent.module.css'

interface Props {
  hotelsPerPage: number
  totalHotels?: number
  paginate: (pageNumber: number) => void;
}

const PaginationComponent = ({ hotelsPerPage, totalHotels = 0, paginate }: Props) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalHotels / hotelsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className={classes.pagContainer}>
        {pageNumbers.map(number => (
          <li key={number}>
            <button onClick={() => paginate(number)} className={classes["pagContainer__btn"]}>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default PaginationComponent;