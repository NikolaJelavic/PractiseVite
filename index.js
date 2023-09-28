// server.mjs

import { fileURLToPath } from 'url';
import { dirname } from 'path';
import express from 'express';
import path from 'path';
// import ejs from 'ejs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/ejs', (req, res) => {
  res.render('home.ejs');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


















// import { franc } from 'franc';
// import langs from 'langs';
// import colors from 'colors';
 
// const input = process.argv[2];
// const langCode = franc(input);
// if (langCode === 'und') {
//     console.log(colors.red("SORRY, COULDN'T FIGURE IT OUT! TRY WITH MORE SAMPLE TEXT!"));
// } else {
//     const language = langs.where("3", langCode);
//     if (language) {
//         console.log(colors.green(`Our best guess is: ${language.name}`));
//     } else {
//         console.log(colors.red(`SORRY, COULDN'T FIND A LANGUAGE FOR CODE: ${langCode}`));
//     }
// }

//node index.js 'Maaari ba akong magpalit ng pera?'