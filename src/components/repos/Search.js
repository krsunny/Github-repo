import React, { Component } from 'react';
import axios from 'axios';
import { Consumer } from '../../context';

class Search extends Component {
  state = {
    repoName: '',
    refreshName: ''
  };

  onSubmit = (dispatch, e) => {
    e.preventDefault();

    axios
      .get(
        `https://api.github.com/search/repositories?q=${this.state.repoName}`
      )
      .then(res => {
        dispatch({
          type: 'SEARCH_REPOS',
          payload: res.data.items
        });

        this.setState({
          refreshName: this.state.repoName,
          repoName: ''
        });
      })
      .catch(err => console.log(err));
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  refreshRepos = (dispatch, e) => {
    e.preventDefault();

    axios
      .get(
        `https://api.github.com/search/repositories?q=${this.state.refreshName}`
      )
      .then(res => {
        dispatch({
          type: 'SEARCH_REPOS',
          payload: res.data.items
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;

          return (
            <div className="card card-body mb-4 p-4">
              <h1 className="display-4 text-center">
                <i className="fab fa-github" /> Git Repo Search Filter
              </h1>
              <p className="lead text-center"></p>
              <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Write some keywords..."
                    name="repoName"
                    value={this.state.repoName}
                    onChange={this.onChange}
                  />
                </div>
                <button
                  className="btn btn-info btn-lg btn-block mb-5"
                  type="submit"
                >
                  Search
                </button>
              </form>
              {this.state.refreshName ? (
                <div className="text-center">
                  
                </div>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Search;
