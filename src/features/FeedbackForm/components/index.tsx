import * as React from 'react';
import fetch from 'isomorphic-unfetch';
import { Button } from '../../..//ui/Button';
import { scaffolding, colours } from '../../../theme';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required(),
  message: Yup.string().required()
});

const FeedbackForm: React.SFC<{}> = ({}) => {
  return (
    <div
      style={{
        height: '200px',
        padding: scaffolding.gutterLg,
        backgroundColor: colours.offWhite
      }}
    >
      <Formik
        initialValues={{ email: '', message: '' }}
        validationSchema={schema}
        onSubmit={(values, { setSubmitting }) => {
          fetch('http://api.browserful.com/send/feedback/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              ...values
            })
          })
            .then(function(data) {
              setSubmitting(false);
              console.log('Request ok', data);
            })
            .catch(function(error) {
              console.log('Request failed', error);
            });

          // setTimeout(() => {
          //   alert(JSON.stringify(values, null, 2));
          //   setSubmitting(false);
          // }, 400);
        }}
      >
        {({ values, isSubmitting, errors }) => (
          <Form>
            <label>
              Email
              <Field
                name="email"
                render={({ field }) => (
                  <input
                    {...field}
                    type="email"
                    value={values.email}
                    placeholder="you@email.com"
                  />
                )}
              />
              <ErrorMessage
                name="email"
                render={msg => <strong>{msg}</strong>}
              />
            </label>

            <label>
              Message
              <Field
                name="message"
                render={({ field }) => (
                  <textarea {...field} value={values.message} />
                )}
              />
              <ErrorMessage
                name="message"
                render={msg => <strong>{msg}</strong>}
              />
            </label>

            <Button
              type="submit"
              disabled={isSubmitting || !!errors.email || !!errors.message}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default FeedbackForm;
