import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

export class Provider extends Component {
  state = {
    repo_list: [],
    heading: 'Top 10 starred repositories on Github'
  }

  componentDidMount() {
    axios
      .get(`https://api.github.com/search/repositories?q=stars%3A%3E0&sort=stars&per_page=10`)
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

