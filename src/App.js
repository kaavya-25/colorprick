import logo from './logo.svg';
import './App.css';
import ColorPicker from './components/color'
function App() {
  const colors = ['RED', 'GREEN', 'BLUE', 'ORANGE', 'BLACK'];
  return (
    <>
    <ColorPicker colors={colors} />
    </>
  );
}

export default App;
