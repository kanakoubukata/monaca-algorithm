document.addEventListener("init", function(event) {
    const page = event.target;
    if(page.id === "stack_page") {        
        const show = function() {
            const store = Stack.store;
            let store_index = Stack.top-1;
            page.querySelectorAll(".stack_item")
            .forEach(function(item) {
                if(store_index >= 0) {
                    item.textContent = store_index + "：" + store[store_index];
                } else {
                    item.textContent = "";
                }
                store_index--;
            });
        };
        page.querySelector("#input_button").addEventListener("click", function() {
            const input_data = page.querySelector('#input_data');
            if(input_data.value) {
                Stack.input(input_data.value);
                show();
                input_data.value = "";
            }
        })
        page.querySelector("#output_button").addEventListener("click", function() {
            Stack.output();
            show();
        })
    }

});