/**
 * Created by Егор on 06.09.2014.
 */

$(document).ready(function(){
    // ---- Календарь -----
    $('#example').attachDatepicker();
    $('#exampleRange').attachDatepicker({
        rangeSelect: true,
        yearRange: '2000:2010',
        firstDay: 1
    });
    // ---- Календарь -----
});

