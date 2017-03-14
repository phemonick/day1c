function Car(name,model,make){
	this.name='General'
	this.model='GM'
	this.name=name
	this.model=model
}
Car.prototype={
	numOfDoors:function(){
		if ((name=='porche')||(name=='Koenigsegg')){
			return 2
		}
		return 4
	},
	speed:function(){
		return '250 km/h'
	},
	drive:function(input){

	}

}
module.exports = {
	Car: Car
}