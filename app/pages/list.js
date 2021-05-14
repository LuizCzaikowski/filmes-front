export const ListComponent = {
    template: `
    <div class="movie-item-style-2 movie-item-style-1" v-for="item in dataLista">
    <img src="app/assets/images/uploads/mv2.jpg" alt="">
    <div class="hvr-inner">
        <a href="moviesingle.html"> Ver mais <i class="ion-android-arrow-dropright"></i>
        </a>
    </div>
    <div class="mv-item-infor">
        <h6><a id="filme-Nome" contentEditable="true">{{item.Nome}}</a></h6>
        <p class="rate"><span>ID: {{item.id}}</span></p>
        <p class="rate" contentEditable="true"><i class="ion-android-star"></i><span>{{item.Nota}}</span> /10</p>
        <p class="rate" contentEditable="true"><i class="ion-android-star"></i><span>{{item.Ano}}</span></p>
        <p class="rate">
            <button v-on:click = 'this.editar(item)' style="width: 38px;">    
                <i class="fas fa-pen"></i>
            </button>
            <button v-on:click = 'this.excluir(item.id)' style="width: 38px; margin-left: 22px;">
                <i class="fas fa-trash"></i>
            </button>
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
        editar(item) {
            fetch(`http://localhost:3000/filme/${item.id}`, { method: 'PUT', mode: 'cors' , body:JSON.stringify(item)})
            .then((response) => {
                response.json().then((data) => {
                    this.filme.id = data.id;
                    this.filme.Nome = data.Nome;
                    this.filme.Nota = data.Nota;
                    this.filme.Ano = data.Ano;
                window.location.reload();
                })
            })
            .catch((error) => {
                console.error(error)
            })
        },
        excluir(id) {
            fetch(`http://localhost:3000/filme/${id}`, { method: 'DELETE', mode: 'cors' })
                .then((response) => {
                    response.json().then((data) => {
                        window.location.reload();
                    })
                })
                .catch((error) => {
                    console.error(error)
                })
        },
        mostrarForm() {
            $("#formCadastro").slideToggle();
        },
        alterarText(){
            // $("#filme-Nome").
        }
    }
    
}