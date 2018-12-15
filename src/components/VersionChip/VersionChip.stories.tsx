import * as React from 'react';
import styled from 'react-emotion';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import { VersionChip } from './VersionChip';

import browserslist from 'browserslist';
import { createMatrix } from '../../utils/createMatrix';

const mockData = createMatrix(browserslist(['last 1 Chrome versions']));

const onAutoChange = (event, browser, version) => {
  action('onAutoChange')(event.currentTarget, browser, version);
};

const onIncludeChange = (event, browser, version) => {
  action('onIncludeChange')(event.currentTarget, browser, version);
};

const onExcludeChange = (event, browser, version) => {
  action('onExcludeChange')(event.currentTarget, browser, version);
};

const stories = storiesOf('VersionChip', module);

const StoryDiv = styled.div({
  label: 'story-div',
  height: '170px',
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center'
});

stories.add(
  'default usage',
  withInfo(
    'The browser and version prop are used for the on[x]Change callbacks'
  )(() => (
    <StoryDiv>
      <VersionChip
        browser={mockData[0].friendlyName}
        version={mockData[0].versions[0].id}
        onAutoChange={(event, browser, version) =>
          onAutoChange(event, browser, version)
        }
        onIncludeChange={(event, browser, version) =>
          onIncludeChange(event, browser, version)
        }
        onExcludeChange={(event, browser, version) =>
          onExcludeChange(event, browser, version)
        }
      />
    </StoryDiv>
  ))
);

stories.add(
  'isIncluded',
  withInfo('The isIncluded prop is used to denote browser/version is included')(
    () => (
      <StoryDiv>
        <VersionChip
          isIncluded={true}
          browser={mockData[0].friendlyName}
          version={mockData[0].versions[0].id}
          onAutoChange={(event, browser, version) =>
            onAutoChange(event, browser, version)
          }
          onIncludeChange={(event, browser, version) =>
            onIncludeChange(event, browser, version)
          }
          onExcludeChange={(event, browser, version) =>
            onExcludeChange(event, browser, version)
          }
        />
      </StoryDiv>
    )
  )
);

// stories.add(
//   'default usage',
//   withInfo('The browser and version prop are used on the onChange callback')(
//     () => (
//       <VersionChip
//         browser={mockData[0].friendlyName}
//         version={mockData[0].versions[0].id}
//         onChange={(event, browser, version) =>
//           onChange(event, browser, version)
//         }
//       />
//     )
//   )
// );

// stories.add(
//   '!isIncluded & defaultChecked',
//   withInfo('The defaultChecked prop is the checked status of the checkbox')(
//     () => (
//       <VersionChip
//         defaultChecked={true}
//         browser={mockData[0].friendlyName}
//         version={mockData[0].versions[0].id}
//         onChange={(event, browser, version) =>
//           onChange(event, browser, version)
//         }
//       />
//     )
//   )
// );

// stories.add(
//   'isIncluded',
//   withInfo('The isIncluded prop shows if a browser/version is included')(() => (
//     <VersionChip
//       isIncluded={true}
//       browser={mockData[0].friendlyName}
//       version={mockData[0].versions[0].id}
//       onChange={(event, browser, version) => onChange(event, browser, version)}
//     />
//   ))
// );

// stories.add(
//   'isIncluded & defaultChecked',
//   withInfo('The defaultChecked prop is the checked status of the checkbox')(
//     () => (
//       <VersionChip
//         defaultChecked={true}
//         isIncluded={true}
//         browser={mockData[0].friendlyName}
//         version={mockData[0].versions[0].id}
//         onChange={(event, browser, version) =>
//           onChange(event, browser, version)
//         }
//       />
//     )
//   )
// );
