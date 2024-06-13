import { exec } from 'child_process';
import open from 'open';
import waitOn from 'wait-on';

// Command to start your development server
const serverCommand = 'vite';

const serverProcess = exec(serverCommand);

serverProcess.stdout.on('data', (data) => {
  console.log(data.toString());
  
  // Match the port number from the output
  const match = data.toString().match(/http:\/\/localhost:(\d+)/);
  if (match) {
    const port = match[1];
    const url = `http://localhost:${port}`;
    
    // Wait for the server to be ready
    waitOn({ resources: [url] }, (err) => {
      if (err) {
        console.error('Error waiting for the server:', err);
        return;
      }

      // Open the URL in the default browser
      open(url);
    });
  }
});

serverProcess.stderr.on('data', (data) => {
  console.error(data.toString());
});
