import '../../../App.css';
import { ComponentType } from '../../navBar/index';
import { Dispatch, SetStateAction } from 'react';

//Menu component on left hand side of page for component focus
interface ListProps {
  selectedComponent: ComponentType;
  setSelectedComponent: Dispatch<SetStateAction<ComponentType | null>>;
}

const List = ({ selectedComponent, setSelectedComponent }: ListProps) => {
  const components: ComponentType[] = [
    'Name',
    'LinkedImage',
    'Sections',
    'TextBox',
    'Delete',
  ];
  const handleClick = (component: ComponentType) => {
    setSelectedComponent(selectedComponent === component ? null : component);
  };
  return (
    <>
      {components.map((component) => (
        <p
          key={`list-item:${component}`}
          onClick={() => handleClick(component)}
          className={`list-item${
            selectedComponent === component ? '-selected' : ''
          }`}
        >
          {component}
        </p>
      ))}
    </>
  );
};

export default List;
