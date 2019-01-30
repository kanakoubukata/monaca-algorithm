const Bubble_Sort = {
    sort: function(data, chart, speed) {
        let tmp;
        let compare_count = 0;
        let swap_count = 0;
        let max_index = data.length-1;
        for(let i = 1; i < max_index; i++) {
            for(let j = max_index; j >= i; j--) {
                if(data[j] < data[j-1]) {
                    tmp = data[j];
                    data[j] = data[j-1];
                    data[j-1] = tmp;
                    
                    // チャートを更新
                    const plot_data = data.slice();
                    setTimeout(function(){chart.update(plot_data)}, speed*swap_count*10);

                    swap_count++;
                    compare_count++;

                    // 交換回数、比較回数を更新
                    const plot_swap = swap_count;
                    const plot_compare = compare_count;
                    setTimeout(function(){
                        chart.swap_count_update(plot_swap);
                        chart.compare_count_update(plot_compare)
                    }, speed*swap_count*10);
                    
                } else {
                    compare_count++;

                    // 比較回数を更新
                    const plot_compare = compare_count;
                    setTimeout(function(){chart.compare_count_update(plot_compare)}, speed*swap_count*10 + compare_count*10);                    
                }
            }
        }
        return {"data": data, "compare_count": compare_count, "swap_count": swap_count};
    }
};