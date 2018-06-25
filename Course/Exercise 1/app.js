// Put this in the script section in JSFiddle
// In a local setup, you need to merge this and the index.html file into one file
new Vue({
	el: '#exercise',
	data: {
        name: 'Felipe de Souza Longo',
        age: 27,
        link: 'http://www.bichosgeeks.com/wp-content/uploads/2017/03/zelda-breath-of-the-wild-820x410.jpg',
        link2: "https://i2.wp.com/beebom.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg?resize=640%2C426"
    },
    methods: {
        randomFloat: function (){
            return Math.random();
        }
    }
})