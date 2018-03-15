import React, { Component, PropTypes } from 'react'
import { View, ScrollView, StyleSheet, TextInput, Text, AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'

import { actionCreators } from '../redux/todoRedux'

import Title from '../components/Title'
import List from '../components/List'
import Footer from '../components/Footer'
import Input from '../components/Input'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  divider: {
    height: 1,
    backgroundColor: 'whitesmoke'
  }
})

const mapStateToProps = (state) => ({
  items: state.items,
})

class App extends Component {

  static propTypes = {
    items: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  onAddTodo = (text) => {
    const {dispatch} = this.props;
    dispatch(actionCreators.addItem(text));
  }

  toggleItem = (i) => {
    const {dispatch} = this.props;
    dispatch(actionCreators.toggleItem(i));
  }

  onRemoveTodo = (i) => {
    const {dispatch} = this.props;
    dispatch(actionCreators.removeItem(i));
  }

  onRemoveCompleted = () => {
    const {dispatch} = this.props;
    dispatch(actionCreators.removeCompleted());
  }

  render() {
    const {items} = this.props;

    return (
      <View style={styles.container}>
        <Title/>
        <Input
          placeholder={'Type a todo, then hit enter!'}
          onSubmitEditing={this.onAddTodo}
        />
        <View style={styles.divider}/>
        <List
          list={items}
          onToggle={this.toggleItem}
          onRemoveItem={this.onRemoveTodo}
        />
        <View style={styles.divider}/>
        <Footer
          onRemoveCompleted={this.onRemoveCompleted}/>
      </View>
    )
  }
}

export default connect(mapStateToProps)(App)
