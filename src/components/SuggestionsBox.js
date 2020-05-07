/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

import styles from './SuggestionsBox.module.css';

const regionArray = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

export default class SuggestionsBox extends React.Component{
  state = {
    visibleCountries: null,
    selectedRegion: null
  }
  
  componentDidMount() {
    
    this.setState({visibleCountries: this.props.countries})
  }
  componentDidUpdate(prevProps) {
    if(prevProps.countries.length !== this.props.countries.length) {
      this.setState({visibleCountries: this.props.countries})
    }
  }

   handleChange(event) {
    this.setState({ selectedRegion: event.target.value });
    if(event.target.value) {
      const visibleCountriesByRegion = this.props.countries.filter(country => {
        return country['region'] === event.target.value
      })
      this.setState({ visibleCountries: visibleCountriesByRegion })
    } else {
      this.setState({ visibleCountries: this.props.countries })
    }
  };

  render() {
    return (
    <div className={styles.container}>
      <Autocomplete
        id="combo-box-demo"
        options={this.state.visibleCountries}
        getOptionLabel={(option) => option.name}
        style={{ width: 500 }}
        onChange={(e, value) => { this.props.searchChange(value);}}
        renderInput={(params) => 
        <TextField {...params} label="Country Selector" placeholder="type a country name for suggestions" variant="outlined" 
        />}  
      />
      <div className={styles.tocenter}>
      <FormControl variant="outlined" className={styles.formControl} >
        <InputLabel id="demo-simple-select-outlined-label">Regions</InputLabel>
        <Select
        placeholder="select a region"
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={this.state.selectedRegion}
          onChange={(event) => this.handleChange(event)}
          label="Select Region"
        >
          <MenuItem value={null}>
            <em>None</em>
          </MenuItem>
          {regionArray.map(region => (
          <MenuItem value={region}>{region}</MenuItem>
          ))}
        </Select>
      </FormControl>
      </div>
    </div>
    );
  }
}

