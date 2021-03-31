const express = require('express');
const app = new express();
const dotenv = require('dotenv');
dotenv.config();
app.use(express.static('client'))
const cors_app = require('cors');
app.use(cors_app());


function getNLUInstance() {
  let api_key = process.env.API_KEY;
  let api_url = process.env.API_URL;
      
  const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1');
  const { IamAuthenticator } = require('ibm-watson/auth');

  const NaturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
      version: '2020-08-01',
      authenticator: new IamAuthenticator({
      apikey: api_key,
      }),
      serviceUrl: api_url,
  });

return NaturalLanguageUnderstanding;
}


app.get("/",(req,res)=>{
    res.render('index.html');
  });

// Handle Sentiment
app.post("/url/sentiment", (req,res) => {
  console.log("from server:" + req.query.url );
  const analyzeParams = {
    'url': req.query.url,
    'features': {
      'sentiment': {
        'document': true
      },
    }
  };
  
  getNLUInstance().analyze(analyzeParams)
    .then(analysisResults => {
      //just for log in the console
      console.log(JSON.stringify(analysisResults, null, 2));
      // return response in JSON
      res.json(analysisResults)
    })
    .catch(err => {
      console.log('error:', err);
    }); 
});

app.post("/text/sentiment", (req,res) => {
  console.log("from server:" + req.query.text );
  const analyzeParams = {
    'text': req.query.text,
    'features': {
      'sentiment': {
        'document': true
      },
    }
  };
  
  getNLUInstance().analyze(analyzeParams)
    .then(analysisResults => {
      //just for log in the console
      console.log(JSON.stringify(analysisResults, null, 2));
      // return response in JSON
      res.json(analysisResults)
    })
    .catch(err => {
      console.log('error:', err);
    }); 
});

//Handle tet Emotions
// POST 
app.post("/text/emotion", (req,res) => {
  console.log("from server:" + req.query.text );
  const analyzeParams = {
    'text': req.query.text,
    'features': {
      'emotion': {
        'document': true
      },
    },
  };
  
  getNLUInstance().analyze(analyzeParams)
    .then(analysisResults => {
      //just for log in the console
      console.log(JSON.stringify(analysisResults, null, 2));
      // return response in JSON
      res.json(analysisResults) //['result']['keywords']['0']['emotion']
    })
    .catch(err => {
      console.log('error:', err);
    }); 
});

app.post("/url/emotion", (req,res) => {
  console.log("from server:" + req.query.url );
  const analyzeParams = {
    'url': req.query.url,
    'features': {
      'emotion': {
        'document': true
      },
    }
  };
  
  getNLUInstance().analyze(analyzeParams)
    .then(analysisResults => {
      //just for log in the console
      console.log(JSON.stringify(analysisResults, null, 2));
      // return response in JSON
      res.json(analysisResults)
    })
    .catch(err => {
      console.log('error:', err);
    }); 
});


let server = app.listen(8080, () => {
    console.log('Listening', server.address().port)
})
