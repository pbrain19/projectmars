#pragma strict

function Start () {

}

function OnTriggerEnter (other : Collider) {
	var battery = GameObject.Find('Battery'); 
	var fire = GameObject.Find('Fire');
	Destroy(battery);
	Destroy(fire);
}