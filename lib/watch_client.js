var socket = io('http://localhost:4321');

socket.on('connection', function (data) {
  console.log('[watch server] Connected to watch server');
});

socket.on('serverRebuildStart', function (data) {
  console.clear();
  console.log('[watch server] Server started rebuilding the project, waiting...');
});

socket.on('serverRebuildDone', function (data) {
  console.log('[watch server] Rebuild finished, reloading extension...');
  chrome.runtime.reload();
  console.log('Done.');
});