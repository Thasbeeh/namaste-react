import { useRouteError } from 'react-router-dom';

const Error = () => {
  const err = useRouteError();
  console.log(err.status);

  return (
    <div className="error-container">
      <h1>Oops!</h1>
      <h3>Something went wrong</h3>
      <h3>
        {err.status}: {err.statusText}
      </h3>
    </div>
  );
};

export default Error;
