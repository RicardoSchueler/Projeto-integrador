$("#frmCadastro").validate(
{
    rules: 
    {
        nome: 
        {
            required: true,
            maxlength: 80
        }, 
        cpf: 
        {
            required: true
        },
        identidade:
        {
            required: true,
            maxlength: 20
        },
        email:
        {
            email: true,
            maxlength: 30
        },  
        dt_nascimento: 
        {
            required: true,
            date: true
        },
        endereco:
        {
            required: true,
            maxlength: 100
        }  
    },
    messages: 
    {
        nome: 
        {
            required: "O preenchimento do campo NOME é obrigatório.",
            maxlength: "O campo NOME deve ter no máximo 80 caracteres."
        },
        cpf: 
        {
            required: "O preenchimento do campo CPF é obrigatório."        
        },
        identidade: 
        {
            required: "O preenchimento do campo IDENTIDADE é obrigatório.",
            maxlength: "O campo IDENTIDADE deve ter no máximo 20 caracteres."        
        },
        email: 
        {        
            email: "O campo E-MAIL deve estar no formato: xxx@xxxx.xxx"
        },
        dt_nascimento: 
        {
            required: "O preenchimento do campo DATA DE NASCIMENTO é obrigatório.",
            date: "Entre com uma data válida (MM/DD/YYYY)."               
        },
        endereco: 
        {
            required: "O preenchimento do campo ENDEREÇO é obrigatório.",
            maxlength: "O campo ENDEREÇO deve ter no máximo 100 caracteres."       
        }               
    }
});

$("#frmPagamento").validate(
{
    rules: 
    {
        aluno: 
        {
            required: true                   
        }, 
        curso: 
        {
            required: true                   
        },      
        mes: 
        {
            required: true                   
        },  
        ano: 
        {
            required: true                   
        },                             
        valor: 
        {
            required: true,
            number: true           
        }
    }, 
    messages: 
    {
        aluno: 
        {
            required: "A seleção do ALUNO é obrigatória."            
        }, 
        curso: 
        {
            required: "A seleção do CURSO é obrigatória."            
        }, 
        mes: 
        {
            required: "A seleção do ANO é obrigatória."            
        },   
        ano: 
        {
            required: "A seleção do ANO é obrigatória."            
        },             
        valor: 
        {
            required: "O preenchimento do campo VALOR é obrigatório.",
            number: "Entre com um número válido."
        } 
    }       
});

$("#frmAulas").validate(
    {
    rules: 
    {
        aluno: 
        {
            required: true                   
        },
        curso: 
        {
            required: true                   
        },  
        professor: 
        {
            required: true                   
        }, 
        sala: 
        {
            required: true                   
        },  
        dia_semana: 
        {
            required: true                   
        },  
        horario: 
        {
            required: true                   
        }                                
    }, 
    messages: 
    {
        aluno: 
        {
            required: "A seleção do ALUNO é obrigatória."            
        }, 
        curso: 
        {
            required: "A seleção do CURSO é obrigatória."            
        }, 
        professor: 
        {
            required: "A seleção do PROFESSOR é obrigatória."            
        },   
        sala: 
        {
            required: "A seleção da SALA é obrigatória."            
        },             
        dia_semana: 
        {
            required: "A seleção do DIA DA SEMANA é obrigatória."            
        },        
        horario: 
        {
            required: "A seleção do HORÁRIO é obrigatória."            
        },                    
    }      
});

$("#frmFinanceiro").validate(
    {
    rules: 
    {
        aluno: 
        {
            required: true                   
        },
        curso: 
        {
            required: true                   
        },        
        dt_inicio: 
        {
            required: true,
            date: true
        },
        dt_fim: 
        {
            required: true,
            date: true
        }              
    }, 
    messages: 
    {
        aluno: 
        {
            required: "A seleção do ALUNO é obrigatória."            
        }, 
        curso: 
        {
            required: "A seleção do CURSO é obrigatória."          
        },
        dt_inicio: 
        {
            required: "O preenchimento do campo DATA DE INÍCIO é obrigatório.",
            date: "Entre com uma data válida (MM/DD/YYYY)."               
        },  
        dt_fim: 
        {
            required: "O preenchimento do campo DATA DE FIM é obrigatório.",
            date: "Entre com uma data válida (MM/DD/YYYY)."               
        }                                  
    }      
})