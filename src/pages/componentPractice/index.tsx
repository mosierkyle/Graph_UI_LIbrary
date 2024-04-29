import { useState } from 'react';
import Name from './components/name';
import LinkedImage from './components/image';
import Sections from './components/sections';
import TextBox from './components/textBox';
import Delete from './components/delete';
import List from './components/list';
import '../../App.css';
import NavBar from '../navBar';

//Index page containing other component tasks
export type ComponentType =
  | 'Name'
  | 'LinkedImage'
  | 'Sections'
  | 'TextBox'
  | 'Delete'
  | null;

const Task1 = () => {
  const [showComponent5, setShowComponent5] = useState<boolean>(true);
  const [selectedComponent, setSelectedComponent] =
    useState<ComponentType>(null);

  return (
    <div>
      <NavBar />
      <div className="task1">
        <div className="list">
          <List
            setSelectedComponent={setSelectedComponent}
            selectedComponent={selectedComponent}
          />
        </div>
        <div className="components">
          <Name selectedComponent={selectedComponent} />
          <LinkedImage selectedComponent={selectedComponent} />
          <Sections selectedComponent={selectedComponent} />
          <TextBox selectedComponent={selectedComponent} />
          {showComponent5 && (
            <Delete
              selectedComponent={selectedComponent}
              setShowComponent5={setShowComponent5}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Task1;
