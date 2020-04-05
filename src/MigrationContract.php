<?php

namespace XS\Migration;


interface MigrationContract {

	public function input($txtDomain, $versionFrom, $versionTo);

	public function output(array $data);
}