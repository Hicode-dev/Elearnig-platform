import './App.css';
import AudioPlayer from './pages/AudioPlayer';
import './main.css'
import PlayerState from './context/playerState';
function App() {
  return (
<PlayerState >
<div className="App">
<AudioPlayer />
    </div>
</PlayerState>
  );
}

export default App;
