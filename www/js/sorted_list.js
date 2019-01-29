const Sorted_List = {
    top: 0,
    store: new Array(STORE_MAX_SIZE).fill(""),

    full: function() { return Array_List.full.call(this); },
    search: function(str) { return Array_List.search.call(this, str); },
    delete: function(str) { return Array_List.delete.call(this, str); },
    
    insert: function(str) {
        if(!this.full()) {
            let here;
            for(here = 0; here < this.top; here++) {
                if(this.store[here] >= str) {
                    break;
                }
            }
            for(let move = this.top; move >= here; move--) {
                this.store[move+1] = this.store[move];
            }
            this.store[here] = str;
            this.top++;

            return true;
        } else {
            return false;
        }
    },

    binarySearch: function(str) {
        let low = 0;
        let high = this.top-1;
        let mid;
        let found = false;
        while(low <= high) {
            mid = Math.floor(low + (high - low) / 2);
            if(this.store[mid] === str) {
                found = true;
                break;
            } else if(this.store[mid] < str) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return found;
    }
}