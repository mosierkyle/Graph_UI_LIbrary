import { useState } from 'react';
import '../../App.css';
import NavBar from '../navBar';
import TreeGraph from './components/dataVisualization';
import { SketchPicker } from 'react-color';

//Index Page for JSON Upload and visualization
const Task2 = () => {
  //eslint-disable-next-line
  const [jsonData, setJsonData] = useState<any>('');
  const [linkColor, setLinkColor] = useState<string>('#b0c4de');
  const [textColor, setTextColor] = useState<string>('#000');
  const [mark, setMark] = useState<'dot' | 'arrow' | 'tick' | 'none'>('dot');
  const [curve, setCurve] = useState<
    'step' | 'step-before' | 'step-after' | 'auto' | 'bump-x'
  >('step');

  const [showLinkColor, setShowLinkColor] = useState<boolean>(false);
  const [showTextColor, setShowTextColor] = useState<boolean>(false);

  //Function that handles the user input and parses the JSON
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const uploadedJson = JSON.parse(e.target?.result as string);

          setJsonData(uploadedJson);
        } catch (error) {
          console.error('Error parsing JSON file:', error);
          setJsonData('');
        }
      };
      reader.readAsText(file);
    }
  };

  //User customization handling

  //eslint-disable-next-line
  const handleLinkColorChange = (color: any) => {
    setLinkColor(color.hex);
  };
  //eslint-disable-next-line
  const handleTextColorChange = (color: any) => {
    setTextColor(color.hex);
  };

  const handleCurveChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurve(
      event.target.value as
        | 'step'
        | 'step-before'
        | 'step-after'
        | 'auto'
        | 'bump-x'
    );
  };

  const handleMarkChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setMark(event.target.value as 'dot' | 'arrow' | 'tick' | 'none');
  };

  return (
    <div className="task2">
      <div className="task2Content">
        <NavBar />
        <div className="fileInput">
          <h1 className="task2Header">Upload JSON File</h1>
          <input
            className="jsonInput"
            type="file"
            name="file"
            id="file"
            onChange={handleFileUpload}
          />
        </div>
        {/* Where data is displayed on page */}
        <div className="data">
          {jsonData != '' ? (
            <TreeGraph
              jsonData={jsonData}
              linkColor={linkColor}
              textColor={textColor}
              curve={curve}
              mark={mark}
            />
          ) : (
            <p>No data...</p>
          )}
        </div>
      </div>
      {/* User customization  */}
      <div className="customization">
        <h2 className="customizationHeader">Edit Display</h2>
        <label className="customizationLabel">Link Color:</label>
        {showLinkColor && (
          <>
            <div
              onClick={() => setShowLinkColor(false)}
              className="chooseColor"
            >
              Close
            </div>
            <SketchPicker color={linkColor} onChange={handleLinkColorChange} />
          </>
        )}
        {!showLinkColor && (
          <div onClick={() => setShowLinkColor(true)} className="chooseColor">
            Choose Color
          </div>
        )}

        <label className="customizationLabel">Text Color:</label>
        {showTextColor && (
          <>
            <div
              onClick={() => setShowTextColor(false)}
              className="chooseColor"
            >
              Close
            </div>
            <SketchPicker color={textColor} onChange={handleTextColorChange} />
          </>
        )}
        {!showTextColor && (
          <div onClick={() => setShowTextColor(true)} className="chooseColor">
            Choose Color
          </div>
        )}

        <label className="customizationLabel">Curve Type:</label>
        <select
          className="customize"
          value={curve}
          onChange={handleCurveChange}
        >
          <option value="step">Step</option>
          <option value="step-before">Step Before</option>
          <option value="step-after">Step After</option>
          <option value="auto">Auto</option>
          <option value="bump-x">Bump X</option>
        </select>

        <label className="customizationLabel">Node Shape:</label>
        <select className="customize" value={mark} onChange={handleMarkChange}>
          <option value="dot">dot</option>
          <option value="arrow">arrow</option>
          <option value="tick">tick</option>
          <option value="none">none</option>
        </select>
      </div>
    </div>
  );
};

export default Task2;
