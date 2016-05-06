function che(input){

	console.log("checkeado, papu"+input.nodeName)

    
    
    if(this.checked){
            nombre.className="hecho"
    	}else{
    		nombre.className=""
    	}

}

function addRow() {
    var li = document.createElement('li');

    li.className = 'row';

    //pasar lo del input a la variable nombre

	var nombre = document.getElementById('intro').value;

    li.innerHTML = '<input type="checkbox" onclick="che(this)" class="hecho"> ' + nombre +'</input>  <span class="pull-right" onclick="removeRow(this)"><i class="fa fa-trash" aria-hidden="true"></i></span>' ;
    
     document.getElementById('content').appendChild(li);
}

function removeRow(input) {
	console.log(input.parentNode.nodeName)
    document.getElementById('content').removeChild( input.parentNode );
}



/*'<input type="text" name="name" value="" />\
        <input type="text" name="value" value="" />\
        <label> <input type="checkbox" name="check" value="1" /> Checked? </label>\
        <input type="button" value="-" onclick="removeRow(this)">'*/