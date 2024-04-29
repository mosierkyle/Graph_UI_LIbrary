import { useState } from 'react';
import '../../../App.css';
import { ComponentType } from '../../navBar/index';

//Working with state component
interface NameProps {
  selectedComponent: ComponentType;
}

const Name = ({ selectedComponent }: NameProps) => {
  const [count, setCount] = useState<number>(0);

  const handleCountChange = (change: number) => {
    setCount((prev) => prev + change);
  };

  return (
    <div
      key={`component-name`}
      className={`name component${
        selectedComponent === 'Name' ? '-selected' : ''
      }`}
    >
      <h2 className="nameHeader">Graph UI Library</h2>
      <div className="countDiv">
        <div className="countButton" onClick={() => handleCountChange(-1)}>
          -
        </div>
        <div className="count">{count}</div>
        <div className="countButton" onClick={() => handleCountChange(1)}>
          +
        </div>
      </div>
    </div>
  );
};

export default Name;
