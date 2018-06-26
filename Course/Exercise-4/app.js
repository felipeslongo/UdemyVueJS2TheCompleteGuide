new Vue({
  el: '#exercise',
  data: {
    effectClasses:{
      highlight: true,
      shrink: false,
    },
    coupleOfCssClasses: ['red', 'solid'],
    userClass: '',
    userClasses:{
      mainClass: '',
      isShrinked: false
    },
    userStyles: '',
    progress:{
      status:0,
      total: 100,
      setIntervalHandle: 0
    }
  },
  computed: {
    userClassesArray: function(){
      return [this.userClasses.mainClass, {shrink: this.userClasses.isShrinked}];
    },
    userStylesArray: function(){    
      let arrayOfStyles = this.userStyles.split(';');
      let arrayOfVueStyles = [];
      arrayOfStyles.forEach(element => {
        let keyValuePair = element.split(':');
        if(keyValuePair.length != 2)
          return [];
        let styleEntry = {[keyValuePair[0].trim()]:keyValuePair[1].trim()};//dynamic object
        arrayOfVueStyles.push(styleEntry);
        console.log(keyValuePair);        
      });
      //let arrayOfVueStyles = "[{" + arrayOfStyles.join("}, {") + "}]";
      //return arrayOfVueStyles;
      return arrayOfVueStyles;
    },
    progressStyle: function(){
      if(this.progress.status === 0)
        return [{width: "0px"}];
      return [{width: ((this.progress.status / this.progress.total) * 200) + "px"}];
    }
  },
  methods: {
    startEffect: function() {      
      var vm = this;
      setInterval(() => {
        vm.effectClasses.highlight = !vm.effectClasses.highlight;
        vm.effectClasses.shrink = !vm.effectClasses.shrink;
      }, 1000);      
    }, 
    setIsShrinked: function(event){
      if(event.target.value === 'true')
        this.userClasses.isShrinked = true;
      else if(event.target.value === 'false')
        this.userClasses.isShrinked = false;
    },
    startProgress: function(){
        this.progress.status = 0;
        let vm = this;
        console.log("StartProgress");
        this.progress.setIntervalHandle = setInterval(() => {
            vm.progress.status = Math.min(vm.progress.total, vm.progress.status + 10);
            console.log(vm.progress.status);
            if(vm.progress.status === 100)
              clearInterval(vm.progress.setIntervalHandle);
        }, 2 * 1000);
    }
    
  }
});
