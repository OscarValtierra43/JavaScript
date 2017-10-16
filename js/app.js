var Calculadora = {

  //* Funcion de inicio de Calculadora *//
  iniciarCalculadora: (function(){
            this.eventosClic();
          }),


  //* Animacion de teclas *//
	animacionDeTeclas: function(tecla){
		document.getElementById(tecla).style.transform="scale(0.9)";

		setTimeout(function(){
      document.getElementById(tecla).style.transform="scale(1)";
    }, 200);
	},


  //* Variables *//
	pantallaCalculadora: document.getElementById("display").innerHTML,
  signo: 0,
  puntoDecimal: 0,
	maximoNumeros: 8,
	detenerIngreso: 0,
	numero: 0,
	operacionMatematica: 0,
	auxNumero: 0,
	auxEstado: 0,
	auxResultado: 0,


  //* Funcion para ver en la calculadora *//
	verNumero: function(valor){
		this.animacionDeTeclas(valor);

		if(this.signo == 1 && this.detenerIngreso == 0){
			this.maximoNumeros += 1,
			this.detenerIngreso = 1;
		}

		if(this.puntoDecimal == 1  && this.detenerIngreso == 0){
			this.maximoNumeros += 1,
			this.detenerIngreso = 1;
		}

		if(this.pantallaCalculadora.length < this.maximoNumeros){
			if(this.pantallaCalculadora != "0"){
				this.pantallaCalculadora += valor;
			}
      else if(valor != 0){
				this.pantallaCalculadora = "",
				this.pantallaCalculadora += valor;
			}

			this.verEnDisplay();
		}
	},


	//* Funcion de tecla ON *//
	on: function(){
		this.animacionDeTeclas("on");

		this.pantallaCalculadora = "0",
		this.puntoDecimal = 0,
		this.signo = 0,
		this.detenerIngreso = 0,
		this.maximoNumeros = 8
		this.numero = 0,
		this.auxEstado = 0,
		this.auxNumero = 0,
		this.operacionMatematica = 0,
		this.auxResultado = 0,

		this.verEnDisplay();
	},


  //* Funcion de la tecla de signo +/- *//
	signoMasMenos: function(){
		this.animacionDeTeclas("sign");

		if(this.pantallaCalculadora != 0){
			if(this.signo == 0){
				this.pantallaCalculadora = "-" + this.pantallaCalculadora,
				this.signo = 1;
			}
      else{
				this.pantallaCalculadora = this.pantallaCalculadora.slice(1);
				this.signo = 0;
			}
		}

		this.verEnDisplay();
	},


  //* Funcion de dividir *//
	division: function(){
	  this.animacionDeTeclas("dividido");

		this.numero = Number(this.pantallaCalculadora),
		this.pantallaCalculadora = "",
		this.operacionMatematica = 4,
		this.auxEstado = 0,
		this.signo = 0,
		this.auxNumero = 0,
		this.auxEstado = 0,
		this.puntoDecimal = 0,

		this.verEnDisplay();
	},


  //* Funcion de multiplicacion *//
	multiplicacion: function(){
		this.animacionDeTeclas("por");

		this.numero = Number(this.pantallaCalculadora),
		this.pantallaCalculadora = "",
		this.operacionMatematica = 3,
		this.auxEstado = 0,
		this.signo = 0,
		this.auxNumero = 0,
		this.auxEstado = 0,
		this.puntoDecimal = 0,

		this.verEnDisplay();
	},


  //* Funcion de restar *//
	resta: function(){
	  this.animacionDeTeclas("menos");

		this.numero = Number(this.pantallaCalculadora);
		this.pantallaCalculadora = "",
		this.operacionMatematica = 2,
		this.auxEstado = 0,
		this.signo = 0,
		this.auxNumero = 0,
		this.auxEstado = 0,
		this.puntoDecimal = 0,

		this.verEnDisplay();
	},


  //* Funcion de suma *//
  suma: function(){
    this.animacionDeTeclas("mas");

    this.numero += Number(this.pantallaCalculadora),
    this.pantallaCalculadora = "",
    this.operacionMatematica = 1,
    this.auxEstado = 0,
    this.signo = 0,
    this.auxNumero = 0,
    this.auxEstado = 0,
    this.puntoDecimal = 0,

    this.verEnDisplay();
  },


	//* Funcion del signo igual *//
	igual: function(){
		this.animacionDeTeclas("igual");

		switch(this.operacionMatematica){
			case 1:
					if(this.auxEstado == 0){
						this.auxNumero = Number(this.pantallaCalculadora),
						this.pantallaCalculadora = this.numero + Number(this.pantallaCalculadora),
						this.auxEstado = 1,
						this.numero = 0;
					}
          else{
						this.pantallaCalculadora = Number(this.pantallaCalculadora)+this.auxNumero;
					}
				break;
			case 2:
					if(this.auxEstado == 0){
						this.auxNumero = Number(this.pantallaCalculadora),
						this.pantallaCalculadora = this.numero - Number(this.pantallaCalculadora),
						this.auxEstado = 1,
						this.numero = 0;
					}
          else{
						this.pantallaCalculadora = Number(this.pantallaCalculadora)-this.auxNumero;
					}
				break;
			case 3:
					if(this.auxEstado == 0){
						this.auxNumero = Number(this.pantallaCalculadora),
						this.pantallaCalculadora = this.numero * Number(this.pantallaCalculadora),
						this.auxEstado = 1,
						this.numero = 0;
					}
          else{
						this.pantallaCalculadora = Number(this.pantallaCalculadora)*this.auxNumero;
					}
				break;
			case 4:
					if(this.auxEstado == 0){
						this.auxNumero = Number(this.pantallaCalculadora),
						this.pantallaCalculadora = this.numero / Number(this.pantallaCalculadora),
						this.auxEstado = 1,
						this.numero = 0;
					}
          else{
						this.pantallaCalculadora = Number(this.pantallaCalculadora)/this.auxNumero;
					}
				break;
			  default:
				break;
		}

		this.verEnDisplay();
	},


  //* Funcion del punto decimal *//
	punto: function(){
		this.animacionDeTeclas("punto");

		if(this.puntoDecimal == 0){
			this.pantallaCalculadora += ".";
		}

		this.puntoDecimal = 1,
		this.verEnDisplay();
	},


	//* Evento clic sobre las teclas *//
	eventosClic: function(){
		document.getElementById("0").addEventListener("click",function(){
      Calculadora.verNumero("0")
    });

		document.getElementById("1").addEventListener("click",function(){
      Calculadora.verNumero("1")
    });

		document.getElementById("2").addEventListener("click",function(){
      Calculadora.verNumero("2")
    });

		document.getElementById("3").addEventListener("click",function(){
      Calculadora.verNumero("3")
    });

		document.getElementById("4").addEventListener("click",function(){
      Calculadora.verNumero("4")
    });

		document.getElementById("5").addEventListener("click",function(){
      Calculadora.verNumero("5")
    });

		document.getElementById("6").addEventListener("click",function(){
      Calculadora.verNumero("6")
    });

		document.getElementById("7").addEventListener("click",function(){
      Calculadora.verNumero("7")
    });

		document.getElementById("8").addEventListener("click",function(){
      Calculadora.verNumero("8")
    });

		document.getElementById("9").addEventListener("click",function(){
      Calculadora.verNumero("9")
    });

		document.getElementById("on").addEventListener("click",function(){
      Calculadora.on("")
    });

		document.getElementById("sign").addEventListener("click",function(){
      Calculadora.signoMasMenos()
    });

		document.getElementById("dividido").addEventListener("click",function(){
      Calculadora.division()
    });

    document.getElementById("por").addEventListener("click",function(){
      Calculadora.multiplicacion()
    });

		document.getElementById("menos").addEventListener("click",function(){
      Calculadora.resta()
    });

    document.getElementById("mas").addEventListener("click",function(){
      Calculadora.suma()
    });

    document.getElementById("igual").addEventListener("click",function(){
      Calculadora.igual()
    });

		document.getElementById("punto").addEventListener("click",function(){
      Calculadora.punto()
    });
	},


	//* Imprimir datos en display *//
	verEnDisplay: function(){
		if(this.pantallaCalculadora.toString().length > this.maximoNumeros){
			this.pantallaCalculadora = this.pantallaCalculadora.toString().substring(0,8);
		}

		document.getElementById("display").innerHTML = this.pantallaCalculadora;
	}
}


Calculadora.iniciarCalculadora();
