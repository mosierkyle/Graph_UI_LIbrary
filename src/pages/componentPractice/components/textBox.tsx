import { ChangeEvent, useState } from 'react';
import { ComponentType } from '../../navBar/index';

// More state practice - component
interface TextBoxProps {
  selectedComponent: ComponentType;
}

const TextBox = ({ selectedComponent }: TextBoxProps) => {
  const [text, setText] = useState<string>('Component Title');

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div
      key={`component-textbox`}
      className={`textbox component${
        selectedComponent === 'TextBox' ? '-selected' : ''
      }`}
    >
      <h3 className="textHeading">{text}</h3>
      <div className="inputDiv">
        <input
          className="input"
          name="text"
          type="text"
          onChange={handleTextChange}
          value={text}
        />
      </div>
    </div>
  );
};

export default TextBox;
