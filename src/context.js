import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

const reducer = (state, action) => {
  switch(action.type) {
    case 'SEARCH_REPOS':
      return {
        ...state,
        repo_list: action.payload,
        heading: 'Search Results'
      };
    default:
      return state;
  }
}

export class Provider extends Component {
  state = {
    repo_list: [],
    heading: 'Top 10 starred repositories on Github',
    dispatch: action => this.setState(state => reducer(state, action))
  }

  componentDidMount() {
    axios
      .get(``)
      .then(res => {
        this.setState({ repo_list: res.data.items })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;

