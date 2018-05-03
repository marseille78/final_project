import * as React from 'react';
import { LogoComponent } from "../logo/Logo.Component";
import { FormSearchComponent } from "../formSearch/FormSearch.Component";

import './Header.scss';

interface IHeaderProps {
  placeholder: string;
  searchValue: string;
  onChangeSearchValue: (text: string) => void;
}

export class HeaderComponent extends React.Component<IHeaderProps> {
  render() {
    const {placeholder, searchValue, onChangeSearchValue} = this.props;
    return(
      <header className="app-header">
        <div className="app-container">
          <div className="app-header__item">
            <LogoComponent/>
          </div>
          <div className="app-header__item">
            <FormSearchComponent
              placeholder={placeholder}
              value={searchValue}
              onChangeValue={onChangeSearchValue}
            />
          </div>
          <div className="app-header__item">Controls</div>
        </div>
      </header>
    );
  }
}