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
        titulo: 'Así es la nueva marca ciudad de Sevilla, creada por Lugadero',
        texto: 'La nueva marca Sevilla propone redescubrir la ciudad desde una perspectiva contemporánea, como una ciudad de ciudades, de historias y experiencias, a través de una comprensión colectiva de la misma, y crear junto a la ciudadanía, sus visitantes y el sector profesional y empresarial una marca que evolucione con la ciudad, con sus políticas urbanas y planificaciones estratégicas. La nueva identidad acompañará a la transformación sostenible de la ciudad en su camino por convertirse en referente medioambiental, social, tecnológico y económico.',
        autor: 'JOSE QUIRÓS',
        imagen: 'https://www.machodominante.es/wp-content/uploads/2021/05/04-sevillamarcaciudad-imagenes-brandemia-web-1200x750.jpg',
        fecha: new Date('2021/05/19 12:15'),
        categoria: 'BRANDING / CASOS DE ESTUDIO',
      },

      {
        titulo: 'Las coloridas y expresivas ilustraciones de Antonio Uve ',
        texto: 'Antonio Uve es un director de arte e ilustrador nacido en Jaén y actualmente afincado en Madrid. Su trabajo es simple y elegante, utilizando formas y colores brillantes para crear personajes encantadores. Antonio se centra en las texturas para darle a su trabajo un aspecto pintado a mano. Es un ilustrador autodidacta y su experiencia en publicidad y diseño gráfico es evidente a lo largo de sus ilustraciones. Está influenciado por las ciudades que lo rodean, los viajes, la naturaleza y la música. En su tiempo personal, busca constantemente nuevas técnicas para expandir sus capacidades; aplicando sus ilustraciones sobre textiles, cerámica y recientemente bordados.',
        autor: 'Antonio Acebal',
        imagen: 'https://www.machodominante.es/wp-content/uploads/2021/05/gogreen_antoniouve.jpg',
        fecha: new Date('2020/05/14 8:00'),
        categoria: 'ARTE / ILUSTRACIÓN ',
      },

      {
        titulo: 'El origen brasileño está presente en el trabajo de Mel Cerri',
        texto: 'Esta semana sigo con el punto de mira en Brasil, y concretamente en São Paulo, de donde también nos llega el trabajo de Mel Cerri, diseñadora y artista del lettering. Su herencia brasileña juega un papel importante como inspiración para sus audaces paletas de colores y el tono vibrante de su trabajo, que plasma en gráficas o murales de manera divertida, extravagante y orgullosa. Entre sus clientes podemos encontrar empresas como Facebook, Coca-Cola, Adobe, Pepsi o Disney entre otras.',
        autor: 'Jose Fernández Gómez',
        imagen: 'https://www.machodominante.es/wp-content/uploads/2021/05/mel1.jpg',
        fecha: new Date('2021/05/6 09:00'),
        categoria: 'ARTE / ARTE DIGITAL / ILUSTRACIÓN / LETTERING',
      },

      {
        titulo: 'La nostalgia de los 90 de Alejandro Parrilla',
        texto: 'Alejandro Parrilla es un ilustrador con base en Madrid, cuyo cargado está repleto de nostalgia y referencias a la década de los 90. Colores vibrantes, juguetes, películas y objetos de la cultura pop le dan a su trabajo un estilo fresco y divertido que a más de uno traerá recuerdos imborrables.',
        autor: 'Tomás Alquinino Gómez Bernardo',
        imagen: 'https://www.machodominante.es/wp-content/uploads/2021/04/GUMGUM_PREROLL.jpg',
        fecha: new Date('2020/05/30 12:00'),
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
