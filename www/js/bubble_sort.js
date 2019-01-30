const Bubble_Sort = {
    sort: function(data) {
        let tmp;
        let count = 0;
        for(let i = 1; i < data.length-1; i++) {
            for(let j = data.length-1; j >= i; j--) {
                if(data[j] < data[j-1]) {
                    tmp = data[j];
                    data[j] = data[j-1];
                    data[j-1] = tmp;
                }
                count++;
            }
        }
        return {"data": data, "count": count};
    }
};