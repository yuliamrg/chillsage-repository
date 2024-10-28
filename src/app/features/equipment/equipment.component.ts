import { Component } from '@angular/core';
import { HeaderComponent } from '../../layout/header/header.component';
@Component({
  selector: 'app-equipment',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './equipment.component.html',
  styles: ``
})
export class EquipmentComponent {
  title = 'Equipos';
}
