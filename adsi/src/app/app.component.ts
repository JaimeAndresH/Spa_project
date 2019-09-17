import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:String =  'plan de trabajo';
  mensaje: String = '';

  paises = [
            {'pais':'colombia', position:'SurAmerica'},
            {'pais':'españa', position:'europa'},
            {'pais':'china', position:'asia'},
            {'pais':'eeuu', position:'NorteAmerica'}
          ];

  model:any = {};
  model2:any = {};

  agregar_Pais():void{
   this.paises.push(this.model);
   this.mensaje = 'pais agregado';
  }

  eliminar_Pais(i):void{
    var answer = confirm('desea borrar el dato');
    if(answer){
        this.paises.splice(i,1);
    }
    this.mensaje = 'pais eliminado correctamente';
  }
  myvalue;
  editar_Pais(i):void{
      this.model2.pais= this.paises[i].pais;
      this.model2.position= this.paises[i].position;
      this.myvalue = i;
      this.mensaje = 'pais eliminado correctamente';
  }

  actualizar_Pais():void{
      let i = this.myvalue;
      for(let j = 0; j<this.paises.length; j++){
        if(i == j){
          this.paises[i] = this.model2;
          this.model2 = {};
        }
      }
      this.mensaje = 'pais actualizado correctamente'
      
  }

}

