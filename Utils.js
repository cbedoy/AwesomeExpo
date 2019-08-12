import {Platform, StyleSheet} from 'react-native';

export const APPBAR_HEIGHT = Platform.select({
    ios: 100,
    android: 100,
    default: 64,
});