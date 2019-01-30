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
    } else if (page.id === "binary_search_tree_page") {

    } else if (page.id === "heap_page") {
        
    } else if (page.id === "hash_page") {
        
    } else if (page.id === "bubble_sort_page") {
        let dataset = [
            { data: 65, color: "red" },
            { data: 21, color: "hotpink" },
            { data: 59, color: "darkorange" },
            { data: 39, color: "gold" },
            { data: 80, color: "lawngreen" },
            { data: 94, color: "green" },
            { data: 26, color: "aqua" },
            { data: 17, color: "blue" },
            { data: 55, color: "blueviolet" },
        ];
        let data = dataset.map(item => item.data);
        let color = dataset.map(item => item.color);
        let plot = new Plot(page, data, color);

        /* スピード調整機能なしのソースコード */
        /*
        page.querySelector(".start_button").addEventListener("click", function() {
            const sorted_list = Bubble_Sort.sort(dataset.slice());
            plot.update(sorted_list.dataset);
            page.querySelector('.compare_count').textContent = sorted_list.compare_count;
            page.querySelector('.swap_count').textContent = sorted_list.swap_count;
        });
        */  

        /* スピード調整機能ありのソースコード */
        page.querySelector(".start_button").addEventListener("click", function() {
            const speed = 100 - parseInt(page.querySelector('.speed_range').value);
            const sorted_list = Bubble_Sort.sort(dataset.slice(), plot, speed);
        }); 

        page.querySelector(".reset_button").addEventListener("click", function() {
            plot.update(dataset);
            page.querySelector('.compare_count').textContent = 0;
            page.querySelector('.swap_count').textContent = 0;
        });      

        page.querySelector(".data_size").addEventListener("change", function(event) {
            const size = parseInt(event.target.value);
            dataset = [];
            for(let i = 0; i < size; i++) {
                dataset[i] = {
                    data: Math.floor(Math.random() * 100) + 1,
                    color: "#" + Math.floor(Math.random() * 256).toString(16).padStart(2,"0") + Math.floor(Math.random() * 256).toString(16).padStart(2,"0") + Math.floor(Math.random() * 256).toString(16).padStart(2,"0")
                };
            }
            plot.destroy();
            data = dataset.map(item => item.data);
            color = dataset.map(item => item.color);
            console.log(color);
            plot = new Plot(page, data, color);
        });      
    } else if (page.id === "selection_sort_page") {

    } else if (page.id === "insertion_sort_page") {

    } else if (page.id === "quick_sort_page") {

    } else if (page.id === "merge_sort_page") {

    }
});