<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">CRUD Component
                        <button class="btn btn-success float-right" data-toggle="modal" data-target="#exampleModal">Add New</button>
                    </div>
                   
                    <div class="card-body">
                       <div class="table-responsive">
                            <table class="table">
                                <caption>List of Posts</caption>
                                <thead>
                                    <tr>
                                    <th scope="col">#</th>
                                   
                                    <th scope="col">Title</th>
                                    <th scope="col">Body</th>
                                    <th scope="col">Action</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    
                                        <tr v-for="post in posts" :key="post.id">
                                            <th scope="row">{{post.id}}</th>
                                           
                                            <td>{{post.title}}</td>
                                            <td>{{post.body}}</td>
                                            
                                            <td>
                                                <button class="btn btn-info">Edit</button>
                                                <button class="btn btn-danger">Delete</button>
                                            </td>
                                        </tr>

                                    
                                    
                                    
                                   
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="createPost" @keydown="form.onKeydown($event)">
                     <div class="form-group">
                        <label>Title</label>
                        <input v-model="form.title" type="text" name="title"
                            class="form-control" :class="{ 'is-invalid': form.errors.has('title') }">
                        <has-error :form="form" field="title"></has-error>
                    </div>
                    <div class="form-group">
                        <label>Body</label>
                        <textarea v-model="form.body"  name="body"
                            class="form-control" :class="{ 'is-invalid': form.errors.has('body') }"></textarea>
                        <has-error :form="form" field="body"></has-error>
                    </div>
                    <!-- <div class="form-group">
                        <label>Username</label>
                        <input v-model="form.username" type="text" name="username"
                            class="form-control" :class="{ 'is-invalid': form.errors.has('username') }">
                        <has-error :form="form" field="username"></has-error>
                    </div> -->
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary">Save changes</button>
                    </div>
                    </form>
                </div>
                
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
           
           return {
                posts: {},
      // Create a new form instance
            form: new Form({
                title: '',
                body: ''
                // image: ''
                })
            }  
        },
         methods: {
             loadPosts(){
                 axios.get("api/posts").then(({data})=>(this.posts=data.data));

             },
            createPost () {
                // Submit the form via a POST request
                this.form.post('api/posts');
            }
        },
        created() {
            // console.log('Component mounted.')
            this.loadPosts();
        }
    }
</script>
