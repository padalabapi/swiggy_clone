// const heading = document.createElement('h2');
// heading.innerHTML = "hello world to namaste react";
// const Root = document.getElementById("root");
// Root.appendChild(heading);
const heading = React.createElement("h1", {
    id: "heading_1"
}, "hello namaste react for react jdghfyukgrgru");
const heading1 = React.createElement("h1", {}, "hello namaste react for react jdghfyukgrgru");
const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child1"
    }),
    [
        React.createElement("h1", {
            id: "heading2"
        }, "i am h1 tag"),
        React.createElement("h2", {
            id: "heading2"
        }, "i am h1 tag")
    ],
    React.createElement("div", {
        id: "child1"
    }),
    [
        React.createElement("h1", {
            id: "heading2"
        }, "i am h1 tag"),
        React.createElement("h2", {
            id: "heading2"
        }, "i am h1 tag")
    ]
]);
const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render([
    heading,
    heading1,
    parent
]);

//# sourceMappingURL=index.6bd02f5a.js.map
