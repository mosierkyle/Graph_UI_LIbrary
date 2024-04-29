import { Dispatch, SetStateAction } from 'react';
import { ComponentType } from '../../navBar/index';

//Removable component from UI
interface DeleteProps {
  setShowComponent5: Dispatch<SetStateAction<boolean>>;
  selectedComponent: ComponentType;
}

const Delete = ({ setShowComponent5, selectedComponent }: DeleteProps) => {
  const handleDelete = () => {
    setShowComponent5((prevState) => !prevState);
  };

  return (
    <div
      key={`component-delete`}
      className={`delete component${
        selectedComponent === 'Delete' ? '-selected' : ''
      }`}
    >
      <button className="deleteButton" type="button" onClick={handleDelete}>
        Delete Component
      </button>
    </div>
  );
};

export default Delete;
