var ctx = document.getElementById('myChart').getContext('2d');
var dataCurrency = document.getElementById('myChart').dataset.currency;
var data = JSON.parse(dataCurrency);
var labels = [];
var values = [];
var colors = [];

function randomColors(){
    var r = () => Math.random() * 256 >> 0;
    return `rgba(${r()}, ${r()}, ${r()},0.5)`;
}

data.forEach(function (item) {
    labels.push(item.code)
    values.push(item.mid)
    colors.push(randomColors())
})



var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: 'Chart Currency',
            data: values,
            backgroundColor:colors,
            borderColor: colors,
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
