import React from 'react';
import { Header, Left, Button, Body, Right, Icon, Title } from 'native-base';
import Colors from '../../styles/Colors';
import styles from './styles';

export default props => {
  return (
    <Header androidStatusBarColor={Colors.statusBar} style={styles.header}>
      {props.iconLeft ?
        <Left>
          <Button transparent onPress={props.leftClick}>
            <Icon name={props.iconLeft} />
          </Button>
        </Left>
        : <Left />}
      {props.title ?
        <Body>
          <Title>{props.title}</Title>
        </Body>
        : false}
      {props.iconRight ?
        <Right>
          <Button transparent onPress={props.rightClick}>
            <Icon name={props.iconRight} />
          </Button>
        </Right>
        : <Right />}
    </Header>
  )
}
