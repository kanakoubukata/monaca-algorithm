const Stack = {
    top: 0,
    store: new Array(STORE_MAX_SIZE).fill(""),

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
        if(this.top >= STORE_MAX_SIZE) {
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