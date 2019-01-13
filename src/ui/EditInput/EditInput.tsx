import * as React from 'react';

import { EditWrapper, EditField } from './styles';
import { Icon } from '../Icon';

export class EditInput extends React.Component<{}> {
  private editRef: any;

  constructor(props) {
    super(props);

    this.handleInput = this.handleInput.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.editRef = React.createRef();
  }

  handleInput() {
    console.log('handleInput');
  }

  handleBlur(event: React.FocusEvent) {
    console.log('handleBlur: ', event.currentTarget.textContent);
    // const html = this.getDOMNode().innerHTML;
  }

  handleFocus() {
    console.log('handleFocus');
    this.editRef.focus();
  }

  render() {
    return (
      <EditWrapper>
        <EditField
          contentEditable
          suppressContentEditableWarning
          onInput={this.handleInput}
          onBlur={this.handleBlur}
          ref={this.editRef}
        >
          Untitled
        </EditField>
        <Icon name="edit" size="sm" onClick={this.handleFocus} />
      </EditWrapper>
    );
  }
}
