import React from 'react';
import { FlatList, TouchableHighlight, View, Dimensions, StyleSheet, Text, Button } from 'react-native';
import APIController from '../controllers/APIController'
import ChannelSheetItem from './ChannelSheetItem'
import Global from '../core/Global'

export default class ChannelBottomSheet extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            channels: [],
            selectedChannels: [],
            showAction: false,
        }
    }

    componentDidMount(){
        APIController.getChannelsData('2845fe481e74b9010a7913d7b214a8937972d6b1').then((res) => {
            
            let channels = this.state.channels;
            
            res.forEach(channel => {
                let type = channel.type;
                if(type !== 'p2p'){
                    let channelId = channel.id;
                    let description = channel.description;
                    let avatar = channel.avatar

                    if(avatar !== null){
                        channels.push({
                            id: channelId,
                            name: description,
                            avatar: avatar,
                            selected: false,
                        })
                    }
                }
            });

            this.setState({
                channels: channels,
            })
        })
    }

    itemSeparator = () => <View style={styles.divider} />;

    render() {
        let action;
        if(this.state.showAction){
            action = <View style={styles.button}>
                        <Button title="Confirm" onPress={() => handleConfirm()}/>
                    </View>
        }
        return (
            <View style={{ flex: 1 }} forceInset={{ top: 'always' }}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.title}>Choose channels to share:</Text>
                    {action}
                </View>
                <FlatList style={styles.list}
                    data={this.state.channels}
                    ItemSeparatorComponent={this.itemSeparator}
                    renderItem={({item, index}) => 
                        <TouchableHighlight
                            onPress={() => this.handleSelection(item, index)}>
                             <ChannelSheetItem source={item}/>
                        </TouchableHighlight>
                    }
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        );
    }

    handleSelection = (targetItem, index) => {
        targetItem.selected = !targetItem.selected;
        let channels = this.state.selectedChannels;

        if(targetItem.selected){
            if(!channels.includes(targetItem))
                channels.push(targetItem)   
        }else{
            if(channels.includes(targetItem))
                channels.pop(targetItem);
        }

        this.setState({
            showAction: (channels.length > 0),
        })   
    }

    handleConfirm = () => {
        
    }
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      flexDirection: 'row',
    },
    divider : {
        minHeight: 1,
        backgroundColor: '#FAFAFA',
        width: Dimensions.get('window').width,
    },
    list : {
        flex:1, 
        width: Dimensions.get('window').width,
    },
    title: {
        color: '#333',
        fontSize: 20,
        margin: 16,
    },
    button: {
        margin:8, 
        flexDirection: 'row-reverse', 
        flex: 1, 
    }
});