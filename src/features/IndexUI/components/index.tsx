import * as React from 'react';

import { LandingPage } from './LandingPage';
import { HowTo } from './HowTo';
import { FeedbackForm } from './FeedbackForm';

export const IndexUi: React.SFC = ({}) => {
  return (
    <React.Fragment>
      <LandingPage />
      <HowTo />
      <FeedbackForm />
    </React.Fragment>
  );
};
