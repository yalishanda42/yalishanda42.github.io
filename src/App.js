import './App.css';
import CookieNotice from 'react-cookienotice'
import { SocialIcon } from 'react-social-icons';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Сайт</h1>
        <div>
          <SocialIcon className="socialicon" url="https://github.com/allexks"/>
          <SocialIcon className="socialicon" url="https://www.linkedin.com/in/alexander-ignatov-053b53b3/"/>
          <SocialIcon className="socialicon" url="https://reddit.com/u/allexks"/>
        </div>
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
