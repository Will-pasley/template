import React from 'react';
import SEO from '../components/SEO';

const Home = () => {
  return (
    <div>
      <SEO title="Home" />
      <h1> Welcome to the home page!</h1>
      <table>
        <caption>Test Table</caption>
        <thead>
          <tr>
            <th>Name</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mary</td>
            <td>Amazon</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Home;
