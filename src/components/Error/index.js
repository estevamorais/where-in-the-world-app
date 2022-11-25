import "./index.scss";

const Error = ({ error }) => {
  return (
    <>
      {error && (
        <div className="error">
          <p>{error}</p>
        </div>
      )}
    </>
  );
};

export default Error;
