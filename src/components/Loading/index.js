import "./index.scss";

const Loading = ({ Loading }) => {
  return (
    <>
      {Loading && (
        <div className="loading">
          <ion-icon name="refresh-outline"></ion-icon>
          <span>Loading data...</span>
        </div>
      )}
    </>
  );
};

export default Loading;
