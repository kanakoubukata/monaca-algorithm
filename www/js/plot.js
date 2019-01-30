class Plot {
    constructor(page, data) {
        this.page = page;
        this.ctx = page.querySelector('.canvas').getContext('2d');
        this.color = ["red", "hotpink", "darkorange", "gold", "lawngreen", "green", "aqua", "blue", "blueviolet"];
        this.chart = new Chart(this.ctx, {
            type: 'bar',
            data: {
                "labels": data,
                "datasets": [{
                    "data": data,
                    "backgroundColor": this.color,
                }]
            },
            options: {
                legend: {
                    display: false
                },
                scales: {
                    xAxes: [{
                        gridLines: {
                            display:false
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            display: false
                        },
                        gridLines: {
                            display:false
                        }
                    }]
                },
                responsive: true,
                barPercentage: 1,
                categoryPercentage: 1                
            }
        }); 
    }

    update(data) {
        this.chart.data.datasets[0].data = data;
        this.chart.data.labels = data;
        this.chart.update();
    }

    compare_count_update(count) {
        this.page.querySelector('.compare_count').textContent = count;
    }

    swap_count_update(count) {
        this.page.querySelector('.swap_count').textContent = count;
    }
}

