import useJsonFetch from "./useJsonFetch";
const _urlError = 'http://localhost:7070/';

const Error = () => {
    const { error } = useJsonFetch(_urlError, 'error');

    return (
      <div className="data">
          <h1>Ошибка получение данных</h1>
          {error && <p>Ошибка: {error.message}</p>}
      </div>
    )
  }

export default Error;