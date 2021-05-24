import { Injectable } from '@angular/core';
import { Post } from '../post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  articulos: Post[];

  constructor() {

    this.articulos = [

      {
        titulo: 'España tiene un problema para cubrir vacantes de trabajo: estos son los puestos más demandados',
        texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, repellendus!',
        autor: 'Lola Martínez',
        imagen: 'http://www.laborsord.org/images/blog/El-empleo-en-personas-con-discapacidad-auditiva.jpg',
        fecha: new Date('2021/02/5 12:15'),
        categoria: 'EMPLEO',
      },

      {
        titulo: 'Sanidad notifica 530 muertos por Coronavirus ',
        texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, repellendus!',
        autor: 'Pablo García',
        imagen: 'https://img2.rtve.es/v/5530085?w=1600&preview=1583356362400.jpg',
        fecha: new Date('2020/12/31 8:00'),
        categoria: 'MEDICINA',
      },

      {
        titulo: '¡Descubre la mejor película del mundo!',
        texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, repellendus!',
        autor: 'Jose P',
        imagen: 'https://www.elcineenlasombra.com/wp-content/uploads/2018/10/pelicula-rodar-FB.jpg',
        fecha: new Date('2021/01/3 09:00'),
        categoria: 'CINE',
      },

      {
        titulo: '¡No te lo pierdes : las nuevas peículas ahora en Cine!',
        texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, repellendus!',
        autor: 'James L',
        imagen: 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2020/10/30/16040711338465.jpg',
        fecha: new Date('2020/11/19 12:00'),
        categoria: 'CINE',
      },


    ]
  }


  getAllPosts(): Promise<Post[]> {

    return new Promise<Post[]>((resolve, reject) => {

      resolve(this.articulos)
      console.log(this.articulos);

    })
  };


  getPostByCategorias(pCategoria: string): Promise<Post[]> {
    return new Promise<Post[]>((resolve, reject) => {

      const arrFiltrado = [];

      for (let articulo of this.articulos) {

        if (articulo.categoria === pCategoria) {
          arrFiltrado.push(articulo)
        }
      }
      resolve(arrFiltrado)

      console.log(arrFiltrado);
    })
  };

  getArrCategorias(): string[] {

    const arrNuevo = this.articulos.map(arrCategorias => arrCategorias.categoria);
    return [...new Set(arrNuevo)];
  }

  agregarPost(pPost) {

    pPost.categoria = pPost.categoria.toUpperCase();

    this.articulos.push(pPost);
    localStorage.setItem('arr_articulos', JSON.stringify(this.articulos))
  };

}
