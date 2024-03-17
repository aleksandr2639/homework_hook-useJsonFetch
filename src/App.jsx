import './App.css';
import Data from './components/Data';
import Loading from './components/Error';
import Error from './components/Loading';

const  App = () => {

  return (
    <>
    <Data/>
    <Loading/>
    <Error/>
    </>
  )
}

export default App;
