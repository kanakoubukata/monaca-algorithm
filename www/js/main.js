document.addEventListener("init", function(event) {
    const page = event.target;
    if(page.id === "stack_page") {        
        const show = function() {
            const store = Stack.store;
            page.querySelectorAll(".item_list .item")
            .forEach(function(item, index) {
                item.textContent = index + "：" + store[index];
            });
        };
        page.querySelector(".input_button").addEventListener("click", function() {
            const input_data = page.querySelector('.input_data');
            if(input_data.value) {
                Stack.push(input_data.value);
                show();
                input_data.value = "";
            }
        });
        page.querySelector(".output_button").addEventListener("click", function() {
            Stack.pop();
            show();
        });
        show();
    } else if (page.id === "queue_page") {
        const show = function() {
            const store = Queue.store;
            const start = Queue.front;
            const end = Queue.rear;
            page.querySelectorAll(".item_list .item")
            .forEach(function(item, index) {
                if(start <= end) {
                    if(start <= index && index < end) {
                        item.textContent = index + "：" + store[index];
                    } else {
                        item.textContent = index + "：";
                    }
                } else{
                    if(start <= index || index < end) {
                        item.textContent = index + "：" + store[index];
                    } else {
                        item.textContent = index + "：";
                    }                    
                }
            });
        };
        page.querySelector(".input_button").addEventListener("click", function() {
            const input_data = page.querySelector('.input_data');
            if(input_data.value) {
                Queue.offer(input_data.value);
                show();
                input_data.value = "";
            }
        });
        page.querySelector(".output_button").addEventListener("click", function() {
            Queue.poll();
            show();
        });
        show();
    } else if (page.id === "array_list_page") {
        const show = function() {
            const store = Array_List.store;
            page.querySelectorAll(".item_list .item")
            .forEach(function(item, index) {
                item.textContent = index + "：" + store[index];
            });
        };
        page.querySelector(".insert_button").addEventListener("click", function() {
            const input_data = page.querySelector('.input_data');
            if(input_data.value) {
                if(Array_List.insert(input_data.value)) {
                    show();
                    input_data.value = "";
                } else {
                    ons.notification.alert("これ以上追加できません");
                }
            }
        });
        page.querySelector(".search_button").addEventListener("click", function() {
            const input_data = page.querySelector('.input_data');
            if(input_data.value) {
                let index = Array_List.search(input_data.value);
                if(index === NOT_FOUND) {
                    ons.notification.alert(input_data.value + "は見つかりませんでした");
                } else {
                    ons.notification.alert(index + "番目に見つかりました");
                }
            }
        });
        page.querySelector(".delete_button").addEventListener("click", function() {
            const input_data = page.querySelector('.input_data');
            if(input_data.value) {
                if(Array_List.delete(input_data.value)) {
                    show();
                    input_data.value = "";                
                } else {
                    ons.notification.alert(input_data.value + "は見つかりませんでした");
                }
            }
        });
        show();
    } else if (page.id === "node_list_page") {
        const show = function() {
            const list = page.querySelector(".item_list");
            list.innerHTML = "";
            
            let item = Node_List.head;
            ons.createElement(`<ons-list-item><ons-row><ons-col width="100px">Node：${item.node_no}</ons-col><ons-col width="150px">Info：${item.info}</ons-col><ons-col>Next：${item.next===null?"null":item.next.node_no}</ons-col></ons-row></ons-list-item>`, {append:list});
            while(item.next !== null) {
                item = item.next;
                ons.createElement(`<ons-list-item><ons-row><ons-col width="100px">Node：${item.node_no}</ons-col><ons-col width="150px">Info：${item.info}</ons-col><ons-col>Next：${item.next===null?"null":item.next.node_no}</ons-col></ons-row></ons-list-item>`, {append:list});
            } 
        };
        page.querySelector(".insert_button").addEventListener("click", function() {
            const input_data = page.querySelector('.input_data');
            if(input_data.value) {
                Node_List.addNode(input_data.value);
                show();
                input_data.value = "";
            }
        });
        page.querySelector(".search_button").addEventListener("click", function() {
            const input_data = page.querySelector('.input_data');
            if(input_data.value) {
                if(Node_List.search(input_data.value)) {
                    ons.notification.alert(input_data.value + "を見つけました");
                } else {
                    ons.notification.alert(input_data.value + "は見つかりませんでした");
                }
            }
        });
        page.querySelector(".delete_button").addEventListener("click", function() {
            const input_data = page.querySelector('.input_data');
            if(input_data.value) {
                if(Node_List.delete(input_data.value)) {
                    show();
                    input_data.value = "";                
                } else {
                    ons.notification.alert(input_data.value + "は見つかりませんでした");
                }
            }
        });
        show();
    } else if (page.id === "sorted_list_page") {
        const show = function() {
            const store = Sorted_List.store;
            page.querySelectorAll(".item_list .item")
            .forEach(function(item, index) {
                item.textContent = index + "：" + store[index];
            });
        };
        page.querySelector(".insert_button").addEventListener("click", function() {
            const input_data = page.querySelector('.input_data');
            if(input_data.value) {
                if(Sorted_List.insert(input_data.value)) {
                    show();
                    input_data.value = "";
                } else {
                    ons.notification.alert("これ以上追加できません");
                }
            }
        });
        page.querySelector(".search_button").addEventListener("click", function() {
            const input_data = page.querySelector('.input_data');
            if(input_data.value) {
                if(Sorted_List.binarySearch(input_data.value)) {
                    ons.notification.alert(input_data.value + "を見つけました");
                } else {
                    ons.notification.alert(input_data.value + "は見つかりませんでした");
                }
            }
        });
        page.querySelector(".delete_button").addEventListener("click", function() {
            const input_data = page.querySelector('.input_data');
            if(input_data.value) {
                if(Sorted_List.delete(input_data.value)) {
                    show();
                    input_data.value = "";                
                } else {
                    ons.notification.alert(input_data.value + "は見つかりませんでした");
                }
            }
        });
        show();
    }
});