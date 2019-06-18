
// Send email to me
function sendEmail(){
	me = $("#mail").val()
	window.open(
		'mailto:seongkwh@andrew.cmu.edu?subject=Information&body='
		+me);
}