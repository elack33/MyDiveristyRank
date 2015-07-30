$(document).ready(function() {
    //click add item, remove .hidden class to show form

    //button OVerall
    $('#btnShowChart1').click(function (event) {
        event.preventDefault();
        if ($('#chart1').hasClass( "hidden" ) === true && ($('#chart2').hasClass('hidden') === false ||
                $('#chart3').hasClass('hidden') === false || $('#chart4').hasClass('hidden') === false)) {
            $('#chart1').removeClass('hidden');
            $('#chart2').addClass('hidden');
            $('#chart3').addClass('hidden');
            $('#chart4').addClass('hidden');
            chart1;
        }

        else if ($('#chart1').hasClass( "hidden" ) === true){
            console.log('truth!');
            $('#chart1').removeClass('hidden');
            chart1;
        }
        else {
            $('#chart1').addClass('hidden');
        }

    });
    //Button Interests
    $('#btnShowChart2').click(function (event) {
        event.preventDefault();
        if ($('#chart2').hasClass('hidden') === true && ($('#chart1').hasClass('hidden') === false ||
                $('#chart3').hasClass('hidden') === false || $('#chart4').hasClass('hidden') === false)){
            $('#chart2').removeClass('hidden');
            $('#chart1').addClass('hidden');
            $('#chart3').addClass('hidden');
            $('#chart4').addClass('hidden');
            chart2;
        }

        else if ($('#chart2').hasClass('hidden') === true) {
            $('#chart2').removeClass('hidden');
        }
        else {
            $('#chart2').addClass('hidden');
            chart2;
        }
    });
    //button Careers
    $('#btnShowChart3').click(function (event) {
        event.preventDefault();
        if ($('#chart3').hasClass('hidden') === true && ($('#chart1').hasClass('hidden') === false ||
                $('#chart2').hasClass('hidden') === false || $('#chart4').hasClass('hidden') ==  false)){
            $('#chart3').removeClass('hidden');
            $('#chart1').addClass('hidden');
            $('#chart2').addClass('hidden');
            $('#chart4').addClass('hidden');
            chart3;
        }

        else if ($('#chart3').hasClass('hidden') === true) {
            $('#chart3').removeClass('hidden');
        }
        else {
            $('#chart3').addClass('hidden');
            chart3;
        }
    });
    //Button Genders
    $('#btnShowChart4').click(function (event) {
        event.preventDefault();
        if ($('#chart4').hasClass('hidden') === true && ($('#chart1').hasClass('hidden') === false ||
            $('#chart2').hasClass('hidden') === false || $('#chart3').hasClass('hidden') ==  false)){
            $('#chart4').removeClass('hidden');
            $('#chart1').addClass('hidden');
            $('#chart2').addClass('hidden');
            $('#chart3').addClass('hidden');
            chart4;
        }

        else if ($('#chart4').hasClass('hidden') === true) {
            $('#chart4').removeClass('hidden');
        }
        else {
            $('#chart4').addClass('hidden');
            chart4;
        }
    });
});

// Chart 1 function Overall
 var chart1 = $(function () {
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

//chart2 function Interests
var chart2 = $(function () {
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

//chart3 function  Careers
var chart3 = $(function () {
    $('#chart3').highcharts({
        chart: {
            backgroundColor: '#e0e0f0',
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: "My Friends' Careers"
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
            name: "My Friends' Careers",
            colorByPoint: true,
            data: [{
                name: "Software Development",
                y: 0
            }, {
                name: "Customer Service",
                y: 23.53,
                sliced: true,
                selected: true
            }, {
                name: "Web Services",
                y: 11.76
            }, {
                name: "Other",
                y: 5.8
            }, {
                name: "Engineer",
                y: 5.8
            }, {
                name: "Accounting/Bookkeeping",
                y: 5.8
            }, {
                name: "Healthcare",
                y: 5.8
            }, {
                name: "Retired",
                y: 11.6
            }, {
                name: "Teaching",
                y: 5.8
            }, {
                name: "Management",
                y: 5.8
            }, {
                name: "Graphic Design",
                y: 5.8
            }, {
                name: "Product Developer",
                y: 5.8
            }, {
                name: "Editor",
                y: 5.8
            }]
        }]
    });
});

//chart4 function  Genders
var chart4 = $(function () {
    $('#chart4').highcharts({
        chart: {
            backgroundColor: '#e0e0f0',
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: "My Friends' Genders"
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
            name: "My Friends' Genders",
            colorByPoint: true,
            data: [{
                name: "Male",
                y: 23.53
            }, {
                name: "Female",
                y: 58.82,
                sliced: true,
                selected: true
            }, {
                name: "Gender Fluid",
                y: 117.65
            }, {
                name: "Other",
                y: 0
            }]
        }]
    });
});