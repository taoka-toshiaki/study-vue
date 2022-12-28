export function jsloader(){
    [...document.querySelectorAll('script')].forEach(elm =>{
        
        if(elm.src!==""){
            elm.src = elm.src.replace(/\.js\??[0-9]{0,}/,'.js?' + ((new Date()).getTime()) );
            if(document.getElementById('view')){
                document.getElementById('view').insertAdjacentHTML('beforeend',elm.src + "<br>");
            }
        }
    });
}