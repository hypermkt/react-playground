// JSXを利用する場合はReactが必要
// import React, { Component } from "react";
// import PropTypes from 'prop-types';

import React, { Component } from "react";
import { connect } from 'react-redux';

// // クラスコンポーネント
// // class App extends Component {
// //   render() {
// //     // Reactの制約: return で返すものは１つのタグでなければならない
// //     return (
// //       <React.Fragment>
// //         <label htmlFor="bar">bar</label>
// //         <input type="text" onChange={() => {console.log("im clicked")}} />
// //       </React.Fragment>
// //     )
// //   }
// // }

// // 関数コンポーネント
// const App = () => {
//   const profiles = [
//     { name: "Hoge", age: 10 },
//     { name: "Max", age: 5 },
//     // { name: "Hoge" },
//   ]
//   return (
//     <div>
//       {
//         profiles.map((profile, index) => {
//           return <User name={profile.name} age={profile.age} key={index} />
//         })
//       }
//     </div>
//   )
// }

// const User = (props) => {
//   return <div>Hi, {props.name}, {props.age} years old.</div>
// }

// // User.defautProps = {
// //   age: 1
// // }

// User.propTypes = {
//   name: PropTypes.string,
//   age: PropTypes.number.isRequired,
// }

// props: コンポーネントの属性

// const App = () => (<Counter></Counter>)

import { increment, decrement } from '../actions';

class App extends Component {
  render() {
    const props = this.props
    return (
      <React.Fragment>
        <div>value: {props.value}</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ value: state.count.value })

// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement()),
// })
const mapDispatchToProps = ({ increment, decrement });

export default connect(mapStateToProps, mapDispatchToProps)(App)
// export default App;
