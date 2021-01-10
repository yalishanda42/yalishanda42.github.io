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
          <div className="nothingbutton">
            <AwesomeButton
              type="primary"
              ripple
              onPress={this.clickNothingButton}
            >
              {
              this.state.nothingButtonClicked
                ? "И защо ме кликна сега?"
                : "Кликни ме"
              }
            </AwesomeButton>
            <h6></h6>
          </div>
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
}

export default App;
