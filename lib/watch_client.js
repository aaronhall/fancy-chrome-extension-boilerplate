var socket = io('http://localhost:4321');

socket.on('connection', function (data) {
  console.log('Connected to watch server');
});

socket.on('projectRebuilt', function (data) {
  console.clear();
  console.log('Project files changed. Reloading extension...');
  chrome.runtime.reload();
});