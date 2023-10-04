import './view-container.css';
import P from 'prop-types';

const ViewContainer = ({ children }) => {
  return (
    <div className="view-container bg-primary bg-opacity-75">
      <div
        className="content mx-auto p-1 p-xl-4 shadow-lg rounded-4 bg-white
        border-bottom border-white border-5 d-flex flex-column"
      >
        {children}
      </div>
    </div>
  );
};

ViewContainer.propTypes = {
  children: P.node,
};

export default ViewContainer;
