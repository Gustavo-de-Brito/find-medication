import P from 'prop-types';
import { Link } from 'react-router-dom';

const MedicationItem = ({ name, company, processNumber }) => {
  return (
    <Link
      className="list-group-item list-group-item-action bg-primary
        bg-opacity-75 text-white"
      aria-current="true"
      to={`/details/${processNumber}`}
    >
      <div className="d-flex w-100 justify-content-between">
        <h3 className="my-3 fs-5 fw-bold">{name}</h3>
      </div>
      <p>{company}</p>
    </Link>
  );
};

MedicationItem.propTypes = {
  name: P.string,
  company: P.string,
  processNumber: P.string,
};

export default MedicationItem;
