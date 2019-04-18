import * as React from 'react';

import { IProps } from '../types';

import { Accordion, AccordionItem } from '../../../ui/Accordion';
import { DetailsLabel } from '../../../ui/DetailsLabel';
import { LabelTextBold, LabelTextItalic } from '../../../ui/Typography';
import { VersionChip } from '../../../ui/VersionChip';
import { Modal } from '../../../ui/Modal';
import { OverrideSelect } from '../../../ui/OverrideSelect';

import { colours, scaffolding } from '../../../theme';

export const BrowserAccordion: React.SFC<IProps> = ({
  browser,
  selectColour,
  handleAutoChange,
  handleIncludeChange,
  handleExcludeChange,
  handleBrowserChange
}: IProps) => {
  return (
    <div style={{ marginBottom: scaffolding.gutterLg }}>
      <Accordion maxHeight="700px" type="checkbox" name={browser.friendlyName}>
        <AccordionItem
          id={browser.friendlyName}
          onChange={event =>
            handleBrowserChange(
              event,
              browser.queryName,
              browser.versions[0].version
            )
          }
          selectColour={selectColour}
          defaultChecked={browser.expandCard}
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
                    onAutoChange={query => handleAutoChange(query)}
                    onIncludeChange={query => handleIncludeChange(query)}
                    onExcludeChange={query => handleExcludeChange(query)}
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
