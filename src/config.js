let API_URL = 'http://localhost:1337';

if (process.env.NODE_ENV === 'production') {
  // API_URL = 'http://localhost:1339';
  API_URL = '138.68.49.219';  
}

export { API_URL };
