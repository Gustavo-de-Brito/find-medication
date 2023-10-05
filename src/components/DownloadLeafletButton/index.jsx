import P from 'prop-types';

const DownloadLeafletButton = ({ isLoading, leafletCode }) => (
  <a
    href={`https://bula.vercel.app/pdf?id=${leafletCode}`}
    target="_blanck"
    className="btn btn-primary rounded-0 py-3 d-flex flex-column justify-content-center"
    disabled={isLoading}
  >
    <p className="fw-semibold fs-5"> Download da Bula</p>
    <i className="bi bi-cloud-arrow-down-fill fs-3 me-2 lh-1" />
  </a>
);

DownloadLeafletButton.propTypes = {
  isLoading: P.bool,
  leafletCode: P.string,
};

export default DownloadLeafletButton;
