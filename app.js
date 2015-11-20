function Person(firtsName, lastName){
        this.firtsName = firtsName;
        this.lastName  = lastName;
}

Person.prototype.greet = function (){
        console.log("Helo, " + this.firtsName + " " + this.lastName );
};

var dan = new Person('Dan', 'Garcia');
dan.greet()
