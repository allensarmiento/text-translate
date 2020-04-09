const bodyParser    = require('body-parser'),
      config        = require('./config/config'),
      cors          = require('cors'),
      express       = require('express'),
      { Translate } = require('@google-cloud/translate').v2;

const app = express();
const translate = new Translate({ projectId: config.projectId });

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/translate', (req, res) => {
  // Data to be received. targetLanguage will be the 
  // language abbreviation.
  const initialText = req.body.text;
  const targetLanguage = req.body.language;

  // Check if data received is valid.
  if (!initialText || !targetLanguage) {
    console.log('Invalid values given.');
    res.status(400).send();
  }

  // Translate the text to the target language.
  translate
    .translate(initialText, targetLanguage)
    .then(translation => {
      // Translation successful, send translated text.
      const [translatedText] = translation;
      res.status(200).json({ translatedText });
    })
    .catch(err => {
      // Translation unsuccessful, display error message.
      console.log(err.message);
      res.status(400).send();
    });
});

const port = config.Port || 8080;
app.listen(port, () => console.log(`App listening on port ${port}`));
