import {Component} from 'react'
import {v4 as uuid} from 'uuid'
import './index.css'

class CharacterCounter extends Component {
  state = {
    inputCharacterList: [],
    inputValue: '',
  }

  addToInputList = () => {
    const {inputValue} = this.state
    const newObj = {
      id: uuid(),
      text: inputValue,
    }
    this.setState(prevState => ({
      inputCharacterList: [...prevState.inputCharacterList, newObj],
      inputValue: '',
    }))
  }

  changeList = e => {
    this.setState({
      inputValue: e.target.value,
    })
  }

  render() {
    const {inputCharacterList, inputValue} = this.state
    return (
      <div className="app-container">
        <div className="character-container">
          <div className="heading-container">
            <h1>Count the characters like a Boss ...</h1>
          </div>
          {inputCharacterList.length <= 0 ? (
            <div className="empty-list">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
                className="empty-image"
              />
            </div>
          ) : (
            <ul>
              {inputCharacterList.map(eachItem => (
                <li key={eachItem.id}>
                  <p className="item">
                    {eachItem.text} : {eachItem.text.length}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="input-container">
          <h1 className="main-heading">Character Counter</h1>
          <form className="input-btn-container">
            <input
              type="text"
              className="input-text"
              placeholder="Enter the characters here"
              onChange={this.changeList}
              value={inputValue}
            />
            <button type="button" onClick={this.addToInputList}>
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default CharacterCounter
