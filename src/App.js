import './App.css';
import CookieNotice from 'react-cookienotice'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Сайт</h1>
      </header>
      <CookieNotice
        acceptButtonLabel="Разбрах"
        readMoreButtonLabel="Ама искам бисквитки"
        readMoreButtonLink="http://armenskipop.com/"
        cookieTextLabel="Този сайт не използва бисквиди."
        cookieExpiration="1"
        darkTheme="true"
      />
    </div>
  );
}

export default App;
