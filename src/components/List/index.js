import React from 'react';
import { SwipeRow, Button, Icon } from 'native-base';
import { View, Text } from 'react-native';
import styles from './styles';

export default props => (
    <View>
        {
            props.list.map(item => (
                <SwipeRow
                    key={item.id}
                    //leftOpenValue={60}
                    rightOpenValue={-60}
                    /*left={
                        <Button success onPress={() => alert('Add')}>
                            <Icon active name="add" />
                        </Button>
                    }*/
                    body={
                        <View style={styles.item}>
                            <Text style={styles.title}>{item.name}</Text>
                        </View>
                    }
                    right={
                        <Button danger onPress={() => props.removeItem(item.id)}>
                            <Icon active name="trash" />
                        </Button>
                    }
                />
            ))
        }
    </View>
);

