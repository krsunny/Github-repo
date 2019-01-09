import React from 'react';
import Repos from '../repos/Repos';
import Search from '../repos/Search';

const Index = () => {
  return (
    <React.Fragment>
      <Search />
      <Repos />
    </React.Fragment>
  );
};

export default Index;
