import React from 'react';

import styles from './CountryInfo.module.css';

const CountryInfo = ({receivedCountry}) => {
  
    return ( 
        <div className={styles.container}>
            <h2>Selected country is : {receivedCountry.name}</h2>
            <h3>Capital is : {receivedCountry.capital}</h3>
            <h3>Region is : {receivedCountry.region}</h3>
            <h3>population are : {receivedCountry.population}</h3>
            <h3>TimeZone is : {receivedCountry.timezones}</h3>
            <h3>Currency Details Are :
                {receivedCountry.currencies.map((value, index) => {
                    return <ul className={styles.pad} key={index}>Code :{value.code}, Name: {value.name}, Symbol: {value.symbol} </ul>
                })}
            </h3>
            <h3>Language Details Are :
                {receivedCountry.languages.map((value, index) => {
                    return <ul className={styles.pad} key={index}>language :{value.name}, Abbreviation : {value.iso639_2}, nativeName: {value.nativeName} </ul>
                })}
            </h3>
        </div>
     );
}

export default CountryInfo;