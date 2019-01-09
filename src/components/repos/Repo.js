import React, { Component } from 'react';
import Colors from '../../colors.json';
import Details from './Details';

class Repo extends Component {
  state = {
    showDetails: false
  };

  onShowClick = e => {
    this.setState({ showDetails: !this.state.showDetails });
  }

  render() {
    const { repo } = this.props;
    const { showDetails } = this.state;

    return (
      <div className="col-md-6">
        <div className="card mb-4 shadow-sm">
          <div className="card-body">
            <h5 className="text-info">{repo.full_name}</h5>
            <div className="card-text">
              {repo.language ? (
                <span>
                  <span
                    style={{
                      backgroundColor: Colors[repo.language],
                      borderRadius: '50%',
                      display: 'inline-block',
                      height: '12px',
                      position: 'relative',
                      top: '1px',
                      width: '12px'
                    }}
                  />{' '}
                  {repo.language}
                </span>
              ) : (
                'There is no programming language'
              )}
              <br />
              <span className="badge badge-danger mr-1">
                <i className="fas fa-star" /> Stars: {repo.stargazers_count}
              </span>
              <br />
              <span className="badge badge-secondary mr-1">
                <i className="fas fa-eye" /> Watchers: {repo.watchers_count}
              </span>
              <br />
              <span className="badge badge-success">
                <i className="fas fa-code-branch" /> Forks: {repo.forks_count}
              </span>
              <br />
            </div>
          </div>
          <div className="btn btn-info btn-block" onClick={this.onShowClick}>
            <i className="fas fa-chevron-down" /> View details
          </div>
          {showDetails ? (
            <Details
              description={repo.description}
              languagesUrl={repo.languages_url}
              createdAt={repo.created_at}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default Repo;
