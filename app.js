const express = require('express');
const axios = require('axios');
//https://gw.api.alibaba.com/openapi/param2/2/portals.open/api.listHotProducts/75145?categoryId=[categoryId]
var app = express();
app.set("view engine", "ejs");
app.use(express.static(__dirname +"/public"));
//const port = process.env.PORT || 3000;



app.get("/", function(req,res){
  var url='https://gw.api.alibaba.com/openapi/param2/2/portals.open/api.listHotProducts/75145'
  axios.get(url).then((response)=>{
  if(response.data.errorCode !== 20010000){
    //throw new Error('Unable to find that address.');
    console.log('greska');
    res.render('badadd');
  }

    var data= response.data.result.products;
    res.render('index', {data:data});
}).catch((e)=>{
  if (e.code === 'ENOTFOUND'){
    console.log('Unable to connect to API servers');
    res.render('serverproblem');
  } else {
    console.log(e.message);
  }
});
});

app.get("/apparel", function(req,res){
  var url='https://gw.api.alibaba.com/openapi/param2/2/portals.open/api.listHotProducts/75145?categoryId=3'
  axios.get(url).then((response)=>{
  if(response.data.errorCode !== 20010000){
    //throw new Error('Unable to find that address.');
    console.log('greska');
    res.render('badadd');
  }

    var data= response.data.result.products;
    res.render('index', {data:data});
}).catch((e)=>{
  if (e.code === 'ENOTFOUND'){
    console.log('Unable to connect to API servers');
    res.render('serverproblem');
  } else {
    console.log(e.message);
  }
});
});


app.get("/automobiles", function(req,res){
  var url='https://gw.api.alibaba.com/openapi/param2/2/portals.open/api.listHotProducts/75145?categoryId=34'
  axios.get(url).then((response)=>{
  if(response.data.errorCode !== 20010000){
    //throw new Error('Unable to find that address.');
    console.log('greska');
    res.render('badadd');
  }

    var data= response.data.result.products;
    res.render('index', {data:data});
}).catch((e)=>{
  if (e.code === 'ENOTFOUND'){
    console.log('Unable to connect to API servers');
    res.render('serverproblem');
  } else {
    console.log(e.message);
  }
});
});

app.get("/beauty", function(req,res){
  var url='https://gw.api.alibaba.com/openapi/param2/2/portals.open/api.listHotProducts/75145?categoryId=66'
  axios.get(url).then((response)=>{
  if(response.data.errorCode !== 20010000){
    //throw new Error('Unable to find that address.');
    console.log('greska');
    res.render('badadd');
  }

    var data= response.data.result.products;
    res.render('index', {data:data});
}).catch((e)=>{
  if (e.code === 'ENOTFOUND'){
    console.log('Unable to connect to API servers');
    res.render('serverproblem');
  } else {
    console.log(e.message);
  }
});
});

app.get("/computer", function(req,res){
  var url='https://gw.api.alibaba.com/openapi/param2/2/portals.open/api.listHotProducts/75145?categoryId=7'
  axios.get(url).then((response)=>{
  if(response.data.errorCode !== 20010000){
    //throw new Error('Unable to find that address.');
    console.log('greska');
    res.render('badadd');
  }

    var data= response.data.result.products;
    res.render('index', {data:data});
}).catch((e)=>{
  if (e.code === 'ENOTFOUND'){
    console.log('Unable to connect to API servers');
    res.render('serverproblem');
  } else {
    console.log(e.message);
  }
});
});

app.get("/conel", function(req,res){
  var url='https://gw.api.alibaba.com/openapi/param2/2/portals.open/api.listHotProducts/75145?categoryId=44'
  axios.get(url).then((response)=>{
  if(response.data.errorCode !== 20010000){
    //throw new Error('Unable to find that address.');
    console.log('greska');
    res.render('badadd');
  }

    var data= response.data.result.products;
    res.render('index', {data:data});
}).catch((e)=>{
  if (e.code === 'ENOTFOUND'){
    console.log('Unable to connect to API servers');
    res.render('serverproblem');
  } else {
    console.log(e.message);
  }
});
});

app.get("/eleq", function(req,res){
  var url='https://gw.api.alibaba.com/openapi/param2/2/portals.open/api.listHotProducts/75145?categoryId=5'
  axios.get(url).then((response)=>{
  if(response.data.errorCode !== 20010000){
    //throw new Error('Unable to find that address.');
    console.log('greska');
    res.render('badadd');
  }

    var data= response.data.result.products;
    res.render('index', {data:data});
}).catch((e)=>{
  if (e.code === 'ENOTFOUND'){
    console.log('Unable to connect to API servers');
    res.render('serverproblem');
  } else {
    console.log(e.message);
  }
});
});

