<?php if (!defined('DATATABLES')) exit(); // Ensure being used in DataTables env.
// Enable error reporting for debugging (remove for production)
error_reporting(E_ALL);
ini_set('display_errors', '1');

/*
 * Edit the following with your database connection options
 */
$sql_details = array(
	"type" => "Sqlserver",
	"user" => "SplashApp",
	"pass" => "Discover2015",
	"host" => "212.67.221.94",
	"port" => "",
	"db"   => "SplashApp",
	"dsn"  => ""
);