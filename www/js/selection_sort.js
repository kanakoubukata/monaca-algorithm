const Selection_Sort = {
    /* スピード調整機能なしのソースコード */
    /*
    sort: function(dataset) {
        let tmp_dataset;
        let tmp_index;
        let compare_count = 0;
        let swap_count = 0;
        let max_index = dataset.length-1;
        let min;
        for(let i = 0; i <= max_index; i++) {
            tmp_index = i;
            min = dataset[i].data;
            for(let j = i+1; j <= max_index; j++) {
                if(dataset[j].data < min) {
                    tmp_index = j;
                    min = dataset[j].data;
                 }
                compare_count++;
            }
            
            if(tmp_index > i) {
                tmp_dataset = dataset[tmp_index];
                dataset[tmp_index] = dataset[i];
                dataset[i] = tmp_dataset;   
                swap_count++;
            }
        }
        return {"dataset": dataset, "compare_count": compare_count, "swap_count": swap_count};
    }
    */

    /* スピード調整機能ありのソースコード */
    sort: function(dataset, plot, speed) {
        let tmp_dataset;
        let tmp_index;
        let compare_count = 0;
        let swap_count = 0;
        let max_index = dataset.length-1;
        let min;
        for(let i = 0; i <= max_index; i++) {
            tmp_index = i;
            min = dataset[i].data;
            for(let j = i+1; j <= max_index; j++) {
                if(dataset[j].data < min) {
                    tmp_index = j;
                    min = dataset[j].data;
                 }
                compare_count++;

                // 比較回数を更新
                const plot_compare = compare_count;
                setTimeout(function(){plot.compare_count_update(plot_compare)}, speed*swap_count*10 + compare_count*10);                    
            }
            
            if(tmp_index > i) {
                tmp_dataset = dataset[tmp_index];
                dataset[tmp_index] = dataset[i];
                dataset[i] = tmp_dataset;   
                swap_count++;

                // 交換回数を更新
                const plot_swap = swap_count;
                setTimeout(function(){plot.swap_count_update(plot_swap)}, speed*swap_count*10);                    
            }
            // チャートを更新
            const plot_dataset = dataset.slice();
            setTimeout(function(){plot.update(plot_dataset)}, speed*swap_count*10);
        }
    }
};