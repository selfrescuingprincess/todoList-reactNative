import React, { Component, PropTypes } from 'react'
import { View,TouchableOpacity, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  footer:{
    paddingVertical: 15
  },
  link: {
    color:'red',
    textAlign:'center'
  }
})

export default class Footer extends Component {
  static propTypes = {
    onRemoveCompleted: PropTypes.func.isRequired
  }

  render() {
    const {onRemoveCompleted} = this.props;
    return (
      <View style={styles.footer}>
        <Text style={styles.link}
          onPress={onRemoveCompleted}
        >
          Remove Completed Items
        </Text>
      </View>
    )
  }
}
