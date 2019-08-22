import React from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';
import UserController from '../controllers/UserController'
import FollowController from '../controllers/FollowController'

export default class ProfileHeaderCell extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            posts: 0,
            followers: 0,
            following: 0,
        }
    }

    componentDidMount(){
        
    }

    render(){
        let user = UserController.getUser()
        return(
            <View style={styles.container}>
                <Image 
                    source={{uri: user.avatar}}
                    style={styles.avatar}
                />
                <Text style={styles.nickname}>{user.nickname}</Text>
                <Text style={styles.email}>{user.email}</Text>
                <View style={styles.actionContainer}>
                    <View style={styles.followItem}>
                        <Text style={styles.count}>{this.state.posts}</Text>
                        <Text style={styles.title}>POSTS</Text>
                    </View>
                    <View style={styles.followItem}>
                        <Text style={styles.count}>{this.state.followers}</Text>
                        <Text style={styles.title}>FOLLOWERS</Text>
                    </View>
                    <View style={styles.followItem}>
                        <Text style={styles.count}>{this.state.following}</Text>
                        <Text style={styles.title}>FOLLOWING</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
    },
    actionContainer: {
        paddingTop: 16,
        marginTop: 32,
        paddingBottom: 16,
        backgroundColor: '#222',
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        marginTop: 32,
        height: 128, 
        width: 128,
        borderWidth: 1,
        borderRadius: 64,
        borderColor: '#444'
    },
    nickname: {
        marginTop: 32,
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    email: {
        fontSize: 16,
        color: '#666',
    },
    followItem: {
        fontSize: 16,
        color: '#666',
        alignItems: 'center',
        flex: 1,
    },
    count: {
        color: '#FFF',
        fontSize: 24,
    },
    title: {
        color: '#EEE',
        paddingTop: 4,
        fontSize: 12,
    }
})