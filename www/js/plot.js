class Plot {
    constructor(page, data, color) {
        this.page = page;
        this.ctx = page.querySelector('.canvas').getContext('2d');
        this.chart = new Chart(this.ctx, {
            type: 'bar',
            data: {
                "labels": data,
                "datasets": [{
                    "data": data,
                    "backgroundColor": color,
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
                categoryPercentage: 1,
                animation: false             
            }
        }); 
    }

    update(dataset) {
        const data = dataset.map(item => item.data);
        const color = dataset.map(item => item.color);
        this.chart.data.datasets[0].data = data;
        this.chart.data.datasets[0].backgroundColor = color;
        this.chart.data.labels = data;
        this.chart.update();
    }

    compare_count_update(count) {
        this.page.querySelector('.compare_count').textContent = count;
    }

    swap_count_update(count) {
        this.page.querySelector('.swap_count').textContent = count;
    }

    destroy() {
        if(this.chart) {
            this.chart.destroy();
        }
    }
}

