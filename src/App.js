import React, { Component, Fragment } from 'react';
import {fetchPalettes} from './services/palettesService';
import Filter from './components/Filter';
import PalettesList from './components/PalettesList';
import PaletteDetail from './components/PaletteDetail';
import {Switch, Route} from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nameFilter: '',
      palettes: []
    };

    this.getNameFilter = this.getNameFilter.bind(this);
  }

  componentDidMount() {
    this.getSavedPalettes();
  }

  getNameFilter(e) {
    const query = e.currentTarget.value;
    this.setState({
      nameFilter: query
    })
  }

  getSavedPalettes() {
    if (localStorage.getItem('savedPalettes') !== null) {
      const mySavedPalettes = JSON.parse(localStorage.getItem('savedPalettes'));
      this.setState({
        palettes: mySavedPalettes
      });
    } else {
      // pedir los datos
      this.getPalettes();
    }

  }
  
  savePalettes(data,dataName) {
    localStorage.setItem(dataName, JSON.stringify(data));
  }

  getPalettes() {
    fetchPalettes()
      .then(data => {

        const newPalettes = data.palettes.map((item, index)=>{
          return {...item, id: index};
        });
        this.savePalettes(newPalettes, 'savedPalettes');
        this.setState({
          palettes: newPalettes
        });
      });
  }

  filterMe() {
    const {palettes, nameFilter} = this.state;

    return palettes.filter(item => item.name.toUpperCase().includes(nameFilter.toUpperCase()));
  }

  render() {
    
    return (
      <div className="app">

        <Switch>
          <Route exact path="/" render={()=>(
            <Fragment>
              <Filter action={this.getNameFilter} />

              <PalettesList myPalettes={this.filterMe()} />
            </Fragment>
          )} />
          <Route path="/palette/:id" render={props => <PaletteDetail match={props.match} myPalettes={this.state.palettes} />} />
        </Switch>

      </div>
    );
  }
}

export default App;
