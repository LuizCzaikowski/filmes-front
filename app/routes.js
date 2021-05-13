import { ListComponent } from "./pages/list.js"
import { FormComponent } from "./pages/form.js"


export const routes = [
    {
        path: '/',
        component: ListComponent
    },
    {
        path: '/create',
        component: FormComponent,
        name: 'Criar'
    },
    {
        path: '/view/:id',
        component: FormComponent,
        name: 'Visual'
    },
    {
        path: '/edit/:id',
        component: ListComponent,
        name: 'Editar'
    },
    {
        path: '/excluir/:id',
        component: ListComponent,
        name: 'Excluir'
    }
]