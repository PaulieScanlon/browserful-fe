import * as React from 'react';
import fetch from 'isomorphic-unfetch';
import { InputLabel } from '../../../ui/InputLabel';
import { InputText } from '../../../ui/InputText';
import { InputTextArea } from '../../../ui/InputTextArea';
import { InputError } from '../../../ui/InputError';
import { Button } from '../../..//ui/Button';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { Container, Row, Col } from 'react-grid-system';

import { FormWrapper } from './styles';
import { H2, H4, P } from '../../../ui/Typography';

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
          <Col xs={1} sm={1} md={2} lg={3} />
          <Col xs={12} sm={12} md={8} lg={6}>
            <H2>Feedback</H2>
            <P>
              If you have any suggestions, found a bug or have a general
              question feel free to send us a message.
            </P>
            <Formik
              initialValues={{ email: '', message: '' }}
              validationSchema={schema}
              enableReinitialize={true}
              onSubmit={(values, { setSubmitting, resetForm }) => {
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
                  })
                  .catch(() => {});
              }}
            >
              {({ values, isSubmitting, errors }) => (
                <Form>
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
                      render={msg => <InputError>{msg}</InputError>}
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
                      render={msg => <InputError>{msg}</InputError>}
                    />
                  </InputLabel>

                  <Button
                    type="submit"
                    disabled={
                      isSubmitting || !!errors.email || !!errors.message
                    }
                  >
                    Send
                  </Button>
                </Form>
              )}
            </Formik>
          </Col>
          <Col xs={1} sm={1} md={2} lg={3} />
        </Row>
      </Container>
    </FormWrapper>
  );
};
export default FeedbackForm;
