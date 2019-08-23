import React from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import UserController from '../controllers/UserController'

export default class ChatScreen extends React.Component {
    static navigationOptions = {
        title: 'Chat',
        headerStyle: {
            backgroundColor: '#FAFAFA',
            height: 44,
            marginTop: -44,
        },
        headerTintColor: '#333',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    constructor(props){
        super(props);

        const { navigation } = this.props;
        const selectedChannel = navigation.getParam('selectedChannel', null);

        this.setState({
            title: selectedChannel.name,
        })
    }

    state = {
        messages: [],
        title: 'Chat',
    }

    componentWillMount() {
        this.setState({
            messages: [
                
            ],
        })
    }

    onSend(messages = []) {
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }))
    }

    render() {
        let userInfo = UserController.getUser();
        return (
            <GiftedChat
                placeholder='Write a message...'
                messages={this.state.messages}
                onSend={messages => this.onSend(messages)}
                user={{
                    _id: userInfo.id,
                    name: userInfo.nickname,
                    avatar: userInfo.avatar
                }}
            />
        )
    }
}