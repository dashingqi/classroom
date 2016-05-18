require.config({
    baseUrl: '/js',
    paths:{
        jquery:'lib/jquery',
        amazeui:'lib/amazeui',
        request:'widget/request'
    }
});

require(['jquery','request'],function($,req){
    $(function(){
        var $updateSelfBtn = $('#updateSelfBtn');
        $updateSelfBtn.click(function(){
            var oUserSelf = {
                _id:$('#tid').val(),
                nickname:$('#name').val(),
                phone:$('#phone').val(),
                password:$('#password').val(),
                sex:$('input[name="sex"]:checked').val()
            }
            console.log(oUserSelf)
            req.put(oUserSelf,'/admin/user/self',function(data){
                alert(data.msg)
            })
        })
    })
})