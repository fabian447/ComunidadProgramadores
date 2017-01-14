
    //Accionar los CheckBox
	  
    function adicionar() {
    	$('.extras').dimmer('show');
    	var valor = 20000;
 		var respaldo = valor;
      	var dominio = $("#dominio").prop("checked");
      	respaldo = valor;
      	if (dominio) {
        	valor = valor + 20000;
      	}else{
        	valor = respaldo;
      	}	

      	var calificacion = $("#calificacion").prop("checked");
      	respaldo = valor;
      	if (calificacion) {
        	valor = valor + 6000;
      	}else if(!calificacion){
        	valor = respaldo;
      	}

      	var compartir = $("#compartir").prop("checked");
      	respaldo = valor;
      	if (compartir) {
      		valor = valor + 4000;
      	}else{
      		valor = respaldo;
      	}

      	var buscador = $("#buscador").prop("checked");
      	respaldo = valor;
      	if (buscador) {
      		valor = valor + 8000;
      	}else{
      		valor  = respaldo;
      	}

      	var galeria = $("#galeria").prop("checked");
      	respaldo = valor;
      	if (galeria) {
      		valor = valor + 8000;
      	}else{
      		valor = respaldo;
      	}

      	var blog = $("#blog").prop("checked");
      	respaldo = valor;
      	if (blog) {
      		valor = valor + 20000;
      	}else{
      		valor = respaldo;
      	}

      	var comentarios = $("#comentarios").prop("checked");
      	respaldo = valor;
      	if (comentarios) {
      		valor = valor + 10000;
      	}else{
      		valor = respaldo;
      	}

      	var banner = $("#banner").prop("checked");
      	respaldo = valor;
      	if (banner) {
      		valor = valor + 0;
      	}else{
      		valor = respaldo;
      	}

      	var campos = $("#campos").prop("checked");
      	respaldo = valor;
      	if (campos) {
      		valor = valor + 2000;
      	}else{
      		valor = respaldo;
      	}

      	var metodos = $("#metodos").prop("checked");
      	respaldo = valor;
      	if (metodos) {
      		valor = valor + 6000;
      	}else{
      		valor = respaldo;
      	}

      	var logo = $("#logo").prop("checked");
      	respaldo = valor;
      	if (logo) {
      		valor = valor + 0;
      	}else{
      		valor = respaldo;
      	}

      	var social = $("#social").prop("checked");
      	respaldo = valor;
      	if (social) {
      		valor = valor + 2000;
      	}else{
      		valor = respaldo;
      	}

      	var cupones = $("#cupones").prop("checked");
      	respaldo = valor;
      	if (cupones) {
      		valor = valor + 7000;
      	}else{
      		valor = respaldo;
      	}
      	$("#total").text("Bs."+valor);
      	$('.extras').dimmer('hide');
    };
    //Accionar los CheckBox
	  var Check = document.getElementById('dominio');
	  Check.addEventListener('change', function(e){
	    if (e.target.checked) {
	      adicionar();
	    }else{
	      adicionar();
	    }

	  });

	  var calificacion = document.getElementById('calificacion');
	  calificacion.addEventListener('change', function(e){
	    if (e.target.checked) {
	      adicionar();
	    }else{
	      adicionar();
	    }

	  });

	  var compartir = document.getElementById('compartir');
	  compartir.addEventListener('change', function(e){
	    if (e.target.checked) {
	      adicionar();
	    }else{
	      adicionar();
	    }

	  });

	  var buscador = document.getElementById('buscador');
	  buscador.addEventListener('change', function(e){
	    if (e.target.checked) {
	      adicionar();
	    }else{
	      adicionar();
	    }

	  });

	  var galeria = document.getElementById('galeria');
	  galeria.addEventListener('change', function(e){
	    if (e.target.checked) {
	      adicionar();
	    }else{
	      adicionar();
	    }

	  });

	  	  var blog = document.getElementById('blog');
	  blog.addEventListener('change', function(e){
	    if (e.target.checked) {
	      adicionar();
	    }else{
	      adicionar();
	    }

	  });

	  var comentarios = document.getElementById('comentarios');
	  comentarios.addEventListener('change', function(e){
	    if (e.target.checked) {
	      adicionar();
	    }else{
	      adicionar();
	    }

	  });

	  var campos = document.getElementById('campos');
	  campos.addEventListener('change', function(e){
	    if (e.target.checked) {
	      adicionar();
	    }else{
	      adicionar();
	    }

	  });

	  var metodos = document.getElementById('metodos');
	  metodos.addEventListener('change', function(e){
	    if (e.target.checked) {
	      adicionar();
	    }else{
	      adicionar();
	    }

	  });

	  var logo = document.getElementById('logo');
	  logo.addEventListener('change', function(e){
	    if (e.target.checked) {
	      adicionar();
	    }else{
	      adicionar();
	    }

	  });

	  var social = document.getElementById('social');
	  social.addEventListener('change', function(e){
	    if (e.target.checked) {
	      adicionar();
	    }else{
	      adicionar();
	    }

	  });

	  var cupones = document.getElementById('cupones');
	  cupones.addEventListener('change', function(e){
	    if (e.target.checked) {
	      adicionar();
	    }else{
	      adicionar();
	    }

	  });

	  var banner = document.getElementById('banner');
	  banner.addEventListener('change', function(e){
	    if (e.target.checked) {
	      adicionar();
	    }else{
	      adicionar();
	    }

	  });