const Array_List = {
    top: 0,
    store: new Array(STORE_MAX_SIZE).fill(""),

    full: function() {
        if(this.top >= STORE_MAX_SIZE) {
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
            return NOT_FOUND;
        }
    },

    delete: function(str) {
        const found = this.search(str);
        if(found !== NOT_FOUND) {
            this.top--;
            let move;
            for(move = found; move < this.top; move++) {
                this.store[move] = this.store[move+1];
            }
            this.store[this.top] = ""; 
            return true;
        } else {
            return false;
        }
    }
};