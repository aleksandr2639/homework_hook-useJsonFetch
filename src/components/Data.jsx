import useJsonFetch from "./useJsonFetch";
const _urlData = 'http://localhost:7070/'

const Data = () => {
    const { data } = useJsonFetch(_urlData, 'data');

    return (
      <div className="data">
          <h1>Успешное получение данных</h1>
          {data && <p>Status: {data.status}</p>}
      </div>
    )
  }

export default Data;