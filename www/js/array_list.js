const Array_List = {
    maxsize: 10,
    top: 0,
    store: new Array(10).fill(""),
    notfound: -1,

    full: function() {
        if(this.top >= this.maxsize) {
            return true;
        } else {
            return false;
        }
    },

    insert: function(str) {
        if(!this.full()) {
            this.store[this.top] = str;
            this.top++;
            return true;
        } else {
            return false;
        }
    },

    search: function(str) {
        let here;
        for(here = 0; here < this.top; here++) {
            if(this.store[here] === str) {
                break;
            }
        }
        if(here !== this.top) {
            return here;
        } else {
            return this.notfound;
        }
    },

    delete: function(str) {
        const find = this.search(str);
        if(find !== this.notfound) {
            this.top--;
            let move;
            for(move = find; move < this.top; move++) {
                this.store[move] = this.store[move+1];
            }
            this.store[this.top] = ""; 
            return true;
        } else {
            return false;
        }
    }
};