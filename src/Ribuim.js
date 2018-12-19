import React, { PureComponent } from 'react';
class Ribuim extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      numOfChildren: 0,
      display: 'block'
    }
    this.onClick = this.onClick.bind(this)
    this.renderChildren = this.renderChildren.bind(this)
  }
  onClick(e) {
    e.stopPropagation()
    this.setState({ numOfChildren: this.state.numOfChildren + 1 })
  }
  componentWillReceiveProps(props) {
    if (props.display !== this.props.display) {
      this.setState({ display: props.display })
    }
  }
  // display the children
  renderChildren() {
    let arr = []
    for (let index = 0; index < this.state.numOfChildren; index++) {
      arr.push(<div >
        <Ribuim text={index} display={this.state.display} margin={160} />
      </div>)
    }
    return arr;
  }

  render() {
    return (<div>

      <button style={{ zIndex: 99999 }} onClick={(e) => {
        e.stopPropagation();
        this.setState({ display: 'none' })
      }} >Hide</button>

      <button style={{ zIndex: 99999 }} onClick={(e) => {
        e.stopPropagation();
        this.setState({ display: 'block' })
      }} >Show</button>


      <div onClick={this.onClick} style={{ display: this.state.display, color: 'white', border: '2px solid white', margin: 10, width: 150, backgroundColor: 'blue', marginLeft: this.props.margin || 0 }}>
        <h1>{this.state.numOfChildren}</h1>
        {this.renderChildren()}
      </div ></div>
    );
  }
}

export default Ribuim;
