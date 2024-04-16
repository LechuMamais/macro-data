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



Futuras Mejoras:
    Cositas para mejorar los graficos:
    Se superponen los valores max arriba a la izq
    arreglar lo de los minValue negativos
    Mejorar lo del setTimeout, que se tarde un tiki en mover la linea
    Quitar ceros cuando son muchos miles, millones, etc...
    Si no hay valores de los ultimos años, no mostrarlos (que maxDate sea, por ej, 2022)

    Haremos que los graficos se vean de a uno, con un menu desplegabla que nos muestre el listado de indicadores posibles de consultar.
    Luego, será al hacer click en uno de los indicadores que se consulte a la api sobre este indicador específico para el país previamente seleccionado
    Aquí es que entra el useEffect que tenemos que usar en la práctica.
    Además va a ser aca donde tambien se pasen parámetros por la url de pais e indicador.