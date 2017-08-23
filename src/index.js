function liveTime() {
  //Reach element takes at least 3 arguments:
  //1. type of element
  //2. props
  //3. children of the element
  var greeting = React.createElement('h1', {}, 'Hello, World!');

  var clock = React.createElement('h2', {}, `It is ${new Date().toLocaleTimeString()}`);

  //single element that houses greeting and clock
  var app = React.createElement('div', {}, greeting, clock);

  ReactDOM.render(
    //what to render
    app,
    //where to render it
    document.getElementById('react-app-root')
  );
}

//runs whole function every second
setInterval(liveTime, 1000);