app.get("/elco", function(req,res){
  var url='https://gw.api.alibaba.com/openapi/param2/2/portals.open/api.listHotProducts/75145?categoryId=502'
  axios.get(url).then((response)=>{
  if(response.data.errorCode !== 20010000){
    //throw new Error('Unable to find that address.');
    console.log('greska');
    res.render('badadd');
  }

    var data= response.data.result.products;
    res.render('index', {data:data});
}).catch((e)=>{
  if (e.code === 'ENOTFOUND'){
    console.log('Unable to connect to API servers');
    res.render('serverproblem');
  } else {
    console.log(e.message);
  }
});
});

app.get("/food", function(req,res){
  var url='https://gw.api.alibaba.com/openapi/param2/2/portals.open/api.listHotProducts/75145?categoryId=2'
  axios.get(url).then((response)=>{
  if(response.data.errorCode !== 20010000){
    //throw new Error('Unable to find that address.');
    console.log('greska');
    res.render('badadd');
  }

    var data= response.data.result.products;
    res.render('index', {data:data});
}).catch((e)=>{
  if (e.code === 'ENOTFOUND'){
    console.log('Unable to connect to API servers');
    res.render('serverproblem');
  } else {
    console.log(e.message);
  }
});
});

app.get("/furniture", function(req,res){
  var url='https://gw.api.alibaba.com/openapi/param2/2/portals.open/api.listHotProducts/75145?categoryId=1503'
  axios.get(url).then((response)=>{
  if(response.data.errorCode !== 20010000){
    //throw new Error('Unable to find that address.');
    console.log('greska');
    res.render('badadd');
  }

    var data= response.data.result.products;
    res.render('index', {data:data});
}).catch((e)=>{
  if (e.code === 'ENOTFOUND'){
    console.log('Unable to connect to API servers');
    res.render('serverproblem');
  } else {
    console.log(e.message);
  }
});
});

app.get("/hair", function(req,res){
  var url='https://gw.api.alibaba.com/openapi/param2/2/portals.open/api.listHotProducts/75145?categoryId=200003655'
  axios.get(url).then((response)=>{
  if(response.data.errorCode !== 20010000){
    //throw new Error('Unable to find that address.');
    console.log('greska');
    res.render('badadd');
  }

    var data= response.data.result.products;
    res.render('index', {data:data});
}).catch((e)=>{
  if (e.code === 'ENOTFOUND'){
    console.log('Unable to connect to API servers');
    res.render('serverproblem');
  } else {
    console.log(e.message);
  }
});
});

app.get("/hardware", function(req,res){
  var url='https://gw.api.alibaba.com/openapi/param2/2/portals.open/api.listHotProducts/75145?categoryId=42'
  axios.get(url).then((response)=>{
  if(response.data.errorCode !== 20010000){
    //throw new Error('Unable to find that address.');
    console.log('greska');
    res.render('badadd');
  }

    var data= response.data.result.products;
    res.render('index', {data:data});
}).catch((e)=>{
  if (e.code === 'ENOTFOUND'){
    console.log('Unable to connect to API servers');
    res.render('serverproblem');
  } else {
    console.log(e.message);
  }
});
});

app.get("/homega", function(req,res){
  var url='https://gw.api.alibaba.com/openapi/param2/2/portals.open/api.listHotProducts/75145?categoryId=15'
  axios.get(url).then((response)=>{
  if(response.data.errorCode !== 20010000){
    //throw new Error('Unable to find that address.');
    console.log('greska');
    res.render('badadd');
  }

    var data= response.data.result.products;
    res.render('index', {data:data});
}).catch((e)=>{
  if (e.code === 'ENOTFOUND'){
    console.log('Unable to connect to API servers');
    res.render('serverproblem');
  } else {
    console.log(e.message);
  }
});
});

app.get("/homeap", function(req,res){
  var url='https://gw.api.alibaba.com/openapi/param2/2/portals.open/api.listHotProducts/75145?categoryId=6'
  axios.get(url).then((response)=>{
  if(response.data.errorCode !== 20010000){
    //throw new Error('Unable to find that address.');
    console.log('greska');
    res.render('badadd');
  }

    var data= response.data.result.products;
    res.render('index', {data:data});
}).catch((e)=>{
  if (e.code === 'ENOTFOUND'){
    console.log('Unable to connect to API servers');
    res.render('serverproblem');
  } else {
    console.log(e.message);
  }
});
});

