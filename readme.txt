API INFORMATION:
http://api.worldbank.org/v2/
https://datahelpdesk.worldbank.org/knowledgebase/topics/125589-developer-information
Es la API del banco mundial, tiene informacion interesante sobre países, e indicadores macroeconómicos.
Para consultarla, necesita varios QUIERIES o parametros en la URL:

COUNTRY:
Puede recibirlos en dos formatos:
    2 letter ISO 3166-1 alpha-2 code
    3 letter ISO 3166-1 alpha-3 code
Utilizaremos el primero. Para eso, tenemos en la carpeta utils un json que es un array de objetos {"Name":"Afghanistan","Code":"AF"}

Hecho:
    Haremos que los graficos se vean de a uno, con un menu desplegabla que nos muestre el listado de indicadores posibles de consultar.
    Luego, será al hacer click en uno de los indicadores que se consulte a la api sobre este indicador específico para el país previamente seleccionado
    Aquí es que entra el useEffect que tenemos que usar en la práctica.
    Además va a ser acá donde tambien se pasen parámetros por la url de pais e indicador.

    1. Configurar correctamente el Router. Que se pueda cambiar el pais y el indicador de forma separada, que se modifiquen los params de la url al cambiar
    cada uno de los valores independientemente

    2. Refactorizar y reutilizar los componentes de la busqueda de paises, para utilizarlos en la busqueda de indicadores

    3. Hacer una funcion para los indicatorCodes y los code2iso que reciba un codigo y devuelva un valor, y al reves.
    Reutilizarla en los input de busqueda y en el grafico

    - Hecho - mejoras del gráfico:
        Se superponen los valores max arriba a la izq
        arreglar que se vean las unidades
        Que se vea el nombre del pais y el indicador!
        arreglar lo de los minValue negativos

Futuras Mejoras:

    Correcciones de Santi:
        - Merge a la rama principal
        - Chequear que no haya errores en uso normal de la aplicación.
        - No mostrar la pag vacía al ingresar. => Automáticamente se muestra el PBI de España. Done
        - SearchBar: Mejorar la legibilidad del código
                     Recoger parámetros con object destructuring

    Cositas para mejorar los graficos:
        Mejorar lo del setTimeout, que se tarde un tiki en mover la linea
        Quitar ceros cuando son muchos miles, millones, etc...
        Si no hay valores de los ultimos o los primeros años, no mostrarlos (que maxDate sea, por ej, 2022)
    
    Seleccionar un intervalo de tiempo:
        - Que el enrutador aceote y maneje year-from y year-topics - DONE
        - Que las barras de busqueda acepten years y los manejen correctamente, incluyendolos en la URL - DONE
        - Que el gráfico acepte y maneje correctamente las dos variables de tiempo
            Esto incluye modificar los filtered del year-to para que acepte solo vaores mayores a year-from - DONE
        - Incluir las barras de busqueda en alguna parte de la web - DONE
        - Adaptar SearchBar para que tenga estilos propios - DONE
        - Cambiarle la ubicación, para que FilteredList se vea bien siempre, independientemente del largo del texto de country e indicator