var GroceryList = () => (
  <ul>
    <li>Avocado</li>
    <li>Orange</li>
  </ul>
);

var GroceryList = () => (
    <div>
      <h2>Avocado</h2>
      <h2>Orange</h2>
    </div>
);

ReactDOM.render(
  <GroceryList/>,
  document.getElementById('app')
);

var GroceryListItem = (props) => (
  <ul>
    <li>{props. groceryItems[0]}</li>
    <li>{props. groceryItems[1]}</li>
    <li>{props. groceryItems[2]}</li>
    <li>{props. groceryItems[3]}</li>
  </ul>
);

var GroceryList = () => (
  <div>
    <h2> My Grocery List</h2>
    <GroceryListItem groceryItems = {['Avocado', 'Orange', 'Banana', 'Bread']}/>
  </div>
);

ReactDOM.render(
  <GroceryList/>,
  document.getElementById('app')
);

class NewGroceryListItem extends React.Component {
  constructor (props) {
    super (props);

    this.state = {
      done: false
    };
  }

  onListItemHover() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    var style = {
      fontWeight: this.state.done ? 'bold' : 'none'
    };

    return (
      <li style={style} onMouseEnter={this.onListItemHover.bind(this)}>{this.props.groceryItem}</li>
    );
  }
}

var GroceryListItem = (props) => (
  <ul>
    {props.groceryItems.map(groceryItem =>
      <NewGroceryListItem groceryItem={groceryItem} />
      )}
  </ul>
);

var GroceryList = () => (
  <div>
    <h2> My Grocery List</h2>
    <GroceryListItem groceryItems = {['Avocado', 'Orange', 'Banana', 'Bread']}/>
  </div>
);

ReactDOM.render(
  <GroceryList/>,
  document.getElementById('app')
);