app.get("/industry", function(req,res){
  var url='https://gw.api.alibaba.com/openapi/param2/2/portals.open/api.listHotProducts/75145?categoryId=200001996'
  axios.get(url).then((response)=>{
  if(response.data.errorCode !== 20010000){
    //throw new Error('Unable to find that address.');
    console.log('greska');
    res.render('badadd');
  }

    var data= response.data.result.products;
    res.render('index', {data:data});
}).catch((e)=>{
  if (e.code === 'ENOTFOUND'){
    console.log('Unable to connect to API servers');
    res.render('serverproblem');
  } else {
    console.log(e.message);
  }
});
});

app.get("/jewelry", function(req,res){
  var url='https://gw.api.alibaba.com/openapi/param2/2/portals.open/api.listHotProducts/75145?categoryId=36'
  axios.get(url).then((response)=>{
  if(response.data.errorCode !== 20010000){
    //throw new Error('Unable to find that address.');
    console.log('greska');
    res.render('badadd');
  }

    var data= response.data.result.products;
    res.render('index', {data:data});
}).catch((e)=>{
  if (e.code === 'ENOTFOUND'){
    console.log('Unable to connect to API servers');
    res.render('serverproblem');
  } else {
    console.log(e.message);
  }
});
});

app.get("/lights", function(req,res){
  var url='https://gw.api.alibaba.com/openapi/param2/2/portals.open/api.listHotProducts/75145?categoryId=39'
  axios.get(url).then((response)=>{
  if(response.data.errorCode !== 20010000){
    //throw new Error('Unable to find that address.');
    console.log('greska');
    res.render('badadd');
  }

    var data= response.data.result.products;
    res.render('index', {data:data});
}).catch((e)=>{
  if (e.code === 'ENOTFOUND'){
    console.log('Unable to connect to API servers');
    res.render('serverproblem');
  } else {
    console.log(e.message);
  }
});
});

app.get("/luggage", function(req,res){
  var url='https://gw.api.alibaba.com/openapi/param2/2/portals.open/api.listHotProducts/75145?categoryId=1524'
  axios.get(url).then((response)=>{
  if(response.data.errorCode !== 20010000){
    //throw new Error('Unable to find that address.');
    console.log('greska');
    res.render('badadd');
  }

    var data= response.data.result.products;
    res.render('index', {data:data});
}).catch((e)=>{
  if (e.code === 'ENOTFOUND'){
    console.log('Unable to connect to API servers');
    res.render('serverproblem');
  } else {
    console.log(e.message);
  }
});
});

app.get("/mother", function(req,res){
  var url='https://gw.api.alibaba.com/openapi/param2/2/portals.open/api.listHotProducts/75145?categoryId=1501'
  axios.get(url).then((response)=>{
  if(response.data.errorCode !== 20010000){
    //throw new Error('Unable to find that address.');
    console.log('greska');
    res.render('badadd');
  }

    var data= response.data.result.products;
    res.render('index', {data:data});
}).catch((e)=>{
  if (e.code === 'ENOTFOUND'){
    console.log('Unable to connect to API servers');
    res.render('serverproblem');
  } else {
    console.log(e.message);
  }
});
});

app.get("/office", function(req,res){
  var url='https://gw.api.alibaba.com/openapi/param2/2/portals.open/api.listHotProducts/75145?categoryId=21'
  axios.get(url).then((response)=>{
  if(response.data.errorCode !== 20010000){
    //throw new Error('Unable to find that address.');
    console.log('greska');
    res.render('badadd');
  }

    var data= response.data.result.products;
    res.render('index', {data:data});
}).catch((e)=>{
  if (e.code === 'ENOTFOUND'){
    console.log('Unable to connect to API servers');
    res.render('serverproblem');
  } else {
    console.log(e.message);
  }
});
});

app.get("/phones", function(req,res){
  var url='https://gw.api.alibaba.com/openapi/param2/2/portals.open/api.listHotProducts/75145?categoryId=509'
  axios.get(url).then((response)=>{
  if(response.data.errorCode !== 20010000){
    //throw new Error('Unable to find that address.');
    console.log('greska');
    res.render('badadd');
  }

    var data= response.data.result.products;
    res.render('index', {data:data});
}).catch((e)=>{
  if (e.code === 'ENOTFOUND'){
    console.log('Unable to connect to API servers');
    res.render('serverproblem');
  } else {
    console.log(e.message);
  }
});
});

