import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class SubbedMap extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   messages: [],
    //   currentSub: 10
    // };
  }
  //
  // componentDidUpdate(pProps, pState) {
  //   if (this.getSubId() !== pState.currentSub) {
  //     this.setState({currentSub: this.getSubId()}, this.fetchMessages);
  //   }
  // }
  //
  // componentDidMount() {
  //   this.fetchMessages();
  // }
  //
  // fetchMessages() {
  //   fetch(`http://localhost:3000/api/messages?subredditId=${this.state.currentSub}`)
  //   .then(response => response.json())
  //   .then(data => {
  //     this.setState({messages: data});
  //
  //   })
  //   .catch(err => console.log(err));
  // }

  render() {
    // console.log(this.props)
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.app}>
        <Text>SubbedMap</Text>
      </View>
    );
  }
}

// <PostList navigation={this.props.navigation} messages={this.state.messages}/>

const styles = StyleSheet.create({
  app: {
    backgroundColor: 'white',
    borderRadius: 4,
    borderWidth: 3.5,
    borderColor: 'white',
  },
});
