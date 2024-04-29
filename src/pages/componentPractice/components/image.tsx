import '../../../App.css';
import calpoly from '../../../../public/calpoly.jpg';
import { ComponentType } from '../../navBar/index';

//Linked component that takes your to source of photo on click
interface LinkedImageProps {
  selectedComponent: ComponentType;
}

const LinkedImage = ({ selectedComponent }: LinkedImageProps) => {
  return (
    <div
      key={`component-image`}
      className={`linkedimage component${
        selectedComponent === 'LinkedImage' ? '-selected' : ''
      }`}
    >
      <a
        target="_blank"
        className="link"
        href="https://twitter.com/CalPoly/status/1183575156280758272"
      >
        <img className="linkedImage" src={calpoly} alt="image" />
      </a>
    </div>
  );
};

export default LinkedImage;
