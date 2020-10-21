function createTooltip(){
    var elems = document.querySelectorAll('.tooltipped');
    var options={enterDelay: 50};
    var instances = M.Tooltip.init(elems, options);
  
    var instance = M.Tooltip.getInstance(document.getElementById("button"));
    instance.open();
  }
  function destroyTooltip(){
    var instance = M.Tooltip.getInstance(document.getElementById("button"));
    if (instance){
      instance.destroy();
    }
  }

