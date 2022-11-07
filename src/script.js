//chartjs

const labels = [
    'AAA',
    'BBB',
    'CCC',
    'DDD',
    'EEE',
    'FFF',
    'GGG',
  ];

  const label = [
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
      data: [200, 50, 100, 150, 200, 250,130],
    },
    {
      label: 'Review Sent',
      backgroundColor: '#4EC1B6',
      borderColor: '#4EC1B6',
      data: [190, 50, 100, 150, 200, 250,150],
    },
  ]
  };

  const datas = {
    labels: label,
    datasets: [{
      label: 'Contact per day',
      backgroundColor: '#FCB53C',
      borderColor: '#FCB53C',
      data: [200, 50, 100, 150, 200, 250,130],
    },
    {
      label: 'Review Sent',
      backgroundColor: '#4EC1B6',
      borderColor: '#4EC1B6',
      data: [190, 50, 100, 150, 200, 250,150],
    },
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
                align:'start',
                font:{weight:'bold',size:'24px'},
            },
            legend: {
                position:'bottom'
            }
        }
    }
  };
  const daily = {
    type: 'bar',
    data: datas,
    options: {
        plugins: {
            title :{
                display: true,
                text: 'Daily',
                align:'start',
                font:{weight:'bold',size:'24px'},
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
    daily
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


//dropdown

const dropdown = document.querySelector('.dropdown');

function dropdownContact() {
  var element = document.getElementById("dropdown-contact");
  element.classList.toggle("dropdown-contact-active");
}

function dropdownMonthly() {
  var element = document.getElementById("dropdown-monthly");
  element.classList.toggle("dropdown-monthly-active");
}


// TODO:: Logic for the toogle burger menu
const btnBurgerMenu = document.querySelector('.burger__menu');

btnBurgerMenu.addEventListener('click', function(){
  this.classList.toggle('burger__menu--active');
  document.querySelector('aside.sidebar__mobile').classList.toggle('active');
})

// add function to detect resize
window.addEventListener('resize', function(){
  if(window.innerWidth < 768){
      document.querySelector('aside').classList.add('sidebar__mobile');
    } else {
      document.querySelector('aside.sidebar__mobile').classList.remove('active');
      btnBurgerMenu.classList.remove('burger__menu--active');
      document.querySelector('aside').classList.remove('sidebar__mobile');
  }
})
