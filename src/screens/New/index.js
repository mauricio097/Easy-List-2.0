import React, { Component } from 'react';
import { Container, Content, Icon, Fab, Picker } from 'native-base';
import { View, Text, TextInput, TouchableWithoutFeedback } from 'react-native';
import Header from '../../components/Header';
import styles from './styles';
import List from '../../components/List';
import Window from '../../components/Window';


export default class New extends Component {

    static navigationOptions = {
        header: null //Remove Header from Navigation
    }

    constructor(props) {
        super(props);

        this.state = {
            showModal: false,
            inputBar: '',
            list: []
        }
    }

    handleText = text => {
        this.setState({ inputBar: text });
    }

    addItem = item => {
        let list = [...this.state.list];
        item.id = list.length+1;
        list.push(item);
        this.setState({ list, inputBar: '',showModal: false });
    }

    removeItem = id => {

        let list = [...this.state.list];
        let newList = list.filter((item) => {
            return item.id !== id;
        });

        this.setState({ list: newList });
    }

    render() {
        let disableRule = this.state.inputBar.trim() === '' ? true : false;
        return (
            <Container>
                <Window showModal={this.state.showModal} 
                    onBackdropPress={() => this.setState({ showModal: false})}
                    onCancelPress={() => this.setState({ showModal: false})}
                    onSave={this.addItem}  />
                <Header iconLeft="arrow-back" title="Nova Lista"
                    leftClick={() => this.props.navigation.navigate('Home')}
                    rightClick={() => this.props.navigation.navigate('Home')}
                    textRight='Criar' />
                <View style={styles.bar}>                    
                        <TextInput placeholder="Nome da Lista" style={styles.inputBar}
                            onChangeText={this.handleText} value={this.state.inputBar} />                   
                </View>
                <Content>
                    <List list={this.state.list} removeItem={this.removeItem} />
                </Content>
                <Fab
                    style={styles.buttonFAB}
                    position="bottomRight"
                    onPress={() => this.setState({ showModal: true })}>
                    <Icon name="add" />
                </Fab>
            </Container>
        );
    }
}
