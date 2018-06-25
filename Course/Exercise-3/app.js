new Vue({
        el: '#exercise',
        data: {
            value: 0
        },
        computed: {
            result: function () {
                return this.value < 37 ? 'not there yet' : 'done';
            }
        },
        watch: {
            value: function (newValue, oldValue){
                var vm = this;
                setTimeout(() => {
                    vm.value = 0;                   
                }, 5000);
            }
        }
    });