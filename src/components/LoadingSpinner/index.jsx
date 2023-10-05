import P from 'prop-types';

const LoadingSpinner = ({ isLoading }) => {
  return (
    isLoading && (
      <div
        className="spinner-border text-primary m-auto"
        style={{ width: '6rem', height: '6rem' }}
        role="status"
      >
        <span className="visually-hidden">Carregando...</span>
      </div>
    )
  );
};

LoadingSpinner.propTypes = {
  isLoading: P.bool,
};

export default LoadingSpinner;
