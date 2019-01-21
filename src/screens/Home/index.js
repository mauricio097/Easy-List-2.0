import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import Header from '../../components/Header';
import List from '../../components/List';

export default class Home extends Component {

    static navigationOptions = {
        header: null //Remove Header from Navigation
    }

    constructor(props) {
        super(props);

        this.state = {
            lists: [
                { id: 1, title: "Lista 1S" },
                { id: 2, title: "Lista 2" },
                { id: 3, title: "Lista 3" }
            ]
        }
    }

    render() {
        return (
            <Container>
                <Header iconLeft="menu" title="Início" />
                <Content>
                    <List list={this.state.lists} />
                </Content>
            </Container>
        );
    }
}
