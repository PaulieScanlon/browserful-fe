import * as React from 'react';

import { colours } from '../../../theme';

import { Accordion, AccordionItem } from '../../../ui/Accordion';
import { Modal } from '../../../ui/Modal';
import { VersionChip } from '../../../ui/VersionChip';
import { OverrideSelect } from '../../../ui/OverrideSelect';
import { DetailsLabel } from '../../../ui/DetailsLabel';
import { LabelTextRegular, LabelTextBold } from '../../../ui/Typography';
interface IProps {
  browser: any;
  queryColour: string;
  onAutoChange: any;
  onIncludeChange: any;
  onExcludeChange: any;
}

export const BrowserCard: React.SFC<IProps> = ({
  browser,
  queryColour,
  onAutoChange,
  onIncludeChange,
  onExcludeChange
}) => {
  return (
    <div>
      <Accordion maxHeight="700px" type="checkbox" name={browser.friendlyName}>
        <AccordionItem
          id={browser.friendlyName}
          renderLabel={() => (
            <DetailsLabel
              label={browser.friendlyName}
              logo={browser.logo}
              renderStats={() => [
                <LabelTextBold key={`${browser.friendlyName}-totalIncluded`}>
                  {browser.totalIncluded}&nbsp;
                </LabelTextBold>,
                <LabelTextRegular key={`${browser.friendlyName}-of`}>
                  of&nbsp;
                </LabelTextRegular>,
                <LabelTextBold key={`${browser.friendlyName}-total`}>
                  {browser.total}
                </LabelTextBold>
              ]}
            />
          )}
          selectColour={queryColour}
          defaultChecked={browser.expandCard}
        >
          {browser.versions.map((version: any, index: number) => {
            return (
              <Modal
                key={index}
                renderTrigger={() => (
                  <VersionChip
                    version={version.version}
                    isIncluded={version.isIncluded}
                    hasOverride={version.hasOverride}
                  />
                )}
                renderContent={() => (
                  <OverrideSelect
                    name={browser.friendlyName}
                    friendlyName={browser.friendlyName}
                    queryName={version.query}
                    version={version.version}
                    logo={browser.logo}
                    hasOverride={version.hasOverride}
                    onAutoChange={queryName => onAutoChange(queryName)}
                    onIncludeChange={queryName => onIncludeChange(queryName)}
                    onExcludeChange={queryName => onExcludeChange(queryName)}
                  />
                )}
              />
            );
          })}
        </AccordionItem>
      </Accordion>
    </div>
  );
};
