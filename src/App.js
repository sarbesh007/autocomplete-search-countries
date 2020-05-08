/* eslint-disable no-undef */
import React from 'react';
import SuggestionsBox from './components/SuggestionsBox';
import CountryInfo from './components/CountryInfo';

import styles from './App.module.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = { 
      countries: [],
      changedCountry: ''

     }
  }

  componentDidMount () {    
     fetch('https://restcountries.eu/rest/v2/all')
    .then(response=> response.json())
    .then(data => {
      this.setState({countries:data});
 })}

  handleSearchChange = (value) => {
    
    this.setState({changedCountry: value})
  };

  render() { 
    const { countries, changedCountry } = this.state;
      if(changedCountry && changedCountry.name !== ''){
        return (
          <div className={styles.container}>
          <h1 className={styles.head}>Country details are</h1>
           <SuggestionsBox countries={countries} searchChange={this.handleSearchChange} /> 
          
           <CountryInfo receivedCountry={changedCountry} />
           
          </div>
        );
      }
      else{
        return (
          <div className={styles.container}>
          <h1 className={styles.head}>Country details website</h1>
           <SuggestionsBox countries={countries} searchChange={this.handleSearchChange} /> 
          </div>
        );
      }
    
  }
}
export default App;
