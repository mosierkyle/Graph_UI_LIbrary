import NavBar from '../navBar';
import '../../App.css';
import useDataPoll from './util';

//Data Polling practice component
const DataPolling = () => {
  // Reacrt hook for polling the data
  const randomQuote = useDataPoll();

  return (
    <div>
      <NavBar />
      <div className="dataPolling">
        {!randomQuote ? (
          <div>Loading...</div>
        ) : (
          <>
            <h1>Random Quote:</h1>
            <p>{randomQuote[0].content}</p>
            <p>- {randomQuote[0].author}</p>
          </>
        )}
      </div>
    </div>
  );
};
export default DataPolling;
