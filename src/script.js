const labels = [
    'AAA',
    'BBB',
    'CCC',
    'DDD',
    'EEE',
    'FFF',
    'GGG',
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'Contact per month',
      backgroundColor: '#FCB53C',
      borderColor: '#FCB53C',
      data: [200, 50, 100, 150, 200, 250],
    },
    {
      label: 'Review Sent',
      backgroundColor: '#4EC1B6',
      borderColor: '#4EC1B6',
      data: [190, 50, 100, 150, 200, 250],
    }
  ]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {
        plugins: {
            title :{
                display: true,
                text: 'Monthly',
                align:'start'
            },
            legend: {
                position:'bottom'
            }
        }
    }
  };

  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );

  const twoChart = new Chart(
    document.getElementById('twoChart'),
    config
  );

 

const twoCol = document.querySelector('.twoCol');
const oneCol = document.querySelector('.oneCol');


twoCol.addEventListener('click',function(){
    document.querySelector('.chart__content').style.flexDirection = "row";
    document.querySelector('.chart__content__box').style.width = '49%'
    document.querySelector('.chart__content__box--two').style.width = '49%'
});

oneCol.addEventListener('click', function(){
    document.querySelector('.chart__content').style.flexDirection = "column";
    document.querySelector('.chart__content__box').style.width = '100%';
    document.querySelector('.chart__content__box--two').style.width = '100%';
})