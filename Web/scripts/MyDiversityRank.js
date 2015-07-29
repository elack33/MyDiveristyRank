$(document).ready(function() {
    //click add item, remove .hidden class to show form
    $('#btnShowChart1').click(function (event) {
        event.preventDefault();
        //test = $('#chart1').hasClass('hidden');
        //console.log(test);
        if ($('#chart1').hasClass( "hidden" ) === true && $('#chart2').hasClass('hidden') === false) {
            $('#chart2').addClass('hidden');
            $('#chart1').removeClass('hidden');
        }

        else if ($('#chart1').hasClass( "hidden" ) === true){
            console.log('truth!');
            $('#chart1').removeClass('hidden');
        }
        else {
            $('#chart1').addClass('hidden');
        }

    });
    $('#btnShowChart2').click(function (event) {
        event.preventDefault();
        if ($('#chart1').hasClass('hidden') === false && $('#chart2').hasClass('hidden') === true){
            $('#chart1').addClass('hidden');
            $('#chart2').removeClass('hidden');
        }

        else if ($('#chart2').hasClass('hidden') === true) {
            $('#chart2').removeClass('hidden');
        }
        else {
            $('#chart2').addClass('hidden');
        }
    });
});

// Chart 1 function
$(function () {
    $('#chart1').highcharts({
        chart: {
            backgroundColor: '#e0e0f0',
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'My personal Diversity Rank Overall'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            name: "MDR Overall",
            colorByPoint: true,
            data: [{
                name: "Geeks",
                y: 56.33
            }, {
                name: "Females",
                y: 24.03,
                sliced: true,
                selected: true
            }, {
                name: "Developers",
                y: 10.38
            }, {
                name: "Gay",
                y: 4.77
            }, {
                name: "Weirdos",
                y: 0.91
            }, {
                name: "Other",
                y: 0.2
            }]
        }]
    });
});

//chart2 function
$(function () {
    $('#chart2').highcharts({
        chart: {
            backgroundColor: '#e0e0f0',
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: "My Friends' Interests"
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            name: "My Friends' Interests",
            colorByPoint: true,
            data: [{
                name: "Tabletop Gaming",
                y: 49
            }, {
                name: "Square Dancing",
                y: 24.0,
                sliced: true,
                selected: true
            }, {
                name: "Meetups",
                y: 14.0
            }, {
                name: "Other",
                y: 5.0
            }, {
                name: "School/Classes",
                y: 5.0
            }, {
                name: "Hobbys/Crafts",
                y: 3
            }, {
                name: "Geekdom",
                y: 0
            }, {
                name: "Nerd Things",
                y: 0
            }, {
                name: "Video Games",
                y: 0
            }, {
                name: "Work",
                y: 0
            }, {
                name: "Book Club",
                y: 0
            }]
        }]
    });
});