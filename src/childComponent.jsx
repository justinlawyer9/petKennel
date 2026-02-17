import React from 'react';


class ChildComponent extends React.Component {

  constructor(props) {
  
   super(props);
   this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() { 
   this.props.onAction(this.props.id)
  }
  
  render(){
    const {header, image,onAction,id, buttonText} = this.props;
   return (
    <div className="child-card">
          <h2>{header}</h2>
          <img src={this.props.image}
            width="300" height="300"
          />
          <button
          className='ui basic button'
          onClick={this.handleButtonClick}
          style={{ 
            marginTop: "10px", 
            cursor: "pointer",
            padding: "10px 20px" 
          }}
          >
            {this.props.buttonText}
        </button>
    </div>
  );
 }
}

export default ChildComponent;
