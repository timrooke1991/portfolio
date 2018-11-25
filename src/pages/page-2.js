import React, { Component } from 'react';

class SecondPage extends Component {
  constructor() {
    super();

    this.state = {
      data: [
        {
          name: 'Post A',
          description:
            'This is a description. * This is probably what was causing the UI test to need two clicks. However, slightly bigger issue, is that the form validation is only checking for a `null` status against the captcha, but in `submitValidation` it gets set to false, so it shows an error message the first time - but then, lets me the second time regardless of whether it is checked or not.',
          url: 'http://www.github.com',
          tags: ['React', 'JavaScript', 'TypeScript', 'Jest', 'Mongo']
        },
        {
          name: 'Post B',
          description:
            'This is a description. * This is probably what was causing the UI test to need two clicks. However, slightly bigger issue, is that the form validation is only checking for a `null` status against the captcha, but in `submitValidation` it gets set to false, so it shows an error message the first time - but then, lets me the second time regardless of whether it is checked or not.',
          url: 'http://www.github.com',
          tags: ['React', 'JavaScript', 'TypeScript', 'Jest', 'Mongo']
        },
        {
          name: 'Post C',
          description:
            'This is a description. * This is probably what was causing the UI test to need two clicks. However, slightly bigger issue, is that the form validation is only checking for a `null` status against the captcha, but in `submitValidation` it gets set to false, so it shows an error message the first time - but then, lets me the second time regardless of whether it is checked or not. ',
          url: 'http://www.github.com',
          tags: ['React', 'JavaScript', 'TypeScript', 'Jest', 'Mongo']
        },
        {
          name: 'Post D',
          description:
            'This is a description. * This is probably what was causing the UI test to need two clicks. However, slightly bigger issue, is that the form validation is only checking for a `null` status against the captcha, but in `submitValidation` it gets set to false, so it shows an error message the first time - but then, lets me the second time regardless of whether it is checked or not.',
          url: 'http://www.github.com',
          tags: ['React', 'JavaScript', 'TypeScript', 'Jest', 'Mongo']
        }
      ]
    };
  }

  renderItem(item, key) {
    return (
      <div className="item" key={key}>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
      </div>
    );
  }

  render() {
    return (
      <div className="dark-background">
        <h1>Title</h1>
        {this.state.data.map((item, key) => this.renderItem(item, key))}
      </div>
    );
  }
}

export default SecondPage;
