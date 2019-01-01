import * as React from 'react';
import fetch from 'isomorphic-unfetch';

import { Icon } from '../../../ui/Icon';
import { InputLabel } from '../../../ui/InputLabel';
import { InputText } from '../../../ui/InputText';
import { InputTextArea } from '../../../ui/InputTextArea';
import { InputAnnounce } from '../../../ui/InputAnnounce';
import { Button } from '../../..//ui/Button';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { Container, Row, Col } from 'react-grid-system';

import { FormWrapper } from './styles';
import { H2, P } from '../../../ui/Typography';
import { scaffolding, colours } from '../../../theme';

const schema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required(),
  message: Yup.string().required()
});

const FeedbackForm: React.SFC<{}> = ({}) => {
  return (
    <FormWrapper>
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <H2>Feedback</H2>
            <P>
              If you have any suggestions, found a bug or have a general
              question feel free to send us a message.
            </P>
            <Formik
              initialValues={{
                email: '',
                message: ''
              }}
              validationSchema={schema}
              enableReinitialize={true}
              onSubmit={(values, { setSubmitting, resetForm, setStatus }) => {
                fetch(`${process.env.BROWSERFUL_API}send/feedback/`, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    ...values
                  })
                })
                  .then(() => {
                    setSubmitting(false);
                    resetForm();
                    setStatus({ displayMessage: true });
                  })
                  .catch(() => {});
              }}
            >
              {({ values, isSubmitting, setStatus, status, errors }) => (
                <Form
                  onBlur={() => {
                    setStatus({ displayMessage: false });
                  }}
                  onChange={() => {
                    setStatus({ displayMessage: false });
                  }}
                >
                  <InputLabel>
                    Email
                    <Field
                      name="email"
                      render={({ field }) => (
                        <InputText
                          {...field}
                          type="email"
                          value={values.email || ''}
                          placeholder="Enter your email address"
                        />
                      )}
                    />
                    <ErrorMessage
                      name="email"
                      render={msg => (
                        <InputAnnounce variant="error">
                          <Icon name="error" size="sm" fill={colours.red} />
                          {msg}
                        </InputAnnounce>
                      )}
                    />
                  </InputLabel>

                  <InputLabel>
                    Message
                    <Field
                      name="message"
                      render={({ field }) => (
                        <InputTextArea
                          {...field}
                          value={values.message || ''}
                        />
                      )}
                    />
                    <ErrorMessage
                      name="message"
                      render={msg => (
                        <InputAnnounce variant="error">
                          <Icon name="error" size="sm" fill={colours.red} />
                          {msg}
                        </InputAnnounce>
                      )}
                    />
                  </InputLabel>

                  {status && status.displayMessage && (
                    <div style={{ marginBottom: scaffolding.gutterLg }}>
                      <InputAnnounce variant="success">
                        <Icon name="success" size="sm" fill={colours.green} />
                        Thanks! Your message has been sent
                      </InputAnnounce>
                    </div>
                  )}

                  <Button
                    type="submit"
                    onClick={() => {
                      setStatus({ displayMessage: false });
                    }}
                    disabled={
                      isSubmitting || !!errors.email || !!errors.message
                    }
                    backgroundColour={colours.teal}
                  >
                    Send
                  </Button>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </Container>
    </FormWrapper>
  );
};
export default FeedbackForm;
