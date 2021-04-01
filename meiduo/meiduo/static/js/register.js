let vm = new Vue({
    el:'#app',
    delimiters:['[[',']]'],
    data:{
        username:'',
        password:'',
        password2:'',
        mobile:'',
        allow:'',

        error_name:false,
        error_password:false,
        error_password2:false,
        error_mobile:false,
        error_allow:false,

        error_name_meeasge:'',
        error_mobile_message:'',
    },
    methods : {
        check_username(){
            let re = /^[a-zA-Z0-9_-]{5,20}$/;
            if (re.test(this.username)){
                this.error_name=false;
            }else{
                this.error_name_message='请输入5-20个字符的用户名';
                this.error_name= true;
            }
        },
        check_password(){

        },
        check_password2(){

        },
        check_mobile(){

        },
        check_allow(){

        },
        on_submit(){

        },
    }
}
);