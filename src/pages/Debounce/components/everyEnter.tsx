import '../../../App.css';
import everyCall from '../util';
import { useState } from 'react';

//Component that sends a request every time the user clicks the enter button
const EveryEnter = () => {
  const [userInput, setUserInput] = useState<string>('');
  const [image, setImage] = useState<string | undefined>('');
  const [networkReq, setNetworkReq] = useState<number>(0);

  const updateUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearch = e.target.value;
    setUserInput(newSearch);
  };

  const makeApiCall = async () => {
    const url = await everyCall(userInput);
    setImage(url);
    setNetworkReq((prev) => prev + 1);
  };

  return (
    <div>
      <div className="inputImage">
        <div>
          <p className="debounceTitle">Every enter</p>
          <input
            className="userInput"
            value={userInput}
            type="text"
            onChange={updateUserInput}
          />
          <button type="button" className="navLink" onClick={makeApiCall}>
            Enter
          </button>
        </div>
        <div className="imgDiv">
          <p>Network Requests: {networkReq}</p>
          {image == '' ? (
            <p>no Image</p>
          ) : (
            <img className="gifImage" src={image}></img>
          )}
        </div>
      </div>
    </div>
  );
};
export default EveryEnter;
