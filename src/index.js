import express from 'express';
import renderer from './helper/renderer';
import morgan from 'morgan';

const app = express();

app.use(express.static('public'));
app.use(morgan('combined'));

app.get('*', (req, res) => {
    const content = renderer(req);

    res.send(content);
})

app.listen(3000, () => {
    console.log('Listening on port 3000');
});