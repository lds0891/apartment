$(document).ready(function(){
    //Select menu function placeholder
    $.widget( 'app.selectmenu', $.ui.selectmenu, {
        _drawButton: function () {
            this._super();
            let selected = this.element
                    .find( '[selected]' )
                    .length,
                placeholder = this.options.placeholder;

            if (!selected && placeholder) {
                this.buttonItem.text(placeholder);
            }
        }
    })
    //Datepicker function, custom class function
    $(function () {
        $("#datepicker").datepicker({
            dateFormat: 'dd.mm.yy',
            beforeShow: function(input, inst) {
                inst.dpDiv
                    .removeClass('datepicker-home datepicker-property datepicker-room')
                    .addClass($(input).data('dp-class'));
            }
        });
    }());
    //Select menu function
    $( "#yourRoom" ).selectmenu({
        placeholder: 'Choose your room'
    });
    $( "#yourProperty" ).selectmenu({
        placeholder: 'Choose Propery'
    });
    $( "select" ).selectmenu();
});
