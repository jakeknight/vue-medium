
const ObjectId = require('mongodb').ObjectId;

module.exports = function(app, db) {
    app.get('/articles', (req, res) => {
        db.collection('posts').find({}).toArray((err, result) => {
            if (err) {
                res.send({ 'error': 'An error has occured' });
            } else {
                res.send(result);
            }
        })
    });

    app.get('/article/:id', (req, res) => {
        const id = new ObjectId(req.params.id)
        console.log(id)
        db.collection('posts').findOne({'_id': id}, function(err, result) {
            if (err) {
                res.send({ 'error': 'An error has occured'});
            } else {
                res.send(result);
            }
        })
    });

    app.post('/articles', (req, res) => {
        const article = { 
            id: req.body.id,
            title: req.body.title,
            dateAdded: Date.now(),
            excerpt: req.body.excerpt,
            category: req.body.category,
            imgSrc: req.body.imgSrc,
            author: req.body.author,
            content: req.body.content
         }
         db.collection('posts').insert(article, (err, result) => {
             if (err) {
                 res.send({ 'error': 'An error has occured'});
             } else {
                 res.send(result.ops[0]);
                 console.log(res);
                 console.log('article added');
             }
         })
    });
};