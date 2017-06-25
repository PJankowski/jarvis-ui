import express from 'express';
import path from 'path';
import ejs from 'ejs';
import chalk from 'chalk';
import morgan from 'morgan';
import React from 'react';
import ReactServer from 'react-dom/server';
import App from '../public/src/index.jsx';

import { PORT } from './config.js';

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, '..', 'public')));

function initRender(req, res) {
  const html = ReactServer.renderToString(<App />);

  res.render('index', { html });
}

app.get('/', initRender);

app.listen(PORT, () => {
  console.log();
  console.log(chalk.cyan(`Server open at on port: ${PORT}`));
  console.log();
});