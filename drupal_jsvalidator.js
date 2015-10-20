(function ($) {

  // by jsOspina!

  $(document).ready(function () {
    var veh = Drupal.settings.honda_pth.values_estilo_honda;
    var vcz = Drupal.settings.honda_pth.values_cascos_zoan;
    var vzt = Drupal.settings.honda_pth.values_zen_tech;
    var vr = Drupal.settings.honda_pth.values_repuestos;

    var counter_estilo = 0;

    // ***************** Estilo Honda ******************************************/
    // counts how many checkboxes are checked
    $( "#edit-estilo-honda-contents input" ).each(function( index ) {
      val = $(this).context.value;
      if(veh.indexOf(val) != -1) {
        $(this).context.checked = true;
      }
      if($(this).context.checked) {
        counter_estilo++;
      }
    });
    $( "#edit-estilo-honda-contents input" ).click(function() {
        // get each input by context
        obj = (jQuery("input", this));
        context = obj.context;
        checked = context.checked;
        if(checked) {
          // just 4 options max checked
          if(counter_estilo < 4) { 
            counter_estilo++;
          }
          else { 
            obj.context.checked = false;
            alert('No puede escoger mas de 4 opciones');
          }
        }
        else {
          if(counter_estilo >= 0) {
            counter_estilo--;
          }
        }
    });

    // ***************** Cascos Zoan ******************************************/
    var counter_cascos = 0;
    $( "#edit-cascos-zoan-contents input" ).each(function( index ) {
      val = $(this).context.value;
      if(vcz.indexOf(val) != -1) {
        $(this).context.checked = true;
      }
      if($(this).context.checked) {
        counter_cascos++;
      }
    });
    $( "#edit-cascos-zoan-contents input" ).click(function() {
        obj = (jQuery("input", this));
        context = obj.context;
        checked = context.checked;
        if(checked) {
          if(counter_cascos < 4) { 
            counter_cascos++;
          }
          else { 
            obj.context.checked = false;
            alert('No puede escoger mas de 4 opciones');
          }
        }
        else {
          if(counter_cascos >= 0) {
            counter_cascos--;
          }
        }
    });

    // ***************** Zen Tech ******************************************/
    var counter_zen = 0;
    $( "#edit-zen-tech-contents input" ).each(function( index ) {
      val = $(this).context.value;
      if(vzt.indexOf(val) != -1) {
        $(this).context.checked = true;
      }
      if($(this).context.checked) {
        counter_zen++;
      }
    });
    $( "#edit-zen-tech-contents input" ).click(function() {
        obj = (jQuery("input", this));
        context = obj.context;
        checked = context.checked;
        if(checked) {
          if(counter_zen < 4) { 
            counter_zen++;
          }
          else { 
            obj.context.checked = false;
            alert('No puede escoger mas de 4 opciones');
          }
        }
        else {
          if(counter_zen >= 0) {
            counter_zen--;
          }
        }
    });

    // ***************** Repuestos ******************************************/
    var counter_repuestos = 0;
    $( "#edit-repuestos-contents input" ).each(function( index ) {
      val = $(this).context.value;
      if(vr.indexOf(val) != -1) {
        $(this).context.checked = true;
      }
      if($(this).context.checked) {
        counter_repuestos++;
      }
    });
    $( "#edit-repuestos-contents input" ).click(function() {
        obj = (jQuery("input", this));
        context = obj.context;
        checked = context.checked;
        if(checked) {
          if(counter_repuestos < 4) { 
            counter_repuestos++;
          }
          else { 
            obj.context.checked = false;
            alert('No puede escoger mas de 4 opciones');
          }
        }
        else {
          if(counter_repuestos >= 0) {
            counter_repuestos--;
          }
        }
    });

  });

}(jQuery));