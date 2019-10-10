import React, { useState } from 'react';
import Header from './components/Header.d';
import Text from "./components/Text.d";
import StatusIcon from "./components/StatusIcon.d";
import Container from './components/Container.d';
import RoundedRect from "./components/RoundedRect.d";
import Label from './components/Label.d';

import text from "./styles/text";
import variant from "./styles/variant";
import color from './styles/color';

import Group from './components/Group.d';
import Input from './components/Input.d';
import Alert from './components/Alert.d';
import Modal from './components/Modal.d';
import Nav from './components/Nav.d';

import Danger from "./assets/danger.svg";

declare module 'react';

const App = () => {
  const [modal, setModal] = useState(true);
  const [navHeight, setNavHeight] = useState(0);

  return (
    <main>
      <Header title="Login" />
      <Container style={{ marginBottom: `${navHeight}px` }}>
        <Group>
          <Label>Email</Label>
          <Input value="" placeholder="Enter your email" />
        </Group>
        <Group>
          <Label>Password</Label>
          <Input value="" placeholder="Enter your password" password />
        </Group>
        <Group>
          <Label>Email (invalid example)</Label>
          <Input value="" placeholder="Enter your email" invalid />
        </Group>
        <RoundedRect>Login</RoundedRect>
        <Text style={{ ...text.default, ...text.center, color: color.muted }}>Sign up</Text>
        <Text style={{ ...text.default, ...text.center, ...text.small, color: color.light }}>Forgotten your password?</Text>
        <Group>
          <Alert variant={variant.danger} dismissible={true}>
            Your passwords don't match. Please try again.
          </Alert>
        </Group>
        <Group>
          <Alert variant={variant.success} dismissible={false}>
            Your sign up was successful
          </Alert>
        </Group>
        <StatusIcon icon={Danger} title="Oops!">
          Looks like you don't have any appointments, yet!
        </StatusIcon>
        <Modal show={modal} variant={variant.white} onClose={() => setModal(false)}>
          <Group>
            <Text style={{ ...text.default }}>
              You are about to book an appointment
              for an adult haircut with Jon S. Doe
              at XYZ Salon on Thu, 8th August at
              12pm!
            </Text>
          </Group>
          <RoundedRect>Confirm</RoundedRect>
        </Modal>
      </Container>
      <Nav onLoad={setNavHeight} />
    </main >
  );
}

export default App;
