import { Routes } from "@angular/router"
import { PendingOrdersComponent } from "./pending-orders/pending-orders.component"
import { FinishOrdersComponent } from "./finish-orders/finish-orders.component"


export const ORDERS_ROUTES: Routes = [
  { path: 'pending', component: PendingOrdersComponent },
  { path: 'finish', component: FinishOrdersComponent },
]
