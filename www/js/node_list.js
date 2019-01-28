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
        let find = false;
        do {
            node = node.next;
            if(node.info === str) {
                find = true;
                break;
            }
        } while(node.next !== null)
        return find;
    },

    delete: function(str) {
        let prev;
        let node = this.head;
        let find = false;
        do {
            prev = node;
            node = node.next;
            if(node.info === str) {
                prev.next = node.next;
                find = true;
                break;
            }
        } while(node.next !== null)
        return find;
    }
};