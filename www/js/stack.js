const Stack = {
    maxsize: 10,
    top: 0,
    store: new Array(10).fill(""),

    push: function(data) {
        if(!this.full()) {
            this.store[this.top] = data;
            this.top++;
        } else {
            alert("これ以上入りません");
        }
    },

    pop: function() {
        if(!this.empty()) {
            this.store[this.top-1] = "";
            this.top--;
        } else {
            alert("データがありません");
        }
    },

    full: function() {
        if(this.top >= this.maxsize) {
            return true;
        } else {
            return false;
        }
    },

    empty: function() {
        if(this.top <= 0) {
            return true;
        } else {
            return false;
        }
    }
};