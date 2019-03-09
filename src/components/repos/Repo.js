import React, { Component } from 'react';
import Colors from '../../colors.json';
import Details from './Details';

class Repo extends Component {
  state = {
    showDetails: false
  };

  onShowClick = e => {
    this.setState({ showDetails: !this.state.showDetails });
  };

  render() {
    const { repo } = this.props;
    const { showDetails } = this.state;

    return (
      <div className="col-md-6">
        <div className="card mb-4 shadow-sm">
          <div className="card-body">
          <center><img src={repo.owner.avatar_url} width="100" height="100" /></center>
            <center><h5 className="text-info">
            
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'inherit' }}
              >
                {repo.full_name}
              </a>
            </h5></center>
            <center><div className="card-text">
              <span className="badge badge-danger mr-1">
                <i className="fas fa-star" /> Stars: {repo.stargazers_count}
              </span>
              
              <span className="badge badge-secondary mr-1">
                <i className="fas fa-eye" /> Watchers: {repo.watchers_count}
              </span>
              
              <span className="badge badge-success">
                <i className="fas fa-code-branch" /> Forks: {repo.forks_count}
              </span>
              <br/>
              <span className="">
                 {repo.description}
              </span>
              
            </div></center>
          </div>
          <a className="btn btn-info btn-block" href={repo.html_url}>
             View Profile
          </a>

        </div>
      </div>
    );
  }
}

export default Repo;
