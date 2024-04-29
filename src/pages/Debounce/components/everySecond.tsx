import '../../../App.css';
import everyCall from '../util';
import { useEffect, useState, useRef } from 'react';

//Component that sends a request every second if the user is actively making changes
const EverySecond = () => {
  const [userInput, setUserInput] = useState<string>('');
  const [image, setImage] = useState<string | undefined>('');
  const [networkReq, setNetworkReq] = useState<number>(0);
  const userInputRef = useRef<string>('');

  useEffect(() => {
    const intervalId = setInterval(makeApiCall, 5000);
    return () => clearInterval(intervalId);
  }, []);

  const updateUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearch = e.target.value;
    setUserInput(newSearch);
    userInputRef.current = newSearch;
  };

  const makeApiCall = async () => {
    const currentInput = userInputRef.current;
    if (currentInput.length > 0) {
      const url = await everyCall(currentInput);
      setImage(url);
      setNetworkReq((prev) => prev + 1);
    }
  };

  return (
    <div>
      <div className="inputImage">
        <div>
          <p className="debounceTitle">Every second</p>
          <input
            className="userInput"
            value={userInput}
            type="text"
            onChange={updateUserInput}
          />
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
export default EverySecond;
