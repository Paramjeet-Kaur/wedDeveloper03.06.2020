var log={
    info: function(info){
        console.log('Info: '+info);
    },
    warning:function(warning){
        console.log('warning'+warning);
    },
    error:function(error){
        console.log('Error: '+error);
    }
    };
    module.exports= log
module.exports.log=function(msg){
    console.log(msg);
}