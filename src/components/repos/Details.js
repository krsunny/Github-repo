import React, { Component } from 'react';
import axios from 'axios';
import Moment from 'react-moment';

class Details extends Component {
  state = {
    languages: []
  };

  componentDidMount() {
    axios
      .get(this.props.languagesUrl)
      .then(res => {
        this.setState({ languages: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { description, createdAt } = this.props;
    const { languages } = this.state;

    return (
      <ul className="list-group">
        <li className="list-group-item">
          <strong>Description</strong>: {description}
        </li>
        <li className="list-group-item">
          <strong>Programming languages</strong>: {Object.keys(languages).toString()}
        </li>
        <li className="list-group-item">
          <strong>Created at</strong>: <Moment format="DD/MM/YYYY">{createdAt}</Moment>
        </li>
      </ul>
    );
  }
}

export default Details;
