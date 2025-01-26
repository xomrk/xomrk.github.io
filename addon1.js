// hello world
(function(){
// START all funcs  
  var adds = { 
// START list of zz().funcs (1)
    first : {
// END list of zz().funcs (1)
      },
// START list of zz.funcs (2)
    second : {
// END list of zz.funcs (2)            
      }
// END of all funcs  
    }; 
  for (var key in adds.first) {
    zz.funcz[key]=adds.first[key];
    }
  for (var key in adds.second) {
    zz[key]=adds.second[key];
    }
// START extension autorun section
  window.console.log('addon1 started');
// END extension autorun section
  })();
