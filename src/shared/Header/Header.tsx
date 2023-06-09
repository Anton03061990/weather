import React from 'react';
import s from './Header.module.scss';

interface Props  {

}

export const Header = (props: Props) => {
  return <header className={s.header}>
    <div className={s.wrapper}>
        <div className={s.logo}></div>
        <div className={s.title}>weather</div>
    </div>
    <div className={s.wrapper}></div>
  </header>
}