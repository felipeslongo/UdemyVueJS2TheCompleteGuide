var data = {
  title: 'The VueJS Instance',
  showParagraph: false
};

Vue.component('hello', {
  template: '<h1>HELLO! From Component!</h1>'
})

var v1 = new Vue({
  // el: '#app1',
  data: data,
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');
    },
    updateTitle: function(title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function(value) {
      alert('Title changed, new value: ' + value);
    }
  }
});

//Samething as el property
v1.$mount('#app1');

v1.newProp = "New!";
console.log(v1.newProp);
console.log(data === v1.$data);

v1.$refs.heading.innerText = 'Heading changed by $refs. The timer ou change it back to original';
setTimeout(() => {
  v1.title = 'Changed by the timer!'
}, 3000);

var v2 = new Vue({
  el: '#app2',
  data: {
    title: 'Another VueJS Instance',
  },
  methods: {
    onChange: function(){
      v1.title = 'Changed!'
    }
  }
});

var vm3 = new Vue({
  template: '<h1>HELLO!!</h1>'
});

vm3.$mount('#app3');
or
vm3.$mount();
document.getElementById('app3').appendChild(vm3.$el);

