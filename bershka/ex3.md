Basandote en la imagen asociada, crea componentes para cada uno de los marcos con exactamente el mismo nombre que tengan abajo a la izquierda

Todos los componentes deberán recibir información como `props` siguiendo la estructura del siguiente json. Donde la información que le pases a cada componente es la información de la propiedad con el mismo nombre en minúscula. 

```js

const data = {
    product: {
        title: "Camiseta manga corta oversize print",
        img: "https://static.bershka.net/4/photos2/2023/I/0/2/p/2305/102/250/942b381354f1d48e2cfb378c62066602-2305102250_1_1_0.jpg",
        price: "5,99 €",
        ref: "2305/102/250",
        colors: ["blue", "white", "black", "beige", "green"],
        sizes: [
            {
                name: "xs",
                qty: 3
            },{
                name: "s",
                qty: 2
            },{
                name: "m",
                qty: 28
            },{
                name: "l",
                qty: 5
            },{
                name: "xl",
                qty: 0
            }
        ]
    }

}


```

Añade un condicional en el componente Sizes con el texto "Pocas" (como si fuera el reloj) cuando la `qty` sea menor o igual a 5 y añade una clase que aplique un estilo deshabilitado `opacity:0.2;pointer-events:none` cuando la cantidad sea === 0

PD: Si alguna imagen no funcionara, sustituirla por otra

