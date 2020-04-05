
jQuery(document).ready(function($){

    $(document).on('heartbeat-send.wslu', function(e, data) {

        console.log('Sending data to server globally ...........');
        data['global'] = 'atiqur';
        data['gd_client'] = 'marco';
    });

    $(document).on('heartbeat-tick.wslu', function(e, data) {

        console.log('Data received from HB, processing the global data....');

        if(data['client_push'] && data['client_push']['global']) {

            console.log('---Global receive : ', data['client_push']);
        }

        if(data['admin_msg']) {

            console.log('Admin msg received : ', data['admin_msg']);
            var notice = $('#data-migration-notice');

            if(notice.length) {
                console.log('wow notice found!!!!........', notice.length, notice);
                notice.html('<p>'+data['admin_msg']+'</p>')

            } else {
                console.log('Notice not found :P', notice.length);
                $('#wpbody-content').find('.wrap').find('.wp-header-end').after(getMarkup(data['admin_msg']));
            }
        }
    });

    $(document).on('heartbeat-error.wslu', function(e, jqXHR, textStatus, error) {
        console.log('BEGIN ERROR...............................');
        console.log(textStatus);
        console.log(error);
        console.log('END ERROR..................................');
    });

});


function getMarkup($msg) {

    return '<div id="data-migration-notice" class="notice notice-error is-dismissible"><p>'+$msg+'</p></div>';
}



