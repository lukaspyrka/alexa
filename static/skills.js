const skille = [
    {
        prefix: 'kolor niebieski',
        skill: function(){
            document.body.style.backgroundColor = 'blue'
        }
    },
    {
        prefix: 'wasza komenda',
        skill: function(){
            //wasz prorgam
        }
    }
];

function execute(command){
    const run = skille.find( (skill)=> command.includes(skill.prefix) );
    run.skill()
}