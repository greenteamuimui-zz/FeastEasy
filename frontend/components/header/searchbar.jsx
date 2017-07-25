import React from 'react';
import { Link } from 'react-router-dom';
import SearchFormContainer from './search_form_container';

export default () => (
  <div className="search-bar">
    <section>
      <h2>
        Find your favorite kitchen now...
      </h2>
      <SearchFormContainer />
      <div>
        
      </div>
    </section>
  </div>
);
