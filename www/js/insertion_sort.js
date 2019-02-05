const Insertion_Sort = {
    /* スピード調整機能なしのソースコード */
    /*
    sort: function(dataset) {
        let tmp_dataset;
        let compare_count = 0;
        let swap_count = 0;
        let max_index = dataset.length - 1;
        for(let i = 0; i <= max_index; i++) {
            for(let j = i; j > 0; j--) {
                compare_count++;
                if(dataset[j].data < dataset[j-1].data) {
                    tmp_dataset = dataset[j];
                    dataset[j] = dataset[j-1];
                    dataset[j-1] = tmp_dataset;   
                    swap_count++;
                } else {
                    break;
                }
            }
        }
        return {"dataset": dataset, "compare_count": compare_count, "swap_count": swap_count};
    }
    */

    /* スピード調整機能ありのソースコード */
    sort: function(dataset, plot, speed) {
        let tmp_dataset;
        let compare_count = 0;
        let swap_count = 0;
        let max_index = dataset.length - 1;
        for(let i = 0; i <= max_index; i++) {
            for(let j = i; j > 0; j--) {
                compare_count++;
                // 比較回数を更新
                const plot_compare = compare_count;
                setTimeout(function(){plot.compare_count_update(plot_compare)}, speed*swap_count*10 + compare_count*10);                    
                if(dataset[j].data < dataset[j-1].data) {
                    tmp_dataset = dataset[j];
                    dataset[j] = dataset[j-1];
                    dataset[j-1] = tmp_dataset;   

                    // チャートを更新
                    const plot_dataset = dataset.slice();
                    setTimeout(function(){plot.update(plot_dataset)}, speed*swap_count*10);

                    swap_count++;
                    // 交換回数を更新
                    const plot_swap = swap_count;
                    setTimeout(function(){plot.swap_count_update(plot_swap)}, speed*swap_count*10);
                } else {
                    break;
                }
            }
        }
    }
};