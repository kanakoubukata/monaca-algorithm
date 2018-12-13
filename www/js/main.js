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
    }
});