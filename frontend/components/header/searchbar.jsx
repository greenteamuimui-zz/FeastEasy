import React from 'react';
import { Link } from 'react-router-dom';
import SearchFormContainer from './search_form_container';

export default () => (
  <div className="search-bar">
    <section>
      <h2>
        Join the next dinner party!
      </h2>
      <h3>
        Find your favorite kitchen now...
      </h3>
      <SearchFormContainer />
    </section>
  </div>
);
