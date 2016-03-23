
(function (global, factory) {
  factory(global);
}(window , function() {
  // zz is future MyLib (long name)
  var zz = function(elem) {
    return new zz.funcz.init(elem);
  }
  zz.funcz = {
    init: function(elem) {
      elem = typeof elem == 'string' ? window.document.getElementById(elem) : elem;
      this[0] = elem;
      return this;
    },
// START (1) 	
    testClick1 : function() { 
      window.console.log(this[0]);
      this[0].appendChild(document.createElement("br"));
      this[0].appendChild(document.createTextNode('On\n2' ));      
      },  
    // last func (1)
    lastF1 : function() { 
      return 'lastF1 is done ';
      }    
// END (1)	   
  };
// !! (I) js magic !!  
  zz.funcz.init.prototype = zz.funcz;

  zz.tempo = { // !! tempo cuz must be another way
// START (2) 
    uId : (function () {
    var counter = 0;
    return function () {return counter += 1;}
    })(),
    
    me : {
       // short lib variable name
      name: 'qq',
      version: '00.00.00.0000',
      where:{
        am : function(){
          }
        },
      // jssHere list
      jssHere : [
        {name:'addon1.js'},
        {name:'addonLast1.js'}
        ]
      }, 

    addjssHere : function(name) {
      if (name == undefined) {
        window.console.log('js has no name!!');
        return;
        }
      var newScript = document.createElement('script');
      newScript.src = name;
      newScript.type= 'text/javascript';
      window.document.body.appendChild(newScript); 
      newScript.onerror = function() {window.console.log('addon '+name+' is absent'); };
      newScript.onload = function() {};

      
      },
  // last func (2)
      lastF2 : function() {return 'lastF2 is done';},  
// END (2)
    };
// adding funcs (2) to (2) section     
  for (var key in zz.tempo)   {
//    window.console.log(key+' '+zz.tempo[key]);
    {zz[key] = zz.tempo[key];};
    }
    zz.tempo = '';
// !! (II) js magic !!   !! short name window[zz.me.name] should be variable // do not use 
  window.zz = window[zz.me.name] = zz;

// START autorun 
  // approx start time 
  zz.startTime = new Date();
  // START whoAmI and whereAmI session
  // if it is a chrome ext runtime
  try {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
     chrome.tabs.sendMessage(tabs[0].id, {runtimeID: chrome.runtime.id});
       });
      window.console.log(chrome.runtime.id);
    }
  catch(err) {
    window.console.log(err.message);
    }
  // if it is a chrome ext contentScript    
  try {
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.runtimeID)
      window.console.log(request.runtimeID);
  });
    //if (chrome.runtime.id) {
      //for (var i = 0; i < zz.me.jssHere.length; i++) {
        //zz.me.jssHere[i].name = 'chrome-extension://'+chrome.runtime.id+'/'+zz.me.jssHere[i].name;
        //}
      //}
      window.console.log(chrome.runtime.id);
    }
  catch(err) {
    window.console.log(err.message);
    }    
    
    
  // END whoAmI and whereAmI session
  
  // START adding jssHere 
  for (var i = 0; i < zz.me.jssHere.length; i++) {
    zz.addjssHere(zz.me.jssHere[i].name);
    }
  // END adding jssHere 
  // !! here must be awaitng counter adding jssHere 

  var elNew = window.document.createElement('div');
  elNew.className = 'btn_el';
  elNew.appendChild(window.document.createTextNode('me2' ));
  elNew.setAttribute('id','the1st1');
//  elNew.style.position = 'fixed';
  elNew.addEventListener("click", function(){zz(this).testClick1();}, false);
  window.document.body.insertBefore(elNew, null);

  // autorun finish time
  window.console.log('load time ' + (new Date()-zz.startTime));  
// END autorun

//return zz; // ?  
}));


// (function(){	})();
