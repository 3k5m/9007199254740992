
var auto_move_flag = false;
var auto_move_time;
//var am_left = false;
//var am_right = false;

//TODO implement slow but accurate algorithm

function start_auto_move(){
	auto_move_flag = true;
	auto_move();
}

//TODO implement this as a possible drop down list
function random_move(){
	if ( auto_move_flag === false )
		return;
	var direction = Math.floor( Math.random() * 4 );
	GM.move( direction );
	setTimeout( "auto_move()", auto_move_time );
}

//TODO improve?
function auto_move(){
	if ( auto_move_flag === false )
		return;

	GM.move( 2 );

	//move left if can't move down
	if(!GM.moved){
		GM.move( 3 );
		//move right if can't move left
		if(!GM.moved){
			GM.move( 1 );
		}
	}
	setTimeout( "auto_move()", auto_move_time );
}

function stop_auto_move(){
	auto_move_flag = false;
}

window.requestAnimationFrame(function(){
	document.getElementById("auto-move-run").addEventListener("click",function(){
		var time = parseInt( document.getElementById("auto-move-input-time").value );
		if ( !isNaN( time ) ){
			auto_move_time = time;
			if ( auto_move_flag === false ){
				start_auto_move();
			}
		}
	});
	document.getElementById("auto-move-stop").addEventListener("click",function(){
		stop_auto_move();
	});
});