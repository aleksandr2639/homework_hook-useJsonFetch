import useJsonFetch from "./useJsonFetch";
const _urlLoading = 'http://localhost:7070/';

const Loading = () => {
    const { data, isLoading } = useJsonFetch(_urlLoading, 'loading');

    return (
      <div className="loading">
          <h1>Загрузка данных</h1>
          {isLoading ? 'Loading...' : <p>Status: {data.status}</p>}
      </div>
    )
  }

export default Loading;