app.get("/security", function(req,res){
  var url='https://gw.api.alibaba.com/openapi/param2/2/portals.open/api.listHotProducts/75145?categoryId=30'
  axios.get(url).then((response)=>{
  if(response.data.errorCode !== 20010000){
    //throw new Error('Unable to find that address.');
    console.log('greska');
    res.render('badadd');
  }

    var data= response.data.result.products;
    res.render('index', {data:data});
}).catch((e)=>{
  if (e.code === 'ENOTFOUND'){
    console.log('Unable to connect to API servers');
    res.render('serverproblem');
  } else {
    console.log(e.message);
  }
});
});

app.get("/shoes", function(req,res){
  var url='https://gw.api.alibaba.com/openapi/param2/2/portals.open/api.listHotProducts/75145?categoryId=322'
  axios.get(url).then((response)=>{
  if(response.data.errorCode !== 20010000){
    //throw new Error('Unable to find that address.');
    console.log('greska');
    res.render('badadd');
  }

    var data= response.data.result.products;
    res.render('index', {data:data});
}).catch((e)=>{
  if (e.code === 'ENOTFOUND'){
    console.log('Unable to connect to API servers');
    res.render('serverproblem');
  } else {
    console.log(e.message);
  }
});
});

app.get("/sports", function(req,res){
  var url='https://gw.api.alibaba.com/openapi/param2/2/portals.open/api.listHotProducts/75145?categoryId=18'
  axios.get(url).then((response)=>{
  if(response.data.errorCode !== 20010000){
    //throw new Error('Unable to find that address.');
    console.log('greska');
    res.render('badadd');
  }

    var data= response.data.result.products;
    res.render('index', {data:data});
}).catch((e)=>{
  if (e.code === 'ENOTFOUND'){
    console.log('Unable to connect to API servers');
    res.render('serverproblem');
  } else {
    console.log(e.message);
  }
});
});

app.get("/tools", function(req,res){
  var url='https://gw.api.alibaba.com/openapi/param2/2/portals.open/api.listHotProducts/75145?categoryId=1420'
  axios.get(url).then((response)=>{
  if(response.data.errorCode !== 20010000){
    //throw new Error('Unable to find that address.');
    console.log('greska');
    res.render('badadd');
  }

    var data= response.data.result.products;
    res.render('index', {data:data});
}).catch((e)=>{
  if (e.code === 'ENOTFOUND'){
    console.log('Unable to connect to API servers');
    res.render('serverproblem');
  } else {
    console.log(e.message);
  }
});
});

app.get("/toys", function(req,res){
  var url='https://gw.api.alibaba.com/openapi/param2/2/portals.open/api.listHotProducts/75145?categoryId=26'
  axios.get(url).then((response)=>{
  if(response.data.errorCode !== 20010000){
    //throw new Error('Unable to find that address.');
    console.log('greska');
    res.render('badadd');
  }

    var data= response.data.result.products;
    res.render('index', {data:data});
}).catch((e)=>{
  if (e.code === 'ENOTFOUND'){
    console.log('Unable to connect to API servers');
    res.render('serverproblem');
  } else {
    console.log(e.message);
  }
});
});

app.get("/watches", function(req,res){
  var url='https://gw.api.alibaba.com/openapi/param2/2/portals.open/api.listHotProducts/75145?categoryId=1511'
  axios.get(url).then((response)=>{
  if(response.data.errorCode !== 20010000){
    //throw new Error('Unable to find that address.');
    console.log('greska');
    res.render('badadd');
  }

    var data= response.data.result.products;
    res.render('index', {data:data});
}).catch((e)=>{
  if (e.code === 'ENOTFOUND'){
    console.log('Unable to connect to API servers');
    res.render('serverproblem');
  } else {
    console.log(e.message);
  }
});
});

app.get("/weddings", function(req,res){
  var url='https://gw.api.alibaba.com/openapi/param2/2/portals.open/api.listHotProducts/75145?categoryId=320'
  axios.get(url).then((response)=>{
  if(response.data.errorCode !== 20010000){
    //throw new Error('Unable to find that address.');
    console.log('greska');
    res.render('badadd');
  }

    var data= response.data.result.products;
    res.render('index', {data:data});
}).catch((e)=>{
  if (e.code === 'ENOTFOUND'){
    console.log('Unable to connect to API servers');
    res.render('serverproblem');
  } else {
    console.log(e.message);
  }
});
});


app.listen(3000, function(){
    console.log("Server started...");
});
