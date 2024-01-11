import app from './app';
import 'dotenv/config';

app.listen(process.env.URI, () => {
  console.log(`Server running on port ${process.env.URI}!`);
});
