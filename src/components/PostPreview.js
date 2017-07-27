import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles'
// export default class SubbedMap extends React.Component {
export default PostPreview = (props) => (
  <View style={styles.row}>
    <Text>{props.title}</Text>
  </View>
);
