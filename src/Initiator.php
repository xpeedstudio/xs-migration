<?php

namespace XS\Migration;


class Initiator {

	protected $textDomain;

	public function __construct($domain) {

		$this->textDomain = $domain;

		add_action("admin_enqueue_scripts", [$this, 'xs_data_conversion_admin_scripts']);
		add_filter('heartbeat_send', [$this, 'send_heartbeat'], 10, 2 );
		//add_filter( 'heartbeat_settings', [$this, 'xs_heartbeat_settings'] );
		//add_filter('heartbeat_received', 'xs_heartbeat_received', 10, 2);
	}


}