import React from 'react';
import { View, FlatList, Text } from 'react-native';
import PostPreview from './PostPreview';

// export default class SubbedMap extends React.Component {
export default PostList = (props) => (
  <View>
    <FlatList
      data={props.messages}
      keyExtractor={item => item.id}
      renderItem={({item}) => {
        console.log('\n\n\n\nYO CHECK US OUT!!!!' + JSON.stringify(item, null, 2))
        return <PostPreview title={item.title}/>}}
      />
  </View>
);
