import React from 'react';
import './App.css';
import CookieNotice from 'react-cookienotice'
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import 'react-awesome-button/dist/themes/theme-c137.css';
import { SocialIcon } from 'react-social-icons';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nothingButtonClicked: false,
    };

    this.clickNothingButton = () => {
      this.setState({
        nothingButtonClicked: true
      });
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Сайт</h1>
          <p>Това е сайт.</p>
          <div className="App-nothing-button">
            <AwesomeButton
              type="primary"
              ripple
              onPress={this.clickNothingButton}
            >
              {
              this.state.nothingButtonClicked
                ? "Мерси"
                : "Кликни ме"
              }
            </AwesomeButton>
          </div>
          <div>
            <p>А това съм аз:</p>
            <SocialIcon target="_blank" className="App-social-icon" url="https://github.com/allexks"/>
            <SocialIcon target="_blank" className="App-social-icon" url="https://www.linkedin.com/in/alexander-ignatov-053b53b3/"/>
            <SocialIcon target="_blank" className="App-social-icon" url="https://reddit.com/u/allexks"/>
          </div>
        </header>
        <CookieNotice
          acceptButtonLabel="Разбрах"
          readMoreButtonLabel="Ама бисквитки"
          readMoreButtonLink="http://armenskipop.com/"
          cookieTextLabel="Този сайт не използва бисквиди."
          cookieExpiration={1}
          darkTheme={true}
        />
      </div>
    );
  }
}

export default App;
