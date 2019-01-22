import React, { Component } from 'react';
import { Container, Content, Item, Input, Icon, Button, Fab } from 'native-base';
import { View, Text } from 'react-native';
import Header from '../../components/Header';
import styles from './styles';
import List from '../../components/List';
import Modal from "react-native-modal";

export default class New extends Component {

    static navigationOptions = {
        header: null //Remove Header from Navigation
    }

    constructor(props) {
        super(props);

        this.state = {
            showModal: false,
            inputBar: '',
            list: [
                { id: 1, title: 'Trigo' },
                { id: 2, title: 'Arroz' },
                { id: 3, title: 'Feijão' },
                { id: 4, title: 'Açucar' },
                { id: 5, title: 'Refrigerante' }
            ]
        }
    }

    handleText = text => {
        this.setState({ inputBar: text });
    }

    addItem = () => {
        let list = [...this.state.list];
        let item = {
            id: list.length,
            title: this.state.inputBar
        };

        list.push(item);

        this.setState({ list, inputBar: '' });
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
                <Modal isVisible={this.state.showModal} animationIn='slideInDown' onBackdropPress={() => this.setState({ showModal: false })}>
                    <View style={{ height: 300, backgroundColor: 'white' }}>
                        <View style={styles.modalHeader}>
                            <Text>Novo Item</Text>
                        </View>
                        <View style={styles.modalContent}>
                            <Item rounded>
                                <Input placeholder="Nome da Lista" style={styles.inputBar}
                                    onChangeText={this.handleText} value={this.state.inputBar} />
                            </Item>
                            <Item rounded>
                                <Input placeholder="Nome da Lista" style={styles.inputBar}
                                    onChangeText={this.handleText} value={this.state.inputBar} />
                            </Item>
                            <Item rounded>
                                <Input placeholder="Nome da Lista" style={styles.inputBar}
                                    onChangeText={this.handleText} value={this.state.inputBar} />
                            </Item>
                        </View>
                        <View style={styles.modalFooter}>
                            <Text>Cancelar</Text>
                            <Text>Salvar</Text>
                        </View>
                    </View>
                </Modal>
                <Header iconLeft="arrow-back" title="Nova Lista"
                    leftClick={() => this.props.navigation.navigate('Home')}
                    rightClick={() => this.props.navigation.navigate('Home')}
                    textRight='Criar' />
                <View style={styles.bar}>
                    <Item regular>
                        <Input placeholder="Nome da Lista" style={styles.inputBar}
                            onChangeText={this.handleText} value={this.state.inputBar} />
                    </Item>
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
