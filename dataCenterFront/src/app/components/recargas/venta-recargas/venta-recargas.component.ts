import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RecargaService } from 'src/app/services/recarga.service';

@Component({
  selector: 'app-venta-recargas',
  templateUrl: './venta-recargas.component.html',
  styleUrls: ['./venta-recargas.component.css']
})
export class VentaRecargasComponent implements OnInit{

  // Se declara el formulario 
  recargaForm!: FormGroup;

  constructor(
    // Se importa el servicio, para realizar consumos y peticiones HTTP
    private recargaService: RecargaService, 
    // Se importa componente para mensajes emergentes
    private toastr: ToastrService,
    // Se importa para construir el formulario y sus campos
    private formBuilder: FormBuilder) {
      this.recargaForm = this.formBuilder.group({
        operador: ['', Validators.required],
        valor: ['', Validators.required],
        numero: ['', Validators.required],
      });
  }

  ngOnInit(): void {
    
  }

  // Método que consume el servicio de crear una recarga
  crear() {
    this.recargaService.crearReacarga(this.recargaForm.value).subscribe((resp: any) => {
      // De acuerdo, con la respuesta del servicio de muestra mensaje de exitoso o de error 
      this.toastr.success('Recarga realizada correctamente');
    });
  }

}
