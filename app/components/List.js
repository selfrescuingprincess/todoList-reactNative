import React, { Component, PropTypes } from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'

import Checkbox from './Checkbox'
import { actionCreators } from '../redux/todoRedux'

const styles = StyleSheet.create({
  list: {
    flex: 1
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    padding: 15
  },
  checkedItem: {
    backgroundColor: 'whitesmoke',
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  removeText: {
    color: 'red',
    marginLeft: 10,
    marginBottom: 2,
    fontSize: 20
  } 
});

export default class List extends Component {

  styleCheck = (checked) => {
    if (checked) {
      return [styles.item, styles.checkedItem];
    } else {
      return styles.item;
    }
  }

  static propTypes = {
    list: PropTypes.array.isRequired,
    onToggle: PropTypes.func.isRequired,
    onRemoveItem: PropTypes.func.isRequired
  }

  renderItem = (item, i) => {
    const {text, checked} = item
    const {onToggle} = this.props;
    const {onRemoveItem} = this.props;

    return (
      <View
        key={i}
        style={this.styleCheck(checked)}>
        <Text>
          {text}
        </Text>
        <View
          style={styles.checkbox}>
          <Checkbox
            onToggle={() => onToggle(i)}
            isChecked={checked} />
            <TouchableOpacity
              onPress={() => onRemoveItem(i)}>
              <Text
                style={styles.removeText}>
                X
              </Text>
            </TouchableOpacity>
        </View>
      </View>
    )
  }



  render() {
    const {list} = this.props;
    return (<View style={styles.list}>
              {list.map(this.renderItem)}
            </View>
    );
  }
}
