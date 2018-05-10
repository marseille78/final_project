import * as React from 'react';
import { FormEvent } from "react";
import { KeyboardEvent } from "react";

import './FormSearch.scss';

interface IFormSearchProps {
  placeholder: string;
  value: string;
  onChangeValue: (text: string) => void;
}

export class FormSearchComponent extends React.Component<IFormSearchProps> {
  constructor(props: IFormSearchProps) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleSubmit(e: FormEvent<any>): void {
    e.preventDefault();
    console.log('handleSubmit');
  }

  handleInput(e: KeyboardEvent<any>): void {
    this.props.onChangeValue(e.currentTarget.value);
  }

  handleClear(e: React.MouseEvent<HTMLElement>): void {
    e.preventDefault();
    this.props.onChangeValue('');
  }

  render() {
    const {placeholder, value} = this.props;
    // console.log(this.props);
    return(
      <div className="form-search">
        <form action="" onSubmit={this.handleSubmit}>
          <div className="form-search__item">
            <input
              className="form-search__field"
              placeholder={placeholder}
              value={value}
              onInput={this.handleInput}
            />
            <div className="form-search__bg">
              {placeholder}
              <a
                href="#"
                className="form-search__clear"
                onClick={this.handleClear}
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}