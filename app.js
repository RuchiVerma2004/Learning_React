// const heading = React.createElement("h1",{id:"heading"},"Hello world created using React!");
// // {} this object is the place where you will give attributes to your tag
// // this heading is an object not a tag
// console.log(heading);
// const p1 = React.createElement("p",{},"this is first paragraph created by me on react")

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);//this render method is converting heading object into tag and putting it over there
// // root.render(p1);

// =======================================================
// most costly operation is dom manipulation:
// manupulate dom with js
// most costly expencive operation in browser or a web page is when dom nodes need to manupilate
// as dom tree is changing
// so all library or frameworks are trying to optimse this
// react also comes with the philosopy that whenever you need to do anything on the web page do it using js
// react solve this problem by creating virtual dom
// virtual dom is a lightweight in memory representation of real dom
// react update virtual dom and then compare it with real dom
// and then update real dom only when it is necessary
// this way react reduce the number of dom manipulation and make it faster and efficient







// =========================Nested=====================================

// const parent = React.createElement(
//     "div",
//     {id:"parent"},
//     React.createElement(
//         "div",
//          {id:"child"},
//          React.createElement("h1",{},"'I am nested h1 tag")
//     )

// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);
// =================================================================

// ReactElement(object) ==> HTML (Browser Understands)
// react element is an object which is converted to html tag
// react element is not a tag it is an object which is converted to tag
// react.createElement is a function which returns an object
// this object is called react element
// how props and children works

// core of react is this what we studied, jsx will mke our lives easy when we have to creating tags
// what we studied is basic or code  this is complicated so we don't use this we use jsx instead





// if we have to make siblings we will use arrays
// ===================================practice================================

// const outer = React.createElement(
//     "div",
// {id: "outer"},
// [
//     React.createElement(
//         "div",
//         {id:"left"},
//         React.createElement("p",{},"paragraph of left")
//     ),
//     React.createElement(
//         "div",
//         {id:"right"},[
//             React.createElement("p",{},"paragraph of left"),
//             React.createElement("p",{},"paragraph of left"),
//             React.createElement("p",{},"paragraph of left")

//         ]
//     )
// ]);

// const root = ReactDOM.createRoot(document.querySelector("#root"));
// root.render(outer);
// ===================================practice================================
//order of files matters a lot .
//we can add react even to a small section of our code.
//we can use react with other libraries and frameworks.
//react is a view library.
//react is not a full fledged framework.
//react is used for building user interfaces.
//react is used for building reusable ui components.
//react is used for building fast and scalable applications.
//react is used for building applications with complex and dynamic user interfaces.
//react is used for building applications with a lot of user interaction.
//react is used for building applications with a lot of data changes.
//react is used for building applications with a lot of real time updates.
//react is used for building applications with a lot of animations and transitions.
//react is used for building applications with a lot of accessibility features.
//react is used for building applications with a lot of internationalization and localization features.
//react is used for building applications with a lot of security features.
//react is used for building applications with a lot of testing and debugging features.
//react is used for building applications with a lot of deployment and maintenance features.

//react is used for building applications with a lot of scalability and performance features.
//react is used for building applications with a lot of reliability and fault tolerance features.
//react is used for building applications with a lot of maintainability and extensibility features.
//react is used for building applications with a lot of reusability and modularity features.
//react is used for building applications with a lot of flexibility and customizability features.

//react is used for building applications with a lot of simplicity and ease of use features.

// other method other than cdn link
import React from "react";
import ReactDOM from "react-dom/client";

// const main = React.createElement("div",
//     {id:"outer"},
//     [React.createElement("div",{id:"inner"},"i am in innner div"),
//     React.createElement("div",{id:"inner"},"i am in innner div"),
//     React.createElement("div",{id:"inner"},"i am in innner div"),
//     React.createElement("div",{id:"inner"},"i am in innner div")]
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(main);

// const heading = React.createElement("h1",
//     {id:"heading"},
//     "i am a heading created by React.createElement"
// );

// JSX Syntax 
const Head =()=> <h1 id = "heading">hello there here is the use of JSX to make codeing easier</h1>;


// React Component
// Component composition 
const Heading = () => {
  return (
    <div>
        <h1 id="heading"> hello there here comes use of react component</h1>
        <Head/>
    </div>
    )
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading/>);

