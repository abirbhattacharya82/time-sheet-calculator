function addTime(time1, time2) {
    let time1Mins = convertToMins(time1);
    let time2Mins = convertToMins(time2);
    let totalMins = time1Mins + time2Mins;
    let totalHours = Math.floor(totalMins / 60);
    let finalMins = totalMins % 60;
    return [totalHours, finalMins];
}
function convertToMins(time) {
    let [hours, mins] = time.slice(0, -2).split(":");
    hours = parseInt(hours);
    mins = parseInt(mins);
    if (time.endsWith("PM") && hours !== 12) {
        hours += 12;
    }
    if (time.endsWith("AM") && hours === 12) {
        hours = 0;
    }
    return hours * 60 + mins;
}
function calculate_time() {
    var mon_start = document.getElementById('start_h_mon').value + ':' + document.getElementById('start_m_mon').value + document.getElementById('start_am_mon').value;
    var tue_start = document.getElementById('start_h_tue').value + ':' + document.getElementById('start_m_tue').value + document.getElementById('start_am_tue').value;
    var wed_start = document.getElementById('start_h_wed').value + ':' + document.getElementById('start_m_wed').value + document.getElementById('start_am_wed').value;
    var thu_start = document.getElementById('start_h_thu').value + ':' + document.getElementById('start_m_thu').value + document.getElementById('start_am_thu').value;
    var fri_start = document.getElementById('start_h_fri').value + ':' + document.getElementById('start_m_fri').value + document.getElementById('start_am_fri').value;
    var sat_start = document.getElementById('start_h_sat').value + ':' + document.getElementById('start_m_sat').value + document.getElementById('start_am_sat').value;
    var sun_start = document.getElementById('start_h_sun').value + ':' + document.getElementById('start_m_sun').value + document.getElementById('start_am_sun').value;

    var mon_end = document.getElementById('end_h_mon').value + ':' + document.getElementById('end_m_mon').value + document.getElementById('end_am_mon').value;
    var tue_end = document.getElementById('end_h_tue').value + ':' + document.getElementById('end_m_tue').value + document.getElementById('end_am_tue').value;
    var wed_end = document.getElementById('end_h_wed').value + ':' + document.getElementById('end_m_wed').value + document.getElementById('end_am_wed').value;
    var thu_end = document.getElementById('end_h_thu').value + ':' + document.getElementById('end_m_thu').value + document.getElementById('end_am_thu').value;
    var fri_end = document.getElementById('end_h_fri').value + ':' + document.getElementById('end_m_fri').value + document.getElementById('end_am_fri').value;
    var sat_end = document.getElementById('end_h_sat').value + ':' + document.getElementById('end_m_sat').value + document.getElementById('end_am_sat').value;
    var sun_end = document.getElementById('end_h_sun').value + ':' + document.getElementById('end_m_sun').value + document.getElementById('end_am_sun').value;

    var [x_mon, y_mon] = addTime(mon_start, mon_end);
    var [x_tue, y_tue] = addTime(tue_start, tue_end);
    var [x_wed, y_wed] = addTime(wed_start, wed_end);
    var [x_thu, y_thu] = addTime(thu_start, thu_end);
    var [x_fri, y_fri] = addTime(fri_start, fri_end);
    var [x_sat, y_sat] = addTime(sat_start, sat_end);
    var [x_sun, y_sun] = addTime(sun_start, sun_end);

    document.getElementById('time_mon').innerHTML = (parseFloat(x_mon + "." + y_mon)-parseFloat(document.getElementById('break_h_mon').value+'.'+document.getElementById('break_m_mon').value));
    document.getElementById('time_tue').innerHTML = (parseFloat(x_tue + "." + y_tue)-parseFloat(document.getElementById('break_h_tue').value+'.'+document.getElementById('break_m_tue').value));;
    document.getElementById('time_wed').innerHTML = (parseFloat(x_wed + "." + y_wed)-parseFloat(document.getElementById('break_h_wed').value+'.'+document.getElementById('break_m_wed').value));;
    document.getElementById('time_thu').innerHTML = (parseFloat(x_thu + "." + y_thu)-parseFloat(document.getElementById('break_h_thu').value+'.'+document.getElementById('break_m_thu').value));;
    document.getElementById('time_fri').innerHTML = (parseFloat(x_fri + "." + y_fri)-parseFloat(document.getElementById('break_h_fri').value+'.'+document.getElementById('break_m_fri').value));;
    document.getElementById('time_sat').innerHTML = (parseFloat(x_sat + "." + y_sat)-parseFloat(document.getElementById('break_h_sat').value+'.'+document.getElementById('break_m_sat').value));;
    document.getElementById('time_sun').innerHTML = (parseFloat(x_sun + "." + y_sun)-parseFloat(document.getElementById('break_h_sun').value+'.'+document.getElementById('break_m_sun').value));;

    var final_total = parseFloat(document.getElementById("time_mon").innerHTML)+parseFloat(document.getElementById("time_tue").innerHTML)+parseFloat(document.getElementById("time_wed").innerHTML)+parseFloat(document.getElementById("time_thu").innerHTML)+parseFloat(document.getElementById("time_fri").innerHTML)+parseFloat(document.getElementById("time_sat").innerHTML)+parseFloat(document.getElementById("time_sun").innerHTML);
    
    document.getElementById('total_hrs').innerHTML=final_total;
}
function clear_all() {
    document.getElementById('start_h_mon').value = "0";
    document.getElementById('start_h_tue').value = "0";
    document.getElementById('start_h_wed').value = "0";
    document.getElementById('start_h_thu').value = "0";
    document.getElementById('start_h_fri').value = "0";
    document.getElementById('start_h_sat').value = "0";
    document.getElementById('start_h_sun').value = "0";

    document.getElementById('end_h_mon').value = "0";
    document.getElementById('end_h_tue').value = "0";
    document.getElementById('end_h_wed').value = "0";
    document.getElementById('end_h_thu').value = "0";
    document.getElementById('end_h_fri').value = "0";
    document.getElementById('end_h_sat').value = "0";
    document.getElementById('end_h_sun').value = "0";

    document.getElementById('time_mon').innerHTML = "0.0";
    document.getElementById('time_tue').innerHTML = "0.0";
    document.getElementById('time_wed').innerHTML = "0.0";
    document.getElementById('time_thu').innerHTML = "0.0";
    document.getElementById('time_fri').innerHTML = "0.0";
    document.getElementById('time_sat').innerHTML = "0.0";
    document.getElementById('time_sun').innerHTML = "0.0";

    document.getElementById('total_hrs').innerHTML = "0.0";
}