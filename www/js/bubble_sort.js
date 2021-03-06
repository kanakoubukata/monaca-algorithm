const Bubble_Sort = {
    /* スピード調整機能なしのソースコード */
    /*
    sort: function(dataset) {
        let tmp;
        let compare_count = 0;
        let swap_count = 0;
        let max_index = dataset.length - 1;
        for(let i = 1; i <= max_index; i++) {
            for(let j = max_index; j >= i; j--) {
                if(dataset[j].data < dataset[j-1].data) {
                    tmp = dataset[j];
                    dataset[j] = dataset[j-1];
                    dataset[j-1] = tmp;
                    swap_count++;
                }
                compare_count++;
            }
        }
        return {"dataset": dataset, "compare_count": compare_count, "swap_count": swap_count};
    }
    */

    /* スピード調整機能ありのソースコード */
    sort: function(dataset, plot, speed) {
        let tmp;
        let compare_count = 0;
        let swap_count = 0;
        let max_index = dataset.length - 1;
        for(let i = 1; i <= max_index; i++) {
            for(let j = max_index; j >= i; j--) {
                if(dataset[j].data < dataset[j-1].data) {
                    tmp = dataset[j];
                    dataset[j] = dataset[j-1];
                    dataset[j-1] = tmp;
                    
                    // チャートを更新
                    const plot_dataset = dataset.slice();
                    setTimeout(function(){plot.update(plot_dataset)}, speed*swap_count*10);

                    swap_count++;

                    // 交換回数を更新
                    const plot_swap = swap_count;
                    setTimeout(function(){plot.swap_count_update(plot_swap)}, speed*swap_count*10);
                }
                compare_count++;

                // 比較回数を更新
                const plot_compare = compare_count;
                setTimeout(function(){plot.compare_count_update(plot_compare)}, speed*swap_count*10 + compare_count*10);                    
            }
        }
    }
};