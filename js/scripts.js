var idActual = "inicio";
    var idAnterior = null;
    Show("inicio");
    function Show(name){
        idActual = document.getElementById(name);
        if(idAnterior != null) idAnterior.classList.add('page-moveUp');
        idActual.style.zIndex = "0";
        if(idAnterior != null)idAnterior.style.zIndex = "1";
        idActual.classList.add('page-visible');
        idActual.classList.remove('page-moveUp');
        idAnterior = idActual;
        document.getElementById('listMenu').style.display ="none";
        mostrar = false;
    }
    function MostrarBackEnd(){
        var backend = document.getElementById('backend');
        var frontend = document.getElementById('frontend');
        frontend.classList.add('page-left');
        backend.style.display="block";
        backend.classList.remove('page-left');
    }
    function MostrarFrontEnd(){
        var backend = document.getElementById('backend');
        var frontend = document.getElementById('frontend');
        backend.classList.add('page-left');
        frontend.style.display="block";
        frontend.classList.remove('page-left');
    }
    function MostrarDocumento(documento){
        var div = document.getElementById('seeDocument');
        var doc_add = "none";
        switch(documento){
            case "curriculum":{
                doc_add = "documents/Curriculum_Only.pdf";
            }break;
            case "grado_academico":{
                doc_add = "documents/Constancia_Grado_Academico.pdf";

            }break;
            case "curso_csharp":{
                doc_add = "documents/Certificado_Csharp.pdf";

            }break;
            case "dg_javascript":{
                doc_add = "documents/Certificado_DG_con_Javascript_e-learning.pdf";

            }break;
            case "dgcoreldraw":{
                doc_add = "documents/Certificado_DISENO_GRÁFICO_CON_COREL_DRAW.pdf";

            }break;
            case "dw":{
                doc_add = "documents/Certificado_Diseno_Web.pdf";

            }break;
            case "java_android":{
                doc_add = "documents/Certificado_Java_Android.pdf";

            }break;
            case "mysql":{
                doc_add = "documents/Certificado_My_SQL_BASE_DE_DATOS_SISTEMA_E-LEARNING.pdf";

            }break;
            case "php":{
                doc_add = "documents/Certificado_PHP_BASICO_SISTEMA_E-LEARNING.pdf";

            }break;
            case "bootstrap_4":{
                doc_add = "documents/Certificado_Bootstrap_4.pdf";

            }break;
            case "Programacion_basica":{
                doc_add = "documents/Certificado_Programacion_Basica.pdf";

            }break;
        }
       
        var monitor = window.matchMedia('(max-width: 850px)');
        if (monitor.matches) {
            window.open(doc_add, '_blank').focus();
        } else {   
            div.innerHTML = '<object class="float-right" data="'+doc_add+'" type="application/pdf" width="100%" height="100%"></object>';
        }
        
    }
    //mostrar menu
    var mostrar = false;
    function Menu(){
        var menu = document.getElementById('listMenu');
        if(mostrar == false){
            menu.style.display="block";
            mostrar = true;
        }else{
            menu.style.display="none";
            mostrar = false;
        }
    }    