function Emmiter() {
    this.events = {};
}

// Event listener
//The code that responds to an Event

Emmiter.prototype.on = function (type, listener) {
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
};

Emmiter.prototype.emit = function (type) {
    if(this.events[type]){
        this.events[type].forEach(function(listener){
            listener();
        });
    }
};

module.exports = Emmiter;
