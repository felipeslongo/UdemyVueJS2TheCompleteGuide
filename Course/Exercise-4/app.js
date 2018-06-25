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
    startProgress: function(){
        
    }
  }
});
