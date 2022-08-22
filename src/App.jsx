/*
NOTES:
  - props is read only i.e. cannot be reassigned!!! for example: props.animal = "chicken" is a no no!
  -  complier is responsible for recognising <li></li> as jsx & not js
  - <></> is short for <React.Fragment></React.Fragment>
  - "react" needs to be imported in order to use jsx
  - 'className' is an example of react's attributes (these are camelCased)
*/

import React from "react";
import Header from "./components/Header";

export default function App({ name, animal }) {
  const cats = [
    { id: 1, name: "George" },
    { id: 2, name: "Cleo" }
  ];

  return (
    <>
      <Header />
      <h1>Hello, {animal}!</h1>
      <p>meow, meow, meow</p>
      <ul>
        {cats.map((cat) => (
          <li key={cat.id}>{cat.name}</li>
        ))}
      </ul>
    </>
  );
}
