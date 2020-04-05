
jQuery(document).ready(function($) {

    //wp.heartbeat.start();
    //wp.heartbeat.stop();
    //if only if it auto-start is false

    //hook into heartbeat-send: client will send the message 'marco' in the 'client' var inside the data array
    $(document).on('heartbeat-send.wslu', function(e, data) {

        console.log('Sending data to server by HB .........');
        console.log('Data: client macro added to data');
        data['client'] = 'marco';
        data['requesting_page'] = pagenow;

    });

    //hook into heartbeat-tick: client looks for a 'server' var in the data array and logs it to console
    $(document).on('heartbeat-tick.wslu', function(e, data) {

        console.log('Data received from HB, processing the data....');

        if(data['client_push']) {

            console.log('---', data['client_push']);
            addLogs(data['client_push']['log']);
            addLogs(data['client_push']['result']);
        }

        addOutput('Waiting for next tick........<i class="met-social-facebook"></i>')

    });

    //hook into heartbeat-error: in case of error, let's log some stuff

});