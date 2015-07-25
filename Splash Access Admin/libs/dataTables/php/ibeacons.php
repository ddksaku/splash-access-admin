<?php
// DataTables PHP library and database connection
include( "lib/DataTables.php" );

// Alias Editor classes so they are easy to use
use
	DataTables\Editor,
	DataTables\Editor\Field,
	DataTables\Editor\Format,
	DataTables\Editor\Join,
	DataTables\Editor\Upload,
	DataTables\Editor\Validate;


// Build our Editor instance and process the data coming from _POST
Editor::inst( $db, 'Ibeacons', 'Id' )
	->fields(
		Field::inst( 'Identifier' )
			->validator( 'Validate::notEmpty' )
			->validator( 'Validate::unique' ),
		Field::inst( 'Uuid' )
			->validator( 'Validate::notEmpty' ),			
		Field::inst( 'Minor' )
			->validator( 'Validate::notEmpty' ),
		Field::inst( 'Major' )
			->validator( 'Validate::notEmpty' ),
		Field::inst( 'EnterTitle' )
			->validator( 'Validate::notEmpty' ),
		Field::inst( 'EnterMessage' )
			->validator( 'Validate::notEmpty' )
	)
	->process( $_POST )
	->json();
