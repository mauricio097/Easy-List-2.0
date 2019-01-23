import React, { Component } from 'react';
import styles from './styles';
import { View, Text, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import Modal from 'react-native-modal';
import TextInputMask from 'react-native-text-input-mask';
import { Picker } from 'native-base';

export default class Window extends Component {

    constructor(props) {
        super(props);

        this.state = {
            nameInput: '',
            priceInput: '',
            quantInput: '',
            pickerSelect: 'un'
        }

        this.save
    }

    save = () => {
        const error = !this.state.nameInput.trim() || !this.state.priceInput.trim() || !this.state.quantInput.trim() ?
            'Itens Não Podem Ficar em Branco!' : '';

        if (!error) {
            const item = {
                name: this.state.nameInput,
                price: this.state.priceInput,
                quantity: this.state.quantInput,
                typeItem: this.state.pickerSelect
            }

            this.props.onSave(item);
        }
        else {
            ToastAndroid.show(error, ToastAndroid.SHORT);
        }
    }

    onValueChange = selected => {
        this.setState({ pickerSelect: selected, quantInput: '' });
    }

    render() {
        const maskQuant = this.state.pickerSelect === 'un' ? "[990]" : "[990],[99]";

        return (
            <Modal style={styles.modal}
                isVisible={this.props.showModal} animationIn='slideInDown'
                onBackdropPress={this.props.onBackdropPress}>
                <View style={styles.viewModal}>
                    <View style={styles.modalHeader}>
                        <Text style={styles.title}>Novo Item</Text>
                    </View>
                    <View style={styles.modalContent}>
                        <TextInput placeholder='Nome' style={styles.input}
                            value={this.state.nameInput}
                            onChangeText={(text) => this.setState({ nameInput: text })}
                        />
                        <TextInputMask
                            style={styles.input}
                            placeholder="Preço"
                            keyboardType='numeric'
                            value={this.state.priceInput}
                            onChangeText={(formatted) => {
                                this.setState({ priceInput: formatted })
                            }}
                            mask={"R$ [990],[99]"}
                        />

                        <View style={styles.quantView}>
                            <TextInputMask
                                style={[styles.input, { flex: 1 }]}
                                keyboardType='numeric'
                                value={this.state.quantInput}
                                placeholder="Quantidade"
                                onChangeText={(formatted) => {
                                    this.setState({ quantInput: formatted })
                                }}

                                mask={maskQuant}

                            />
                            <Picker
                                note
                                mode="dropdown"
                                style={styles.picker}
                                selectedValue={this.state.pickerSelect}
                                onValueChange={this.onValueChange}
                            >
                                <Picker.Item label="Un" value="un" />
                                <Picker.Item label="Kg" value="kg" />
                            </Picker>
                        </View>

                    </View>
                    <View style={styles.modalFooter}>
                        <TouchableOpacity                            
                            onPress={this.props.onCancelPress}
                            style={[styles.button,styles.buttonLight]}>
                            <Text style={styles.textButton}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity                           
                            onPress={this.save}
                            style={[styles.button,styles.buttonDark]}>
                            <Text style={styles.textButton}>Salvar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        );
    }

}