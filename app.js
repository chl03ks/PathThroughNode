var obj = {
    name: "Daniel",
    greet: function () {
            console.log(`Hello ${this.name}`);
    },
};

obj.greet();
obj.greet.call({name:'Ulises Daniel'});
obj.greet.apply({name:'Ulises Daniel'});
