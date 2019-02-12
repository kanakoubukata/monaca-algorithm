const Queue = {
    front: 0,
    rear: 0,
    store: new Array(STORE_MAX_SIZE).fill(""),

    offer: function(data) {
        if(!this.full()) {
            this.store[this.rear] = data;
            this.rear = (this.rear+1) % STORE_MAX_SIZE;
            console.log("front:"+this.front+",rear:"+this.rear);
        } else {
            alert("これ以上入りません");
        }
    },

    poll: function() {
        if(!this.empty()) {
            this.front = (this.front+1) % STORE_MAX_SIZE;
            console.log("front:"+this.front+",rear:"+this.rear);
        } else {
            alert("データがありません")
        }
    },

    full: function() {
        if((this.rear+1) % STORE_MAX_SIZE === this.front) {        
            return true;
        } else {
            return false;
        }
    },

    empty: function() {
        if(this.rear === this.front) {
            return true;
        } else {
            return false;
        }
    }
};