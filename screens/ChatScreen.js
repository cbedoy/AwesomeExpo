import React from 'react'
import { View } from 'react-native' 
import { GiftedChat } from 'react-native-gifted-chat'
import UserController from '../controllers/UserController'
import ChatController from '../controllers/ChatController'
import ChatMessageInView from '../chatcomponents/ChatMessageInView'
import ChatMessageOutView from '../chatcomponents/ChatMessageOutView'


const ChatMessage = (props) =>  {
    let messageView;

    let messageSender = props.currentMessage.user._id;

    if(messageSender !== UserController.getUser().id){
        messageView = <ChatMessageInView {...props}/>
    }else{
        messageView = <ChatMessageOutView {...props}/>
    }

    return(
        <View>
            {messageView}
        </View>
    );
}


export default class ChatScreen extends React.Component {
    static navigationOptions = {
        title: this.titleFromChat(),
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

    static titleFromChat() {
        return "Chat"
    }

    constructor(props){
        super(props);

        const { navigation } = this.props;
        const selectedChannel = navigation.getParam('selectedChannel', null);
        
        this.state = {
            title: selectedChannel.name,
            channel: selectedChannel,
            messages: [],
            dataSource: [],
        }

        ChatController.join(selectedChannel.id)
        ChatController.loadHistory().then((response) => {
            this.state.dataSource = response;
            this.setState({
                messages: ChatController.prepareMessages(this.state.dataSource),
            })
        })
    }

    onSend(messages = []) {
        let message = messages[0];
        let messageText = message.text;


        console.log(messageText)
        let result = ChatController.prepareMessage(messageText);

        /*
        if(typeof result === 'string' || result instanceof String){
            this.setState((previousState) => ({
                messages: GiftedChat.append(previousState.messages, messages),
            }));
        }
        */
      }

    render() {
        let userInfo = UserController.getUser();
        return (
            <GiftedChat
                placeholder='Write a message...'
                messages={this.state.messages}
                inverted={false}
                onSend={messages => this.onSend(messages)}
                user={{
                    _id: userInfo.id,
                    name: userInfo.nickname,
                    avatar: userInfo.avatar
                }}
                renderMessage={(props) => 
                    <ChatMessage {...props}/>
                }
            />
        )
    }
}