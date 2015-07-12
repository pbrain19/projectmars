function OnTriggerEnter (other : Collider) {
	
	if(other.name == "FPSController") {
	
		GameObject.Find('friend').GetComponent.<Animation>().Play('riseUp');
	
	}

}