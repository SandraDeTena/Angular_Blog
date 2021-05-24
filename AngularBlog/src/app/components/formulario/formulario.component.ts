import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from 'src/app/post.interface';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;


  constructor(private postService: PostService) {



    this.formulario = new FormGroup({

      titulo: new FormControl('', [

        Validators.required

      ]),

      texto: new FormControl('', [

        Validators.required,
        Validators.minLength(500),


      ]),

      autor: new FormControl('', [

        Validators.required,


      ]),

      imagen: new FormControl('', [

        Validators.required,

      ]),
      fecha: new FormControl('', [

        Validators.required,

      ]),
      categoria: new FormControl('', [

        Validators.required,


      ]),


    });

  };


  ngOnInit(): void {
  }

  onSubmit() {



    /* Descomentar para siempre poner la fecha al dia de publicacion del Post
    
    this.formulario.value.fecha = new Date(); */

    this.postService.agregarPost(this.formulario.value);
    console.log(this.formulario.value);

    this.formulario.reset();

  }

}
