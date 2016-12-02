'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var request = require('request');
var path = require('path');
var googleAPI = require('./env/config.js');

var port = 4040;

var ip = '127.0.0.1';

app.use(express.static('public'));

app.use(bodyParser.json());

//for cors error
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'accept, content-type, x-parse-application-id, x-parse-rest-api-key, x-parse-session-token');
  // intercept OPTIONS method
  if ('OPTIONS' == req.method) {
    res.send(200);
  } else {
    next();
  }
});

app.get('/', function (req, res) {
  //res.sendFile('index.html', {'root':__dirname+'/../public'});
  res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
});

// api call for google maps
app.get('/fetchData', function (req, res) {
  request(googleAPI.url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.json(body);
    }
  });
});

app.listen(port, ip);
console.log("Listening to port :4040");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZlci9zZXJ2ZXIuanMiXSwibmFtZXMiOlsiZXhwcmVzcyIsInJlcXVpcmUiLCJhcHAiLCJib2R5UGFyc2VyIiwicmVxdWVzdCIsInBhdGgiLCJnb29nbGVBUEkiLCJwb3J0IiwiaXAiLCJ1c2UiLCJzdGF0aWMiLCJqc29uIiwiYWxsIiwicmVxIiwicmVzIiwibmV4dCIsImhlYWRlciIsIm1ldGhvZCIsInNlbmQiLCJnZXQiLCJzZW5kRmlsZSIsInJlc29sdmUiLCJfX2Rpcm5hbWUiLCJ1cmwiLCJlcnJvciIsInJlc3BvbnNlIiwiYm9keSIsInN0YXR1c0NvZGUiLCJsaXN0ZW4iLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLFVBQVVDLFFBQVEsU0FBUixDQUFkO0FBQ0EsSUFBSUMsTUFBTUYsU0FBVjtBQUNBLElBQUlHLGFBQWFGLFFBQVEsYUFBUixDQUFqQjtBQUNBLElBQUlHLFVBQVVILFFBQVEsU0FBUixDQUFkO0FBQ0EsSUFBSUksT0FBT0osUUFBUSxNQUFSLENBQVg7QUFDQSxJQUFJSyxZQUFZTCxRQUFRLGlCQUFSLENBQWhCOztBQUVBLElBQUlNLE9BQU8sSUFBWDs7QUFFQSxJQUFJQyxLQUFLLFdBQVQ7O0FBRUFOLElBQUlPLEdBQUosQ0FBUVQsUUFBUVUsTUFBUixDQUFlLFFBQWYsQ0FBUjs7QUFFQVIsSUFBSU8sR0FBSixDQUFRTixXQUFXUSxJQUFYLEVBQVI7O0FBS0E7QUFDQVQsSUFBSVUsR0FBSixDQUFRLEdBQVIsRUFBYSxVQUFTQyxHQUFULEVBQWNDLEdBQWQsRUFBbUJDLElBQW5CLEVBQXlCO0FBQ2xDRCxNQUFJRSxNQUFKLENBQVcsNkJBQVgsRUFBMEMsR0FBMUM7QUFDQUYsTUFBSUUsTUFBSixDQUFXLDhCQUFYLEVBQTJDLGlDQUEzQztBQUNBRixNQUFJRSxNQUFKLENBQVcsOEJBQVgsRUFBMkMsMkZBQTNDO0FBQ0M7QUFDRCxNQUFJLGFBQWFILElBQUlJLE1BQXJCLEVBQTZCO0FBQzNCSCxRQUFJSSxJQUFKLENBQVMsR0FBVDtBQUNELEdBRkQsTUFHSztBQUNISDtBQUNEO0FBQ0osQ0FYRDs7QUFjQWIsSUFBSWlCLEdBQUosQ0FBUSxHQUFSLEVBQWEsVUFBU04sR0FBVCxFQUFhQyxHQUFiLEVBQWlCO0FBQzVCO0FBQ0FBLE1BQUlNLFFBQUosQ0FBYWYsS0FBS2dCLE9BQUwsQ0FBYUMsU0FBYixFQUF3QixJQUF4QixFQUE4QixRQUE5QixFQUF3QyxZQUF4QyxDQUFiO0FBQ0QsQ0FIRDs7QUFRQTtBQUNBcEIsSUFBSWlCLEdBQUosQ0FBUSxZQUFSLEVBQXFCLFVBQVNOLEdBQVQsRUFBYUMsR0FBYixFQUFpQjtBQUNwQ1YsVUFBUUUsVUFBVWlCLEdBQWxCLEVBQXVCLFVBQVVDLEtBQVYsRUFBaUJDLFFBQWpCLEVBQTJCQyxJQUEzQixFQUFpQztBQUN0RCxRQUFJLENBQUNGLEtBQUQsSUFBVUMsU0FBU0UsVUFBVCxJQUF1QixHQUFyQyxFQUEwQztBQUN4Q2IsVUFBSUgsSUFBSixDQUFTZSxJQUFUO0FBQ0Q7QUFDRixHQUpEO0FBS0QsQ0FORDs7QUFRQXhCLElBQUkwQixNQUFKLENBQVdyQixJQUFYLEVBQWdCQyxFQUFoQjtBQUNBcUIsUUFBUUMsR0FBUixDQUFZLHlCQUFaIiwiZmlsZSI6InNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO1xudmFyIGFwcCA9IGV4cHJlc3MoKTtcbnZhciBib2R5UGFyc2VyID0gcmVxdWlyZSgnYm9keS1wYXJzZXInKTtcbnZhciByZXF1ZXN0ID0gcmVxdWlyZSgncmVxdWVzdCcpO1xudmFyIHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG52YXIgZ29vZ2xlQVBJID0gcmVxdWlyZSgnLi9lbnYvY29uZmlnLmpzJylcblxudmFyIHBvcnQgPSA0MDQwO1xuXG52YXIgaXAgPSAnMTI3LjAuMC4xJztcblxuYXBwLnVzZShleHByZXNzLnN0YXRpYygncHVibGljJykpO1xuXG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcblxuXG5cblxuLy9mb3IgY29ycyBlcnJvclxuYXBwLmFsbCgnKicsIGZ1bmN0aW9uKHJlcSwgcmVzLCBuZXh0KSB7XG4gICAgcmVzLmhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJywgJyonKTtcbiAgICByZXMuaGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1NZXRob2RzJywgJ1BVVCwgR0VULCBQT1NULCBERUxFVEUsIE9QVElPTlMnKTtcbiAgICByZXMuaGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzJywgJ2FjY2VwdCwgY29udGVudC10eXBlLCB4LXBhcnNlLWFwcGxpY2F0aW9uLWlkLCB4LXBhcnNlLXJlc3QtYXBpLWtleSwgeC1wYXJzZS1zZXNzaW9uLXRva2VuJyk7XG4gICAgIC8vIGludGVyY2VwdCBPUFRJT05TIG1ldGhvZFxuICAgIGlmICgnT1BUSU9OUycgPT0gcmVxLm1ldGhvZCkge1xuICAgICAgcmVzLnNlbmQoMjAwKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBuZXh0KCk7XG4gICAgfVxufSk7XG5cblxuYXBwLmdldCgnLycsIGZ1bmN0aW9uKHJlcSxyZXMpe1xuICAvL3Jlcy5zZW5kRmlsZSgnaW5kZXguaHRtbCcsIHsncm9vdCc6X19kaXJuYW1lKycvLi4vcHVibGljJ30pO1xuICByZXMuc2VuZEZpbGUocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uJywgJ3B1YmxpYycsICdpbmRleC5odG1sJykpO1xufSlcblxuXG5cblxuLy8gYXBpIGNhbGwgZm9yIGdvb2dsZSBtYXBzXG5hcHAuZ2V0KCcvZmV0Y2hEYXRhJyxmdW5jdGlvbihyZXEscmVzKXtcbiAgcmVxdWVzdChnb29nbGVBUEkudXJsLCBmdW5jdGlvbiAoZXJyb3IsIHJlc3BvbnNlLCBib2R5KSB7XG4gICAgaWYgKCFlcnJvciAmJiByZXNwb25zZS5zdGF0dXNDb2RlID09IDIwMCkge1xuICAgICAgcmVzLmpzb24oYm9keSk7XG4gICAgfVxuICB9KVxufSlcblxuYXBwLmxpc3Rlbihwb3J0LGlwKTtcbmNvbnNvbGUubG9nKFwiTGlzdGVuaW5nIHRvIHBvcnQgOjQwNDBcIik7XG4iXX0=