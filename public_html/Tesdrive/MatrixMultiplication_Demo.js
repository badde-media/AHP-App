document.getElementsByTagName('title')[0].innerHTML = "0059 - MatrixMultiplication_Demo";

var body = document.getElementsByTagName('body')[0];
var print = function ( text ) {
	
	if ( text === undefined )
		text = "";	
	
	text = addHTMLWhitespaces( text );
	text = justifyText( text, 200 );

	body.innerHTML += text;
}
var println = function ( text ) {
		
	if ( text === undefined )
		text = "";	
	
	print( text + '</br>' );
}
String.prototype.format = function() {
	
	var result = this;
	
	for ( i = 0; i < arguments.length; i++ ) {
		
		var pattern = new RegExp("\\{" + i + "\\}", "g" );
		result = result.replace( pattern, arguments[i] );
	}
	
	return result;
}
var addHTMLWhitespaces = function ( text ) {
	
	var pattern = new RegExp(" ", "g" );
	return text.replace( pattern, '&nbsp;' );
}
var justifyText = function ( text, inlineChars ) {
	
	var result = "";
	
	for ( var i = 0, counter = 1; i < text.length; i++ ) {
		
		if ( counter == inlineChars ) {
			
			if ( text[ i ] == " " || text[ i ] == "&" && isWhiteSpaceCode( text, i ) ) {
				
				result += "</br>";
				counter = 1;
			}
		}
		else {
			counter++;
		}
		result += text[ i ];
	}

	return result;
}
var isWhiteSpaceCode = function ( text, index ) {
	
	var result = true;
	
	var code = "&nbsp;";
	if ( ( index + code.length ) <= text.length ) {
		
		for ( var i = 0; result && i < code.length; )
			if ( text[ index++ ] != code[ i++ ] )
				result = false;
	}

	return result;
}
var run = function () {

	var matrix_A = 
	[
		[ 2, 2, 1 ],
		[ 1, 0, 2 ]
	];

	var matrix_B = 
	[
		[ 1, 2 ],
		[ 0, 0 ],
		[ 1, 1 ]
	];	
	
	println( "Matrix A:" );
	printMatrix( matrix_A );
	println("");
	
	println( "Matrix B:" );
	printMatrix( matrix_B );
	println("");
	
	println( "Multiplication of Matrix A * Matrix B:" );
	var matrixResult = multiply( matrix_A, matrix_B );
	printMatrix( matrixResult );
}

function addSpaceLeft( text, length ) {
	
	while ( text.length < length ) {
		
		text = " " + text;
	}
	
	return text;
}

function printMatrix( matrix ) {
	
	for ( var i in matrix ) {
		
		for ( var j in matrix[ i ] ) {
			
			print( addSpaceLeft(matrix[ i ][ j ].toString(), 4) );
		}
		println( "" );
	}
}

function multiply( mA, mB ) {
	
	var result = new Array( mA.length );
	
	for ( var i = 0; i < result.length; i++ ) {
		
		result[ i ] = new Array( mB[ i ].length );
		for ( var j = 0; j < mA.length; j++ ) {
			
			result[ i ][ j ] = 0; // result[ i ][ j ] is NaN, force to be zero
			for ( var k = 0; k < mB.length; k++ ) {
				
				result[ i ][ j ] += mA[ i ][ k ] * mB[ k ][ j ];
			}
		}
	}
	
	return result;
}

run();

