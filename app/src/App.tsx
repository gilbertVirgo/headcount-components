import React, { useState } from "react";

import Text from "./base/Text";
import View from "./base/View";

import Container from "./components/Container";
import Alert from "./components/Alert";
import Combo from "./components/Combo";
import Grid from "./components/Grid";
import Header from "./components/Header";
import Group from "./components/Group";
import Label from "./components/Label";
import TextInput from "./components/TextInput";
import Button from "./base/Button";
import RoundedRect from "./components/RoundedRect";
import Modal from "./components/Modal";
import Nav from "./components/Nav";
import Space from "./components/Space";
import StatusIcon from "./components/StatusIcon";

const App = () => {
    const [modal, setModal] = useState(false);
    const [navHeight, setNavHeight] = useState("0");

    return (<>
        <Header title="Home" />
        <Container>
            <Alert variant="success">
                Something went right!
            </Alert>
            <Alert variant="danger" dismissible>
                Something went wrong! But you can dismiss it.
            </Alert>
            <Group>
                <Combo>
                    <Combo.Header>
                        <Combo.Image src={require("./assets/popart.png")} />
                        <Combo.Info>
                            <Text>
                                This is an example of a combo component.
                            </Text>
                        </Combo.Info>
                    </Combo.Header>
                    <Combo.Body>
                        <Grid>
                            <View>
                                <Text>A grid cell.</Text>
                            </View>
                            <View>
                                <Text>Another grid cell.</Text>
                            </View>
                        </Grid>
                        <RoundedRect sharp>
                            View profile
                        </RoundedRect>
                    </Combo.Body>
                </Combo>
            </Group>
            <Group>
                <Label>Email</Label>
                <TextInput placeholder="Enter your email" />
            </Group>
            <Group>
                <Label>Password</Label>
                <TextInput password placeholder="Enter your email" />
            </Group>
            <Group>
                <Label>Email</Label>
                <TextInput invalid placeholder="Enter your email" />
            </Group>
            <Group>
                <Button onClick={() => setModal(true)}>
                    <RoundedRect>Open a modal</RoundedRect>
                </Button>
            </Group>
            <Modal show={modal} onClose={() => setModal(false)}>
                <Group>
                    <Text>
                        You are about to book an appointment for an adult
                        haircut with Jon S. Doe at XYZ Salon on Thu, 8th
                        August at 12pm!
                    </Text>
                </Group>
                <RoundedRect>
                    Confirm
                </RoundedRect>
            </Modal>
            <StatusIcon icon={require("./assets/danger.svg")} />
            <Space height={navHeight} />
        </Container>
        <Nav onLoad={setNavHeight} />
    </>)
}

export default App;
