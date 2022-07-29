import './App.css';
import React from 'react';
import {convertToBinary} from './convertToBinary.js';
import {selectAndCopy} from './selectAndCopy.js';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      binary: "01010111011100100110100101110100011001010010000001100001001000000111001101100101011000110111001001100101011101000010000001101100011011110111011001100101001000000110110001100101011101000111010001100101011100100010000001110100011011110010000001111001011011110111010101110010001000000110111001100101011100100110010000100000011000110111001001110101011100110110100000100000011000010110111001100100001000000111001101100101011011100110010000100000011101000110100001100101011011010010000001110100011010000110010100100000011000100110100101101110011000010111001001111001001000000111011001100101011100100111001101101001011011110110111000100001"
    } 
    this.handleChange = this.handleChange.bind(this)
  }
    handleChange(event) {
    this.setState({
      input: event.target.value,
      binary: convertToBinary(event.target.value),
      email: `mailto:?subject=Here is a message from geeky-love-letter&body=${convertToBinary(event.target.value)}`
    })
  }
 

  render() {
  return (
    <div className="App">
      <div className="main_container">
        <TextContent input={this.state.input} handleChange={this.handleChange}/>
        <BinaryContent output={this.state.binary} />
        <ShareContainer email={this.state.email} />
      </div>
    </div>
    )
  }
}

class TextContent extends React.Component{
  render() {
    return (
      <div className="sub_container" id="text_editor">
          <h2>text editor</h2>
          <textarea id="text_content" name="text_content" placeholder="Write a secret love letter to your nerd crush and send them the binary version." onChange={this.props.handleChange} value={this.props.input}>
          </textarea>
          <br></br>
          <label for="text_content">text to be converted in binary language</label>
      </div>
    )
  }
}

class BinaryContent extends React.Component{
  render() {
    return (
      <div className="sub_container" id="binary_generator">
        <h2>binary generator</h2>
        <textarea id="binary_content" value={this.props.output} readonly></textarea>
    </div>
    )
  }
}


class ShareContainer extends React.Component{
  render() {
    return (
      <div className="share_container">
        <button class="primary_button"><a href={this.props.email}>send your letter</a></button>
        <p>or <button onClick={selectAndCopy}class="secondary_button" id="copy_button">copy binary version</button></p>
      </div>
    )
  }
}

export default App;
