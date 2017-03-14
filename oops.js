function Car(name,model,inpu){
	
	this.name=name
	this.model=model
	this.typ='General'
	this.mode='GM'
	this.numOfDoors=4
	this.numOfDoor=2
	this.drive=function(input){
		return input
	}
	this.speed='250 km/h'
	
}
/*Car.prototype={


	speed:function(){
		return '250 km/h'
	},
	drive:function(input){
		return input
	},
	
	model:'GM'


}*/

 var honda = new Car('Opel', 'Omega 3')
 console.log(honda.numOfDoors);
module.exports = {
	Car: Car
}