// VARIABLES

const productos = [
    { nombre: "tenis", precio: 200 },
    { nombre: "camisa", precio: 150 },
    { nombre: "jeans", precio: 100 },
    { nombre: "shorts", precio: 70 },
  ];

  let carrito = [];
  let nombre = "";
  let apellido = "";
  let telefono = 0;

// DATOS DEL COMPRADOR

function ingresoDeDatos() {
    nombre += prompt("Ingrese su nombre");
    apellido += prompt("ingrese su apellido");
    telefono += parseInt(prompt("ingrese su numero de telefono")
    );
    let datosComprador = `-Nombre: ${nombre}\n-Apellido: ${apellido}\n-Telefono: ${telefono}\n`;
    return datosComprador;
  }
  
  let validaccionDatos = prompt(
    `los datos:\n${ingresoDeDatos()}\nson correctos? \nresponda con un "si" o "no"`
  );
  while (validaccionDatos != "si" && validaccionDatos != "no") {
    confirmacion = prompt(`Responde con "si" o "no"`);
    validaccionDatos = confirmacion;
  }

// COMPRA

if (validaccionDatos === "si") {
    alert(
      "A continuacion nuestros productos disponibles.\nSelecciona cual o cuales deseas de la siguiente lista:"
    );
    let listaDeProductos = productos.map(
      (producto) => producto.nombre + " - " + "$" + producto.precio
    );
    alert(listaDeProductos.join("\n"));
  } else {
    alert("gracias, hasta la proxima!");
  }
  function comprar() {
  
  //   AGREGAR PRODUCTO
  
    let id = "";
    while (id != "finish") {
      id = prompt(
        `ingresa el nombre del producto o pasa a finalizar tu compra escribe la palabra "finish"`
      );
      if (
        id == "tenis" ||
        id == "camisa" ||
        id == "jeans" ||
        id == "shorts" 
      ) {
        switch (id) {
            case "tenis":
              precio = 200
            case "camisa":
              precio = 150;
              break;
            case "jeans":
              precio = 100;
              break;
            case "shorts":
              precio = 70;
              break;
          }
        let cantidad = parseInt(prompt("cuantas unidades queres?"));
        carrito.push({ id, precio, cantidad });
      }
    }
  
  //  RESUMEN DE LA COMPRA

    let compra = carrito.map((e) => e.id + " - " + "$" + e.precio * e.cantidad);
    alert(`Los productos seleccionados son:\n${compra.join("\n")}`);
    const total = carrito.reduce(
      (acumulador, elemento) => acumulador + elemento.precio * elemento.cantidad,
      0
    );
    alert(`El total a pagar es de: $${total}`);

// COMPRA

  }
  comprar();
  
  let terminarCompra = prompt(`confirmar compra?\n("si" - "no")`);
  while (terminarCompra !== "no" || terminarCompra !== "si") {
    if (terminarCompra == "si") {
      alert(
        `Gracias ${nombre} por tu compra!!\n`
      );
      break;
    } else if (terminarCompra == "no") {
      alert(`Gracias, te esperamos la proxima!!`);
      break;
    } else {
      alert(`responde con "si" o "no"`);
      terminarCompra = prompt(`confirmar compra?\n("si" - "no")`);
    }
  }



 


