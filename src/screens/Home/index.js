import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {
    Container,
    Content,
    List,
    ListItem,
    Icon,
    Left,
    Right,
    Fab,
    Button
} from 'native-base';
import Header from '../../components/Header';

export default class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            lists: [
                { id: 1, title: "Lista 1" },
                { id: 2, title: "Lista 2" },
                { id: 3, title: "Lista 3" }
            ]
        }
    }

    render() {
        return (
            <Container>
                <Header
                    iconLeft="menu"
                    title="Início"
                />
                <Content>
                    <List>
                        {
                            this.state.lists.map(item => (
                                <ListItem key={item.id} noIndent>
                                    <Left>
                                        <Text>{item.title}</Text>
                                    </Left>
                                    <Right>
                                        <Icon name="arrow-forward" />
                                    </Right>
                                </ListItem>
                            ))
                        }
                    </List>
                </Content>
            </Container>
        );
    }
}
