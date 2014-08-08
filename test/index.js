var server = sinon.fakeServer.create();
server.respondWith("/foo", [
    200,
    {"Content-Type": "application/json"},
    JSON.stringify({"data": "foo"})
]);
server.autoRespond = true;

var promise = get('/foo');

server.respond();

// When request completes.
promise.then(function( resp ){
  console.log(resp);
  document.getElementById('console').value = resp;
});

// If request fails.
promise.catch(function( resp ){
  console.log( resp );
});