import React, { Component } from 'react';
import axios from 'axios';
import Layout from '../components/layouts/index';

class CandidateDetail extends Component {
  state = {
    persons: [],
    data: []
  };

  componentDidMount() {
    axios
      .get('https://candidate-management-platform.herokuapp.com/candidate/', {
        method: 'GET',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        },
        withCredentials: true,
        credentials: 'same-origin'
      })
      .then(response => {
        const persons = response.data;
        this.setState({ persons });
        console.log(response.data);
      });
  }

  render() {
    return (
      <Layout>
        <div>
          <h1>
            <ul>
              {this.state.persons.map(person => (
                <div>
                  <li>
                    {person.first_name} {person.last_name}
                  </li>
                  <li>{person.expected_salary}</li>
                  <li>{person.experience}</li>
                  <li>{person.avatar}</li>
                  <li>{person.type}</li>
                  <li>{person.country}</li>
                  <li>
                    {person.skill.map(skill => (
                      <div>{skill}</div>
                    ))}
                  </li>
                </div>
              ))}
            </ul>
          </h1>
        </div>
      </Layout>
    );
  }
}

export default CandidateDetail;
