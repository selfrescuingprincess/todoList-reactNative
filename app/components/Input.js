import React, { Component, PropTypes } from 'react'
import { TextInput, View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  input: {
    padding: 15,
    height: 50,
  },
});

export default class Input extends Component {

  state = {
    text: '',
  }

  onChangeText = (text) => this.setState({text});

  onSubmitEditing = () => {
    const {onSubmitEditing} = this.props;
    const {text} = this.state;

    if (!text) return;

    onSubmitEditing(text);
    this.setState({text: ''});
  }

  render() {
    const {placeholder} = this.props;
    const {text} = this.state;

    return (
      <TextInput
        style={styles.input}
        value={text}
        placeholder={placeholder}
        onChangeText={this.onChangeText}
        onSubmitEditing={this.onSubmitEditing}
      />
    )
  }
}
