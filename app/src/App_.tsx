import React from "react";

const FakeApp = () => {
	return <p>I'm fake, don't use me.</p>
}

export default FakeApp;

// import React, { useState } from 'react';
// import Header from './components/Header';
// import StatusIcon from "./components/StatusIcon";
// import Container from './components/Container';
// import RoundedRect from "./components/RoundedRect";
// import Label from './components/Label';

// import variant from "./styles/variant";
// import color from './styles/color';

// import Group from './components/Group';
// import Input from './components/TextInput';
// import Alert from './components/Alert_';
// import Modal from './components/Modal';
// import Nav from './components/Nav';

// import Danger from "./assets/danger.svg";
// import Grid from './components/Grid';
// import Combo from './components/Combo';

// import Text from "./components/Text";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faHome, faPhone, faMapPin } from '@fortawesome/free-solid-svg-icons';
// import View from './components/View';

// declare module 'react';

// const App = () => {
// 	const [modal, setModal] = useState(true);
// 	const [navHeight, setNavHeight] = useState(0);

// 	return (
// 		<main>
// 			<Header title="Login" />
// 			<Container style={{ marginBottom: `${navHeight}px` }}>
// 				<Group>
// 					<Label>Email</Label>
// 					<Input defaultValue="" placeholder="Enter your email" />
// 				</Group>
// 				<Group>
// 					<Label>Password</Label>
// 					<Input defaultValue="" placeholder="Enter your password" password />
// 				</Group>
// 				<Group>
// 					<Label>Email (invalid example)</Label>
// 					<Input defaultValue="" placeholder="Enter your email" invalid />
// 				</Group>
// 				<RoundedRect marginBottom>
// 					<Text>
// 						Login
// 					</Text>
// 				</RoundedRect>
// 				<Text center margin color={color.muted}>Sign up</Text>
// 				<Text center margin small color={color.light}>Forgotten your password?</Text>
// 				<Group>
// 					<Alert variant={variant.danger} dismissible={true}>
// 						<Text>Your passwords don't match. Please try again.</Text>
// 					</Alert>
// 				</Group>
// 				<Group>
// 					<Alert variant={variant.success} dismissible={false}>
// 						<Text>Your sign up was successful</Text>
// 					</Alert>
// 				</Group>
// 				<StatusIcon icon={Danger}>
// 					<Text bold large center margin>Oops!</Text>
// 					<Text center margin>Looks like you don't have any appointments, yet!</Text>
// 				</StatusIcon>
// 				<Modal show={modal} variant={variant.white} onClose={() => setModal(false)}>
// 					<Group>
// 						<Text>
// 							You are about to book an appointment
// 							for an adult haircut with Jon S. Doe
// 							at XYZ Salon on Thu, 8th August at
// 							12pm!
// 						</Text>
// 					</Group>
// 					<RoundedRect>
// 						<Text>
// 							Confirm
// 						</Text>
// 					</RoundedRect>
// 				</Modal>
// 				<Combo>
// 					<Combo.Header>
// 						<Combo.Image src={require("./assets/popart.png")} />
// 						<Combo.Info>
// 							<Text>Wed, 7th Aug @ 15:30</Text>
// 							<Text small color={color.muted}>Child's haircut</Text>
// 						</Combo.Info>
// 					</Combo.Header>
// 					<Combo.Body>
// 						<Grid>
// 							<Grid.Cell>
// 								<View flex-value={1} alignCenter>
// 									<FontAwesomeIcon icon={faUser} />
// 								</View>
// 								<Text flex-value={3} noMargin marginLeft textSmall>John S. Doe</Text>
// 							</Grid.Cell>
// 							<Grid.Cell>
// 								<View flex-value={1} alignCenter>
// 									<FontAwesomeIcon icon={faHome} />
// 								</View>
// 								<Text flex-value={3} noMargin marginLeft textSmall>Best Barber Shop</Text>
// 							</Grid.Cell>
// 							<Grid.Cell>
// 								<View flex-value={1} alignCenter>
// 									<FontAwesomeIcon icon={faPhone} />
// 								</View>
// 								<Text flex-value={3} noMargin marginLeft textSmall>(+44) 1234 567 890</Text>
// 							</Grid.Cell>
// 							<Grid.Cell>
// 								<View flex-value={1} alignCenter>
// 									<FontAwesomeIcon icon={faMapPin} />
// 								</View>
// 								<Text flex-value={3} noMargin marginLeft textSmall>17 Barbers Place, E2 2D0</Text>
// 							</Grid.Cell>
// 						</Grid>
// 						<RoundedRect noRadius>
// 							<Text>
// 								Cancel Booking
// 							</Text>
// 						</RoundedRect>
// 					</Combo.Body>
// 				</Combo>
// 				<Combo>
// 					<Combo.Header>
// 						<Combo.Image src={require("./assets/popart.png")} />
// 						<Combo.Info>
// 							<Group>
// 								<FontAwesomeIcon icon={faUser} />
// 								<Text marginLeft inline>Mark Maciver</Text>
// 							</Group>
// 							<Group noMargin>
// 								<FontAwesomeIcon icon={faHome} />
// 								<Text marginLeft inline>SliderCuts</Text>
// 							</Group>
// 						</Combo.Info>
// 					</Combo.Header>
// 					<Combo.Body>
// 						<Grid>
// 							<Grid.Cell>
// 								<View flex-value={1} alignCenter>
// 									<FontAwesomeIcon icon={faPhone} />
// 								</View>
// 								<Text flex-value={3} marginLeft textSmall>(+44) 1234 567 890</Text>
// 							</Grid.Cell>
// 							<Grid.Cell>
// 								<View flex-value={1} alignCenter>
// 									<FontAwesomeIcon icon={faMapPin} />
// 								</View>
// 								<Text flex-value={3} marginLeft textSmall>Old Street, E1</Text>
// 							</Grid.Cell>
// 						</Grid>
// 						<RoundedRect noRadius>
// 							<Text>
// 								Cancel Booking
// 							</Text>
// 						</RoundedRect>
// 					</Combo.Body>
// 				</Combo>
// 			</Container>
// 			<Nav onLoad={setNavHeight} />
// 		</main >
// 	);
// }

// export default App;
