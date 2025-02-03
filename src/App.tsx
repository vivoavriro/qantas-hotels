import { AppLogo, AppWrapper } from './App.styles';
import { HotelsList } from './pages/hotels-list';
import qantasLogo from './assets/image/qantas-logo.png';

function App() {
  return (
    <AppWrapper>
      <AppLogo src={qantasLogo} />
      <HotelsList />
    </AppWrapper>
  );
}

export default App;
