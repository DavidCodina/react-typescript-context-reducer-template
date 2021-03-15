import ReactDOM     from 'react-dom';
import { Provider } from './context/Context';
import App          from './App';


ReactDOM.render(<Provider><App /></Provider>, document.querySelector('#root'));
