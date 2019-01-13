import * as React from 'react';

import { EditWrapper, EditField } from './styles';
import { Icon } from '../Icon';
import { IconButton } from '../IconButton';
import { colours } from '../../theme';

interface Props {
  html: string;
  onChange?: (html: any) => void;
  onBlur?: (html: any) => void;
}

export class EditInput extends React.Component<Props> {
  lastHtml: string = this.props.html;
  private el: any = React.createRef<HTMLElement>();

  getEl() {
    return this.el.current;
  }

  findLastTextNode(node: Node): Node | null {
    if (node.nodeType === Node.TEXT_NODE) return node;
    let children = node.childNodes;
    for (let i = children.length - 1; i >= 0; i--) {
      let textNode = this.findLastTextNode(children[i]);
      if (textNode !== null) return textNode;
    }
    return null;
  }

  replaceCaret(el: HTMLElement) {
    const target = this.findLastTextNode(el);
    const isTargetFocused = document.activeElement === el;
    if (target !== null && target.nodeValue !== null && isTargetFocused) {
      var range = document.createRange();
      var sel = window.getSelection();
      range.setStart(target, target.nodeValue.length);
      range.collapse(true);
      sel.removeAllRanges();
      sel.addRange(range);
      if (el instanceof HTMLElement) el.focus();
    }
  }

  componentDidUpdate() {
    const el = this.getEl();

    if (!el) return;
    if (this.props.html !== el.innerHTML) {
      el.innerHTML = this.lastHtml = this.props.html;
    }
    this.replaceCaret(el);
  }

  onInput(originalEvt: React.SyntheticEvent<any>) {
    const el = this.getEl();
    const html = el.innerHTML;

    if (this.props.onChange && html !== this.lastHtml) {
      const evt = Object.assign({}, originalEvt, {
        target: {
          value: html
        }
      });
      this.props.onChange(evt);
    }
    this.lastHtml = html;
  }

  onBlur(originalEvt: React.SyntheticEvent<any>) {
    const el = this.getEl();
    const html = el.innerHTML;
    el.blur();
    if (html === '') {
      el.innerHTML = this.lastHtml = this.props.html;
    }
    if (this.props.onBlur) {
      const evt = Object.assign({}, originalEvt, {
        target: {
          value: html
        }
      });
      this.props.onBlur(evt);
    }
  }

  onClick() {
    const el = this.getEl();
    el.focus();
    if (el.innerHTML === this.props.html) {
      el.innerHTML = '';
    }
    this.replaceCaret(el);
  }

  render() {
    const { html } = this.props;

    return (
      <EditWrapper>
        <div
          ref={this.el}
          className={`${EditField}`}
          onInput={event => this.onInput(event)}
          onBlur={event => this.onBlur(event)}
          contentEditable
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <IconButton
          size="sm"
          backgroundColour={colours.offWhite}
          onClick={() => this.onClick()}
        >
          <Icon name="edit" size="sm" />
        </IconButton>
      </EditWrapper>
    );
  }
}
