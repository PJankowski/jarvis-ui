import path from 'path';

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({ path: path.join(__dirname, '../variables.env') });
}

export const PORT = process.env.PORT;