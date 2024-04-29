import '../../../App.css';
import everyCall from '../util';
import { useState } from 'react';

// Component that sends request everytime the user enters / deletes a key stroke
const EveryStroke = () => {
  const [userInput, setUserInput] = useState<string>('');
  const [networkReq, setNetworkReq] = useState<number>(0);
  const [image, setImage] = useState<string>('');

  const updateUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearch = e.target.value;
    setUserInput(newSearch);
    makeApiCall(newSearch);
    console.log(newSearch.length);
  };

  const makeApiCall = async (input: string) => {
    const url = await everyCall(input);
    setImage(url);
    setNetworkReq((prev) => prev + 1);
  };

  return (
    <div>
      <div className="inputImage">
        <div>
          <p className="debounceTitle">Every stroke</p>
          <input
            className="userInput"
            value={userInput}
            type="text"
            onChange={updateUserInput}
          />
        </div>
        <div className="imgDiv">
          <p>Network Requests: {networkReq}</p>
          {image?.length > 1 ? (
            <img className="gifImage" src={image}></img>
          ) : (
            <p>no Image</p>
          )}
        </div>
      </div>
    </div>
  );
};
export default EveryStroke;
