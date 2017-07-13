var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var	dinosaur = 'triceratops'.toUpperCase();
var	dinosaurReplace = text.replace('Velociraptor', dinosaur);

console.log(dinosaurReplace.substr(0, dinosaurReplace.length/2));