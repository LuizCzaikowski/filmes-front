export const ListComponent = {
    template: `
    <!--<div class="overflow-x-auto">    
    <div class="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center bg-gray-100 font-sans overflow-hidden">        
        <div class="w-full lg:w-5/6">
        <router-link to="/create">       
            <svg  xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </router-link>
            <div class="bg-white shadow-md rounded my-6">
                <table class="min-w-max w-full table-auto">
                    <thead>
                        <tr class="bg-blue-300 text-black-400 uppercase text-sm leading-normal">
                            <th class="py-3 px-6 text-left">ID</th>
                            <th class="py-3 px-6 text-left">AULA</th>
                            <th class="py-3 px-6 text-left">ANO</th>
                            <th class="py-3 px-6 text-left">NOTA</th>
                            <th class="py-3 px-6 text-center">AÇÕES</th>
                        </tr>
                    </thead>
                    <tbody class="text-gray-600 text-sm font-light">
                        <tr class="border-b border-gray-200 hover:bg-gray-100" v-for="item in dataLista">
                            <td class="py-3 px-6 text-left whitespace-nowrap">
                                <div class="flex items-center">                                    
                                    <span class="font-medium">{{item.id}}</span>
                                </div>
                            </td>
                            <td class="py-3 px-6 text-left">
                                <div class="flex items-center">
                                    <span class="font-medium">{{item.Nome}}</span>
                                </div>
                            </td>  
                            <td class="py-3 px-6 text-left">
                                <div class="flex items-center">
                                    <span class="font-medium">{{item.Ano}}</span>
                                </div>
                            </td> 
                            <td class="py-3 px-6 text-left">
                                <div class="flex items-center">
                                    <span class="font-medium">{{item.Nota}}</span>
                                </div>
                            </td>                           
                            <td class="py-3 px-6 text-center">
                                <div class="flex item-center justify-center">
                                    <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                        <router-link :to="{name: 'Visual', params: {id: item.id}}">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        </router-link>
                                    </div>
                                    <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                        <router-link :to="{name: 'Editar', params: {id: item.id}}">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                            </svg>
                                        </router-link>
                                    </div>
                                    <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                        <router-link :to="{name: 'Excluir', params: {id: item.id}}">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </router-link>
                                    </div>
                                </div>
                            </td>
                        </tr>                        
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div> -->


<div class="movie-item-style-2 movie-item-style-1" v-for="item in dataLista">
    <img src="app/assets/images/uploads/mv2.jpg" alt="">
    <div class="hvr-inner">
        <a href="moviesingle.html"> Read more <i class="ion-android-arrow-dropright"></i>
        </a>
    </div>
    <div class="mv-item-infor">
        <h6><a href="#">{{item.Nome}}</a></h6>
        <p class="rate"><span>ID: {{item.id}}</span></p>
        <p class="rate"><i class="ion-android-star"></i><span>{{item.Nota}}</span> /10</p>
        <p class="rate"><i class="ion-android-star"></i><span>{{item.Ano}}</span></p>
        <p class="rate" style="width: 47px; display: flex;">
            <router-link :to="{name: 'Editar', params: {id: item.id}}">
                <div style="cursor: pointer; margin-right: 13px;">    
                    <i class="fas fa-pen"></i>
                </div>
            </router-link>
            <router-link :to="{name: 'Excluir', params: {id: item.id}}">
                <div style="cursor: pointer;">
                    <i class="far fa-trash-alt"></i>
                </div>
            </router-link>
        </p>
    </div>
</div>`,
    data() {
        return {
            dataLista: [],
            tituloPagina: '',
            acao: 'Cadastrar',
            method: 'POST',
            filme: {
                id: '',
                Nome: ''
            }
        }
    },
    mounted() {
        fetch('http://localhost:3000/filme', {method: 'GET', mode: 'cors'})
        .then((response) => {    
            response.json().then((data) => {
                console.table(data)
                this.dataLista = data
            })
        })
    },
    methods: {
        cancelar() {
            this.$router.push('/');
        },
        comunicaApi(method) {
            let url = `http://localhost:3000/filme/${this.filme.id}`;
            if (method === 'POST') {
                url = 'http://localhost:3000/filme';
            }
            fetch(url, {
                method: method,
                headers: {
                    "Content-Type": "application/json"
                },
                mode: 'cors',
                body: JSON.stringify({ Nome: this.filme.Nome })
            })
                .then((response) => {
                    response.text().then((data) => {
                        // console.log(data)
                        alert(`${this.acao} executada!`);
                        this.$router.push('/');
                    })
                })
        },
        visualizar(id) {
            fetch(`http://localhost:3000/filme/${id}`, { method: 'GET', mode: 'cors' })
                .then((response) => {
                    response.json().then((data) => {
                        this.filme.id = data.id;
                        this.filme.Nome = data.Nome;
                        this.filme.Nota = data.Nota;
                        this.filme.Ano = data.Ano;
                    })
                })
                .catch((error) => {
                    console.error(error)
                })
        },
        editar(id) {
            this.visualizar(id);
        },
        excluir(id) {
            this.visualizar(id);
        },
        mostrarForm() {
            $("#formCadastro").slideToggle();
        }
    }
}