import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";


export default class LinkContentView extends Component {
    render() {
        let metadata = this.props.activity.metadata;

        let images = metadata.images;
        let imageURL = 'https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image'
        let type = metadata.type;
        let description = metadata.description;
        let title = metadata.title;
        let subtile = metadata.provider_url;
        if (images.length > 0){
            let image = images[0];
            if (image.url){
                imageURL = image.url;
            }
        }else if(images.length === 0 && type === 'image'){
            imageURL = metadata.url
        }

        if (title === 'null' || title == null)
            title = metadata.provider_name;

        if (subtile === 'null' || subtile == null)
            subtile = metadata.provider_url;

        return (
            <View style={[styles.root]}>
                <Image
                    source={{uri: imageURL}}
                    style={styles.cardItemImagePlace}
                />
                <View style={styles.bodyContent}>
                    <Text style={styles.titleStyle}>{title}</Text>
                    <Text style={styles.subtitleStyle}>{subtile}</Text>
                </View>
                <View style={styles.body}>
                    <Text style={styles.bodyText}>
                         {description}
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: "#FFF",
        flexWrap: "nowrap",
        shadowColor: "#000",
        overflow: "hidden"
    },
    cardItemImagePlace: {
        flex: 1,
        backgroundColor: "#FAFAFA",
        minHeight: 210
    },
    bodyContent: {
        justifyContent: "center",
        padding: 16,
        paddingTop: 24
    },
    titleStyle: {
        color: "#000",
        fontSize: 24,
    },
    subtitleStyle: {
        color: "#000",
        opacity: 0.5,
        fontSize: 14,
        lineHeight: 16,
    },
    body: {
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 16
    },
    bodyText: {
        color: "#424242",
        fontSize: 14,
        lineHeight: 20,
    }
});
