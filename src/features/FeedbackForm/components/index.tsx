import * as React from 'react';
import fetch from 'isomorphic-unfetch';
import { Button } from '../../..//ui/Button';
import { scaffolding, colours } from '../../../theme';

class FeedbackForm extends React.Component {
  onSubmit(event: any) {
    console.log('onSubmit');
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    let formObject = {};

    for (const pair of formData.entries()) {
      formObject[pair[0]] = pair[1];
    }

    fetch('http://api.browserful.com/send/feedback/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...formObject
      })
    })
      .then(function(data) {
        console.log('Request ok', data);
      })
      .catch(function(error) {
        console.log('Request failed', error);
      });
  }

  onChange(event) {
    console.log(event);
  }

  render() {
    return (
      <div
        style={{
          height: '200px',
          padding: scaffolding.gutterLg,
          backgroundColor: colours.greyUltraLight
        }}
      >
        <form id="myForm" onSubmit={event => this.onSubmit(event)}>
          <div style={{ marginTop: '10px' }}>
            <label htmlFor="myEmail" style={{ display: 'block' }}>
              Email:
            </label>
            <input
              id="myEmail"
              name="email"
              value="pauliescanlon@gmail.com"
              onChange={event => this.onChange(event)}
            />
          </div>

          <div style={{ marginTop: '10px' }}>
            <label htmlFor="myMessage" style={{ display: 'block' }}>
              name:
            </label>
            <textarea
              id="myMessage"
              name="message"
              value="This is a message"
              onChange={event => this.onChange(event)}
            />
          </div>

          <div style={{ marginTop: '10px' }}>
            <Button>Submit</Button>
          </div>
        </form>
      </div>
    );
  }
}

export default FeedbackForm;
