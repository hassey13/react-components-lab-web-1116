const BUTCHER_PRODUCTS = [
  'Tenderloin',
  'Short ribs',
  'Beef shin',
  'Ribeye'
];

var first = React.createElement('p', {}, 'Two grannies having the time of their life!')
var second = React.createElement('p', {}, 'Passengers:')
var l1 = React.createElement('li', {}, 'Agnes')
var l2 = React.createElement('li', {}, 'Muriel')
var list = React.createElement('ul', {}, [l1,l2])

class OlderCoaster extends React.Component {
  render() {
    return React.createElement('div', {className: 'oldercoaster'}, [first, second, list] )
  }
}
var text = 'Sometimes, the solution is '
var strongText = React.createElement('strong', {}, 'right in front of you.')

var ifoyp1 = React.createElement('p', {}, 'You shouldn\'t look too far.')
var ifoyp2 = React.createElement('p', {}, [text,strongText])

class InFrontOfYou extends React.Component {
  render() {
    return React.createElement('div', {}, [ifoyp1, ifoyp2] )
  }
}

var bText = React.createElement('p', {}, 'Hello! We have the following products for sale today:')

var bLI = BUTCHER_PRODUCTS.map(function(element) {
    return React.createElement('li', {}, element);
  })

var bList = React.createElement('ul', {}, bLI)

class ButcherShop extends React.Component {
  render() {
    return React.createElement('div', {className: 'butcher-shop'}, [bText, bList] )
  }
}

ReactDOM.render(
  React.createElement('div', {}, [
    React.createElement(OlderCoaster),
    React.createElement(InFrontOfYou),
    React.createElement(ButcherShop)
  ]),
  document.getElementById('main')
);

//
// <div class="butcher-shop">
//   <p>Hello! We have the following products for sale today:</p>
//   <ul>
//     <li>Tenderloin</li>
//     <li>Short ribs</li>
//     <li>Beef shin</li>
//     <li>Ribeye</li>
//   </ul>
// </div>
