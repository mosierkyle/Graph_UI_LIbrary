import { useState } from 'react';
import '../../../App.css';
import { ComponentType } from '../../navBar/index';

//More state practice - component
interface SectionsProps {
  selectedComponent: ComponentType;
}

const Sections = ({ selectedComponent }: SectionsProps) => {
  const [display, setDisplay] = useState<number>(1);

  const handleDisplyChange = (change: number) => {
    setDisplay((display) => display + change);
  };

  return (
    <div
      key={`component-sections`}
      className={`sections component${
        selectedComponent === 'Sections' ? '-selected' : ''
      }`}
    >
      <div className="sectionsDiv">
        {display == 1 && <div className="section">Section 1</div>}
        {display == 2 && <div className="section">Section 2</div>}
        {display == 3 && <div className="section">Section 3</div>}
      </div>
      <div className="buttons">
        {display > 1 && (
          <button onClick={() => handleDisplyChange(-1)} type="button">
            prev
          </button>
        )}
        {display < 3 && (
          <button onClick={() => handleDisplyChange(1)} type="button">
            next
          </button>
        )}
      </div>
    </div>
  );
};

export default Sections;
