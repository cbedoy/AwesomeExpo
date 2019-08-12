import {Platform, StyleSheet} from 'react-native';

export const APPBAR_HEIGHT = Platform.select({
    ios: 64,
    android: 64,
    default: 64,
});