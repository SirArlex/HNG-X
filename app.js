const express = require('express');

const app = express();

// middleware
app.use(express.json());

app.listen(3000)



app.get('/api', (req, res) => 
{
    const slack_name = req.query.name 
    const track = req.query.track 
    
    const slackDetails ={
        'slack_name': slack_name,
        'current_day': 'Monday',
        //'utc_time': new Date().toISOString.split('.')[0] + 'Z',
        'github_file-url': '',
        'github-repo_url': '',
        'track': track,
        'status_code' : 200

    }
    res.status(200).json(slackDetails)
});
