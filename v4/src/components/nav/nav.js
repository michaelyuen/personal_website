import React from 'react'
import { Link } from 'gatsby'

import Menu from '../../components/menu/menu';

import { config } from './config';
import style from './nav.module.scss';

const NavContainer = () => (

	<nav className={style.MyNav}>

		<h1>
			<Link to="/">
				<span>mcy</span>
				<span>Michael Clayton Yuen</span>
			</Link>
		</h1>

		<Menu items={config.items}/>

	</nav>
)

export default NavContainer