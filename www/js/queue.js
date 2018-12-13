const Queue = {
    maxsize: 10,
    front: 0,
    rear: 0,
    store: new Array(10).fill(""),

    offer: function(data) {
        if(!this.full()) {
            this.store[this.rear] = data;
            this.rear = (this.rear+1) % this.maxsize;
            console.log("front:"+this.front+",rear:"+this.rear);
        } else {
            alert("これ以上入りません");
        }
    },

    poll: function() {
        if(!this.empty()) {
            this.front = (this.front+1) % this.maxsize;
            console.log("front:"+this.front+",rear:"+this.rear);
        } else {
            alert("データがありません")
        }
    },

    full: function() {
        if((this.rear+1) % this.maxsize == this.front) {        
            return true;
        } else {
            return false;
        }
    },

    empty: function() {
        if(this.rear == this.front) {
            return true;
        } else {
            return false;
        }
    }
};