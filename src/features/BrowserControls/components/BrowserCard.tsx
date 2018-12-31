import * as React from 'react';

import { colours } from '../../../theme';

import { Accordion, AccordionItem } from '../../../ui/Accordion';
import { Modal } from '../../../ui/Modal';
import { VersionChip } from '../../../ui/VersionChip';
import { OverrideSelect } from '../../../ui/OverrideSelect';
import { DetailsLabel } from '../../../ui/DetailsLabel';
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
      <Accordion
        maxHeight="250px"
        type="checkbox"
        name={browser.friendlyName}
        backgroundColour={colours.white}
      >
        <AccordionItem
          id={browser.friendlyName}
          renderLabel={() => (
            <DetailsLabel
              label={browser.friendlyName}
              logo={browser.logo}
              value={{ amount: browser.includeCount }}
            />
          )}
          selectColour={queryColour}
          defaultChecked={browser.defaultChecked}
        >
          {browser.versions.map((version: any, index: number) => {
            return (
              <Modal
                key={index}
                renderTrigger={() => (
                  <VersionChip
                    version={version.id}
                    isIncluded={version.isIncluded}
                    hasOverride={version.hasOverride}
                  />
                )}
                renderContent={() => (
                  <OverrideSelect
                    name={browser.friendlyName}
                    friendlyName={browser.friendlyName}
                    queryName={version.queryName}
                    version={version.id}
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
