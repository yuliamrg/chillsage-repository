import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-equipment',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './equipment-list.component.html',
  styles: ``
})
export class EquipmenListComponent {
  title = 'Equipos';
}
