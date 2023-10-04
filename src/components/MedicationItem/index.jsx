import P from 'prop-types';

const MedicationItem = ({ name, company }) => {
  return (
    <a
      href="#"
      className="list-group-item list-group-item-action bg-primary
        bg-opacity-75 text-white"
      aria-current="true"
    >
      <div className="d-flex w-100 justify-content-between">
        <h3 className="my-3 fs-5 fw-bold">{name}</h3>
      </div>
      <p>{company}</p>
    </a>
  );
};

MedicationItem.propTypes = {
  name: P.string,
  company: P.string,
};

export default MedicationItem;
