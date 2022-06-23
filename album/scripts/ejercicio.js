funcionEj = () =>{
let elemento = document.getElementById("titulo1");
elemento.textContent = 'album de fotos';

let elemento2 = document.getElementById('titulo1');


let arreglo = document.getElementsByTagName('p');
elemento  = arreglo[2];
elemento.setAttribute('class','d-none')

}

funcionReto = () =>{
    let arreglo = [['url: "https://images.unsplash.com/photo-1653942786759-f3caff948222?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q="','alt:"camino"'],
    [ 'url: "https://images.unsplash.com/photo-1653988235129-842891001e10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"', 'alt:"energia"'],
      ['url: "https://images.unsplash.com/photo-1648737963540-306235c8170e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"', 'alt:"papá"'],
    ['url:"https://images.unsplash.com/photo-1653936999234-6574484abc38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMTd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"','alt:"protesta"'],
    ['url:"https://images.unsplash.com/photo-1654041563290-2d6118dba2c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNTV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"','alt:"bosque"'],
    ['url:"https://images.unsplash.com/photo-1654046491755-20ef230f0add?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60','alt:"retrato"'],
    ['url:"https://images.unsplash.com/photo-1654083843429-146101352678?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60','alt:"sunrise"'],
    ['url:"https://images.unsplash.com/photo-1653971858526-97f2ba1914c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"','alt:"interior sala"'],
    ['url:"https://images.unsplash.com/photo-1653578705644-3672f965f009?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNjF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"','alt:"mujer en el bosque"']];

    let svg = document.querySelectorAll("svg");
    let linkOnly;
    let altOnly;
    let  prueba;
   
    for (let datoImg in arreglo){
      linkOnly = arreglo[datoImg][0].replace("url:","").replaceAll('"','');
      altOnly = arreglo[datoImg][1].replace("alt:","").replaceAll('"','');
     
    let img = document.createElement("img");
       img.src=linkOnly;
       img.alt = altOnly;
       img.height="225";
       svg[datoImg].replaceWith(img);
    }

    
}