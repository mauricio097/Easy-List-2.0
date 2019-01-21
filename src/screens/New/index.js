import React, { Component } from 'react';
import { Container, Content, Item, Input, Icon, Button } from 'native-base';
import { View } from 'react-native';
import Header from '../../components/Header';
import styles from './styles';
import List from '../../components/List';

export default class New extends Component {

    static navigationOptions = {
        header: null //Remove Header from Navigation
    }

    constructor(props) {
        super(props);

        this.state = {
            inputBar : '',
            list: []
        }
    }

    handleText = text => {
        this.setState({inputBar: text});
    }
    
    addItem = () => {        
        let list = [...this.state.list];
        let item = { 
            id:list.length,
            title:this.state.inputBar
        };

        list.push(item);

        this.setState({ list,inputBar:'' });
    }

    removeItem = id => {
        
        let list = [...this.state.list];
        let newList = list.filter((item) => {
            return item.id !== id;
        });

        this.setState({list: newList});
    }

    render() {
        let disableRule = this.state.inputBar.trim() === '' ? true : false;
        return (
            <Container>
                <Header iconLeft="arrow-back" title="Nova Lista" leftClick={() => this.props.navigation.navigate('Home')} />
                <View style={styles.bar}>                    
                    <Item regular>
                        <Input placeholder="Nome do Item" style={styles.inputBar}
                            onChangeText={this.handleText} value={this.state.inputBar} />
                        <Button disabled={disableRule} style={ !odisableRule ? styles.buttonbar : styles.disableButton} 
                            onPress={this.addItem}>
                            <Icon name="add" />
                        </Button>
                    </Item>
                </View>
                <Content>
                    <List list={this.state.list} removeItem={this.removeItem}/>
                </Content>
            </Container>
        );
    }
}
