'use strict';

var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path: path.join(__dirname, 'public', 'static'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: path.join(__dirname, 'src'),
      loader: ['babel-loader'],
      query: {
        cacheDirectory: 'babel_cache',
        presets: ['react', 'es2015']
      }
    }]
  },
  plugins: [new webpack.ProvidePlugin({
    "React": "react"
  })]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3dlYnBhY2suY29uZmlnLmpzIl0sIm5hbWVzIjpbIndlYnBhY2siLCJyZXF1aXJlIiwicGF0aCIsIm1vZHVsZSIsImV4cG9ydHMiLCJlbnRyeSIsImpvaW4iLCJfX2Rpcm5hbWUiLCJvdXRwdXQiLCJmaWxlbmFtZSIsImxvYWRlcnMiLCJ0ZXN0IiwibG9hZGVyIiwicXVlcnkiLCJjYWNoZURpcmVjdG9yeSIsInByZXNldHMiLCJwbHVnaW5zIiwiUHJvdmlkZVBsdWdpbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxVQUFVQyxRQUFRLFNBQVIsQ0FBaEI7QUFDQSxJQUFNQyxPQUFPRCxRQUFRLE1BQVIsQ0FBYjs7QUFFQUUsT0FBT0MsT0FBUCxHQUFpQjtBQUNmQyxTQUFPSCxLQUFLSSxJQUFMLENBQVVDLFNBQVYsRUFBcUIsS0FBckIsRUFBNEIsVUFBNUIsQ0FEUTtBQUVmQyxVQUFRO0FBQ05OLFVBQU1BLEtBQUtJLElBQUwsQ0FBVUMsU0FBVixFQUFxQixRQUFyQixFQUErQixRQUEvQixDQURBO0FBRU5FLGNBQVU7QUFGSixHQUZPO0FBTWZOLFVBQVE7QUFDTk8sYUFBUyxDQUFDO0FBQ1JDLFlBQU1ULEtBQUtJLElBQUwsQ0FBVUMsU0FBVixFQUFxQixLQUFyQixDQURFO0FBRVJLLGNBQVEsQ0FBQyxjQUFELENBRkE7QUFHUkMsYUFBTztBQUNMQyx3QkFBZ0IsYUFEWDtBQUVMQyxpQkFBUyxDQUFDLE9BQUQsRUFBVSxRQUFWO0FBRko7QUFIQyxLQUFEO0FBREgsR0FOTztBQWdCZkMsV0FBUyxDQUNILElBQUloQixRQUFRaUIsYUFBWixDQUEwQjtBQUN0QixhQUFTO0FBRGEsR0FBMUIsQ0FERztBQWhCTSxDQUFqQiIsImZpbGUiOiJ3ZWJwYWNrLmNvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHdlYnBhY2sgPSByZXF1aXJlKCd3ZWJwYWNrJyk7XG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZW50cnk6IHBhdGguam9pbihfX2Rpcm5hbWUsICdzcmMnLCAnaW5kZXguanMnKSxcbiAgb3V0cHV0OiB7XG4gICAgcGF0aDogcGF0aC5qb2luKF9fZGlybmFtZSwgJ3B1YmxpYycsICdzdGF0aWMnKSxcbiAgICBmaWxlbmFtZTogJ2J1bmRsZS5qcydcbiAgfSxcbiAgbW9kdWxlOiB7XG4gICAgbG9hZGVyczogW3tcbiAgICAgIHRlc3Q6IHBhdGguam9pbihfX2Rpcm5hbWUsICdzcmMnKSxcbiAgICAgIGxvYWRlcjogWydiYWJlbC1sb2FkZXInXSxcbiAgICAgIHF1ZXJ5OiB7XG4gICAgICAgIGNhY2hlRGlyZWN0b3J5OiAnYmFiZWxfY2FjaGUnLFxuICAgICAgICBwcmVzZXRzOiBbJ3JlYWN0JywgJ2VzMjAxNSddXG4gICAgICB9XG4gICAgfV1cbiAgfSxcbiAgcGx1Z2luczogW1xuICAgICAgICBuZXcgd2VicGFjay5Qcm92aWRlUGx1Z2luKHtcbiAgICAgICAgICAgIFwiUmVhY3RcIjogXCJyZWFjdFwiLFxuICAgICAgICB9KSxcbiAgXSxcbn07XG4iXX0=