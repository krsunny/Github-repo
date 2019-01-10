import React, { Component } from 'react';
import { Consumer } from '../../context';
import Spinner from '../layout/Spinner';
import Repo from './Repo';

class Repos extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { repo_list, heading } = value;

          if (repo_list === undefined || repo_list.length === 0) {
            return <Spinner />;
          } else {
            return (
              <React.Fragment>
                <h3 className="text-center mb-4">{heading}</h3>
                <div className="row">
                  {repo_list.map(item => (
                    <Repo key={item.id} repo={item} />
                  ))}
                </div>
              </React.Fragment>
            );
          }
        }}
      </Consumer>
    );
  }
}

export default Repos;
