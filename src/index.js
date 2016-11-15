import React, { Component } from 'react';
import { TextInput } from 'react-native';
import VMasker from 'vanilla-masker';

export default class MaskedInput extends Component {
  constructor(props) {
    super(props);
    const { value = '' } = this.props;
    this.state = { value };
    this.onChangeText = this.onChangeText.bind(this);
  }
  onChangeText(value) {
    const { mask = '' } = this.props;
    const maskedValue = VMasker.toPattern(value, mask);
    if (this.state.value !== maskedValue) this.setState({ value: maskedValue });
  }
  render() {
    return (
      <TextInput
        {...this.props}
        value={this.state.value}
        onChangeText={this.onChangeText}
      />
    );
  }
}
