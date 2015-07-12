function OnTriggerEnter (other : Collider) {
	
	if(other.name == "FPSController") {
	
		GameObject.Find('SandStorm').GetComponent.<Animation>().Play('sandStormRise');
	
	}

}