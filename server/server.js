var http = require('http')
var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var server = http.Server(app)
var User = require('./user.model')
var Admin = require('./admin.model')
// var bcrypt = require('bcrypt-nodejs');
const path = require('path');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

// DB Connection
var mongoose = require('mongoose')
mongoose.Promise = global.Promise
var dbURL = 'mongodb://localhost:27017/project309' //change this if you are using Atlas
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }) 
mongoose.connection.on('error', (error) => {
        console.log(error);
    });


// your server routes go here
app.use('/css', express.static(path.join(__dirname , '../client/public/css')));
app.use('/files', express.static(path.join(__dirname , '../client/public/files')));
app.use('/img', express.static(path.join(__dirname , '../client/public/img')));
app.use('/js', express.static(path.join(__dirname , '../client/public/js')));


app.get('/', function(request, response){
    response.sendFile(path.join(__dirname , '../client/index.html'));
})


// Create a new admin user
app.post('/register', function(request, response){
  var new_user = new Admin(request.body);
  new_user.password = new_user.generateHash(request.password);
  new_user.save(function (err, data){
    if (err)
    return response.status(400).json({
      error: 'data is missing'
    })
    return response.status(200).json({
      message: 'admin user created successfully'
  })
  } );
})

app.post('/', function(request, response){
  Admin.findOne({username: request.body.username}, function(err, user) {
  //  var encryptedPass = bcrypt.hashSync(request.body.password, bcrypt.genSaltSync(8), null);
  //  if(bcrypt.compareSync(encryptedPass, this.encryptedPass)){
  //    response.send('logged in successfully!');
  //  }else {
  //    response.send('error! can\'t login');
  //  }
    // user.generateHash(request.body.password);

    if (!user.validPassword(user.generateHash(request.body.password))) {
      //password did not match
      response.send('username or password invalid')
    } else {
      // password matched. proceed forward
      response.sendFile(path.join(__dirname , '../client/public/files/addStudent.html'));
    }
  });
})

app.get('/dashboard', function(request, response){
    response.sendFile(path.join(__dirname , '../client/public/files/dashboard.html'));
})

app.get('/addStudent', function(request, response){
    response.sendFile(path.join(__dirname , '../client/public/files/addStudent.html'));
})

app.get('/addTeacher', function(request, response){
    response.sendFile(path.join(__dirname , '../client/public/files/addTeacher.html'));
})

app.get('/users/all', function(request, response){
    User.find({}, function (err, data) {
      if(err){
        return response.status(400).json({
          error: 'data is missing'
        })
      }
        // console.log(data);
      return response.status(200).json(JSON.stringify(data));
      })
})



app.post('/user/new', function(request, response){
    var newUser = new User(request.body)

    newUser.save(function (err, data) {
        if (err)
          return response.status(400).json({
            error: 'data is missing'
          })
        return response.status(200).json({
          message: 'Product created successfully'
        })
      })     
})

// app.put('/product/update/:id/:quantity/', (request, response) => {
//   Product.findByIdAndUpdate(request.params.id,{'quantity':request.params.quantity}, {new:true}, (err, data) => {
//     console.log(data);
//     if(err){
//       return response.status(400).json({
//         error: 'Request failed'
//       })
//     }
//     return response.status(200).json({
//       message: 'Product updated successfully'
//     })
//   })
// })

// app.delete('/product/:id', (request, response) => {
//   Product.findByIdAndRemove(request.params.id, (err, data) => {
//     if(err){
//       return response.status(400).json({
//         error: 'Request failed'
//       })
//     }
//     return response.status(200).json({
//       message: 'Product deleted successfully'
//     })
//   })
// })


server.listen(process.env.PORT || 3000,
  process.env.IP || 'localhost', function(){
  console.log('Server running');
})


