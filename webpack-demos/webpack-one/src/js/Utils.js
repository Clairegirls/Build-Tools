//1 es5
var Utils = {
  fetchData: function(){
    var url='/api/some_lists';
    fetch(url).then(function(response) {
        return response.json();
    }).then(function(data) {
        console.log(data);
    }).catch(function(e) {
        console.log("Oops, error");
    });
  }
}

//es6 

class Utils {
  constructor({url}){
    this.url = url
    this.fetchData(this.url)
  }
  fetchDaata(url){
    fetch(url).then( res => {
      //res
    }).then( data =>{
      // data
    }).catch( err => {
      //error
    })
  }
}

modules.exposts = Utils
