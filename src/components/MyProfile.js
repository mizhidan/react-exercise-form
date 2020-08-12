import React, {Component} from 'react';
import './myProfile.less';

class MyProfile extends Component {
    state = {
      name: '',
      Gender: 'Male',
      Description: '',
      isChecked: false
    }

  handleNameChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleGenderChange = event => {
    this.setState({
      Gender: event.target.value
    })
  }

  handleDescriptionChange = event => {
    this.setState({
      Description: event.target.value
  })
}

handleCheckboxChange = event => {
  this.setState({
    isChecked: event.target.checked
})
}

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.name, this.state.Gender, this.state.Description);
  }

  render() {
    return (
      <form>
        <h1>My Profile</h1>
        <h2>Name</h2>
        <input 
        type="text" 
        id="name"  
        value={this.state.name}
        onChange={this.handleNameChange} />
        <h2>Gender</h2>
        <select id="gender" value={this.state.value} onChange={this.handleGenderChange}>
          <option value="Male" onSelect={this.handleGenderChange}>Male</option>
          <option value="Female" onSelect={this.handleGenderChange}>Female</option>
        </select>
        <h2>Descripion</h2>
        <textarea defaultValue="Description about yourself" value={this.state.value} onChange={this.handleDescriptionChange}></textarea>
        <div>
        <input type="checkbox" checked={this.state.value} onClick={this.handleCheckboxChange}></input>
        <span>I have read the terms of conduct</span>
        </div>
        <button 
        type="submit" 
        disabled={!this.state.name || !this.state.Description || !this.state.isChecked}
        onClick={this.handleSubmit}>Submit</button>
      </form>
    );
  }
}

export default MyProfile;


