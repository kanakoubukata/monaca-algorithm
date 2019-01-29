let sequence = 0;
class Node_List_Item {
    constructor(node_no, info, next) {
        this.node_no = node_no;
        this.info = info;
        this.next = next;
    }
}
const Node_List = {
    head: new Node_List_Item(sequence, null, null),

    addNode: function(str) {
        sequence++;
        const node = new Node_List_Item(sequence, str, this.head.next);
        this.head.next = node;
    },

    search: function(str) {
        let node = this.head;
        let found = false;
        do {
            node = node.next;
            if(node.info === str) {
                found = true;
                break;
            }
        } while(node.next !== null)
        return found;
    },

    delete: function(str) {
        let prev;
        let node = this.head;
        let found = false;
        do {
            prev = node;
            node = node.next;
            if(node.info === str) {
                prev.next = node.next;
                found = true;
                break;
            }
        } while(node.next !== null)
        return found;
    }
};