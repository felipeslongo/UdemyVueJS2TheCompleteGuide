var data = {
  title: 'The VueJS Instance',
  showParagraph: false
};

var v1 = new Vue({
  el: '#app1',
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

