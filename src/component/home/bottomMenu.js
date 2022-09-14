import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Home from '@mui/icons-material/Home';
import Search from '@mui/icons-material/Search';
import ProductionQuantityLimitsSharpIcon from '@mui/icons-material/ProductionQuantityLimitsSharp';
import GroupAddSharpIcon from '@mui/icons-material/GroupAddSharp';

import { AiFillHome } from 'react-icons/ai';
import './home.scss';
import { Link } from 'react-router-dom';
const BottomMenu = () => {
	return (
		<Tabs
			aria-label='icon label tabs example'
			className='tabs-fixed'
			centered
		>
			<Link to='/'>
				{' '}
				<Tab icon={<Home />} />
			</Link>
			<Tab icon={<Search />} />
			<Tab icon={<ProductionQuantityLimitsSharpIcon />} />
			<Tab icon={<GroupAddSharpIcon />} />
		</Tabs>
	);
};

export default BottomMenu;
