import NavBar from '../navBar';
import '../../App.css';
import EveryEnter from './components/everyEnter';
import EverySecond from './components/everySecond';
import EveryStroke from './components/everyStroke';

//Index page for Debounce components
const Debounce = () => {
  return (
    <div className="task3">
      <NavBar />
      <div className="debounceSection">
        <EveryStroke />
      </div>
      <div className="debounceSection">
        <EverySecond />
      </div>
      <div className="debounceSection">
        <EveryEnter />
      </div>
    </div>
  );
};
export default Debounce;
