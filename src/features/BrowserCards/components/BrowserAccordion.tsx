import * as React from 'react';

import { Accordion, AccordionItem } from '../../../ui/Accordion';
import { Modal } from '../../../ui/Modal';
import { VersionChip } from '../../../ui/VersionChip';
import { OverrideSelect } from '../../../ui/OverrideSelect';
import { DetailsLabel } from '../../../ui/DetailsLabel';
import { LabelTextBold, LabelTextItalic } from '../../../ui/Typography';
import { colours } from '../../../theme';

interface IProps {
  browser: any;
  highlightColour: string;
  onAutoChange: any;
  onIncludeChange: any;
  onExcludeChange: any;
}

export const BrowserAccordion: React.SFC<IProps> = ({
  browser,
  highlightColour,
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
                <LabelTextItalic key={`${browser.friendlyName}-of`}>
                  of&nbsp;
                </LabelTextItalic>,
                <LabelTextBold key={`${browser.friendlyName}-total`}>
                  &nbsp;{browser.total}
                </LabelTextBold>
              ]}
            />
          )}
          selectColour={highlightColour}
          backgroundColour={colours.white}
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
                    query={version.query}
                    version={version.version}
                    logo={browser.logo}
                    hasOverride={version.hasOverride}
                    onAutoChange={query => onAutoChange(query)}
                    onIncludeChange={query => onIncludeChange(query)}
                    onExcludeChange={query => onExcludeChange(query)}
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
