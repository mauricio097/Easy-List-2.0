import React, { Component } from 'react';
import { Container, Content, Fab, Icon, Button } from 'native-base';
import Header from '../../components/Header';
import List from '../../components/List';
import styles from './styles';

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
                { id: 3, title: "Lista 3" },
                { id: 4, title: "Lista 3" },
                { id: 5, title: "Lista 3" },
                { id: 6, title: "Lista 3" },
                { id: 7, title: "Lista 3" },
                { id: 8, title: "Lista 3" },
                { id: 9, title: "Lista 3" },
                { id: 10, title: "Lista 3" }
            ]
        }
    }

    render() {
        return (
            <Container>
                <Header iconLeft="menu" title="Início" />
                <Content style={{flex:1}}>
                    <List list={this.state.lists} />                    
                </Content>
                <Fab                                                                     
                    style={styles.buttonFAB}
                    position="bottomRight"
                    onPress={() => this.props.navigation.navigate('New')}>
                    <Icon name="create" />                    
                </Fab>
            </Container>
        );
    }
}
