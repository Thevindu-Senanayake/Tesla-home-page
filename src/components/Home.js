import React from 'react';
import styled from 'styled-components';
import Section from './Section';

function Home() {
	return (
		<Container>
			<Section
				title="Model S"
				description="Order Online for Touchless Delivery"
				image="model-s.jpg"
				LeftBtnText="CUSTOM ORDER"
				RightBtnText="EXISTING INVENTORY"
			/>
			<Section
				title="Model Y"
				description="Order Online for Touchless Delivery"
				image="model-y.jpg"
				LeftBtnText="CUSTOM ORDER"
				RightBtnText="EXISTING INVENTORY"
			/>
			<Section
				title="Model 3"
				description="Order Online for Touchless Delivery"
				image="model-3.jpg"
				LeftBtnText="CUSTOM ORDER"
				RightBtnText="EXISTING INVENTORY"
			/>
			<Section
				title="Model X"
				description="Order Online for Touchless Delivery"
				image="model-x.jpg"
				LeftBtnText="CUSTOM ORDER"
				RightBtnText="EXISTING INVENTORY"
			/>
			<Section
				title="Solar Panel"
				description="Lowest Cost Solar Panels in America"
				image="solar-panel.jpg"
				LeftBtnText="ORDER now"
				RightBtnText="Learn more"
			/>
			<Section
				title="Solar Roof"
				description="Produce Clean Energy from Your Roof"
				image="solar-roof.jpg"
				LeftBtnText="ORDER now"
				RightBtnText="Learn more"
			/>
			<Section
				title="Accessories"
				description=""
				image = "accessories.jpg"
				LeftBtnText="Shop Now"
			/>
		</Container>
	)
}

export default Home

const Container = styled.div`
	height: 100vh;
	z-index: 10;
`
