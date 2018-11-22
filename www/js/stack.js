const Stack = {
    maxsize: 10,
    top: 0,
    store: new Array(this.maxsize),

    input: function(data) {
        if(this.top < this.maxsize) {
            this.store[this.top] = data;
            this.top++;
        }
    },

    output: function() {
        if(this.top > 0) {
            this.top--;
        }
    }
};