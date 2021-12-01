import React, {useState} from 'react';
import styled from 'styled-components';
import ClearIcon from '@mui/icons-material/Clear';
import {SelectCars} from "../features/custom/CarSlice";
import {useSelector} from 'react-redux';

function Header() {
	const [NavbarStatus, setNavbarStatus] = useState(false);
	const cars = useSelector(SelectCars)

	return (
		<Container>
			<a>
				<img src="/images/logo.svg" alt="Logo" />
			</a>
			<Menu>
				{cars && cars.map((car, index) =>(
					<a key={index} href="#">{car}</a>
				))}
			</Menu>
			<RightMenu>
				<a href="#">Shop</a>
				<a href="#">Account</a>
				<a href="#" onClick={()=>setNavbarStatus(true)}>Menu</a>
			</RightMenu>
			<MenuItems ShowStatus={NavbarStatus}>
			<CloseWrapper>
				<Close onClick={()=>setNavbarStatus(false)}/>
			</CloseWrapper>
				<li><a href="#">Existing Inventory</a></li>
				<li><a href="#">Used Inventory</a></li>
				<li><a href="#">Trade-In</a></li>
				<li><a href="#">Test Drive</a></li>
				<li><a href="#">Cybertruck</a></li>
				<li><a href="#">Roadster</a></li>
				<li><a href="#">Semi</a></li>
				<li><a href="#">Charging</a></li>
				<li><a href="#">Powerwall</a></li>
				<li><a href="#">Commercial Energy</a></li>
				<li><a href="#">Utilities</a></li>
				<li><a href="#">Find Us</a></li>
				<li><a href="#">Support</a></li>
				<li><a href="#">Investor Relations</a></li>
			</MenuItems>
		</Container>
	)
}

export default Header

const Container = styled.div`
	min-height: 60px;
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 20px;
	top: 0;
	left: 0;
	right: 0;
	z-index: 1;
`

const Menu = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 1;

	a {
		font-weight: 600;
		padding: 0 10px;
		flex-wrap: nowrap;
	}

	@media (max-width:768px) {
		display: none;
	}
`

const RightMenu = styled.div`
	display: flex;
	align-items: center;

	a {
		font-weight: 600;
		margin-right: 10px;
		flex-wrap: nowrap;
	}
`

const MenuItems = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	right: 0;
	background: white;
	width: 300px;
	z-index: 16;
	list-style: none;
	padding: 20px;
	display: flex;
	flex-direction: column;
	text-align: start;
	transform: ${props => props.ShowStatus ? 'translateX(0)': 'translateX(100%)'};
	transition: transform 0.2s ease-in-out;

	li {
		padding: 15px 0px;

		a {
			font-weight: 600;
		}
	}
`

const Close = styled(ClearIcon)`
	cursor: pointer;
`

const CloseWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
`