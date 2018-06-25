new Vue({
        el: '#exercise',
        data: {
            value: 'Initial Value'
        },
        methods: {
            showAlert: function (){
                alert("Task One");
            },
            keyDowned: function (event){
                this.value = event.target.value;
            }
        }
    });