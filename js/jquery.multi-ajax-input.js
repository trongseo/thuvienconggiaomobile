$.widget("custom.multi_ajax_input", {
  options: { 
    add_button : false,
    input_values_list : false,
    message_delete : 'Are you sure to delete this item ?',
    message_add_button : 'Add',
    only_single_option : false
  },
  _ajax_item_id: false,
  _ajax_autocomplete_selected:false,
  _create: function() {
    var self = this;
    this.element.bind('change keypress', function(){
      self._ajax_item_id = false;
    }).bind('keyup', function(event){
      if (event.which==13) {
        if (!self.options.only_single_option && self.element.val()!='') {
          self.handle_add_item(self);
        }
        event.preventDefault();
        return false; 
      }
    });
    if (self.options.only_single_option) {
      if (self.options.input_values_list) self.handle_add_item_single_option(self);
    } else {
      if (!self.options.add_button) {
        self.options.add_button = $('<input type="button" value="'+self.options.message_add_button+'" />');
        self.element.after(self.options.add_button);
      }
      $(self.options.add_button).click(function(){
        self.handle_add_item(self);
      });
        
      if (!self.options.input_values_list) {
        var ul = $('<ul class="multi_ajax_input_ul"></ul>');
        var ul_id = 'multi_ajax_input_ul_' + Math.floor( Math.random()*99999 );
        ul.attr('id', ul_id);
        self.element.parent().append(ul);
        self.options.input_values_list = '#'+ul_id;
      } else {
        $(self.options.input_values_list).find('li').each(function(){
          var li = $(this);
          li.find('input[type=hidden]').before('<div class="multi_ajax_input_moveable"></div>');
          li.append('<div class="multi_ajax_input_delete"></div>');
          li.hover(function(){
            $(this).find('.multi_ajax_input_moveable, .multi_ajax_input_delete').addClass('visible');
          }, function(){
            $(this).find('.multi_ajax_input_moveable, .multi_ajax_input_delete').removeClass('visible');
          });
          li.find('.multi_ajax_input_delete').click(function(){
            self.handle_delete_item(self, li);
          });
        });
      }
      $(self.options.input_values_list).sortable({forceHelperSize: true, forcePlaceholderSize:true, placeholder: 'ui-state-highlight', helper:'clone', handle:'.multi_ajax_input_moveable'}).disableSelection();
    }
     
    var autocomplete_options = self.options;
    
    autocomplete_options.select = function(event, ui){
      self.element.val(ui.item.label);
      self._ajax_autocomplete_selected = true;
      self._ajax_item_id = ui.item.id;
      if (self.options.only_single_option) {
        self.handle_add_item_single_option(self);
      } else {
        self.handle_add_item(self);
      }     
    }; 
    autocomplete_options.close = function(){
      if (self._ajax_autocomplete_selected) {
        if (!self.options.only_single_option) self.element.val(''); 
        self._ajax_autocomplete_selected = false;
      } 
    };
    
    self.element.autocomplete(autocomplete_options);
  },
  handle_add_item_single_option: function(self) { 
    if (self.options.input_values_list) {
      var hidden = $(self.options.input_values_list);
      var name = hidden.attr('name');
      if (self._ajax_autocomplete_selected) {
        hidden.val((self._ajax_item_id === false ? '0' : self._ajax_item_id)+'::'+self.element.val());
      }
    } else {
      var name = self.element.attr('name');
      self.element.removeAttr('name');
      var hidden = $('<input type="hidden" name="'+name+'" value="'+(self._ajax_item_id === false ? '0' : self._ajax_item_id)+'::'+self.element.val()+'" />'); 
    }
    if (hidden.val()!='') {
      self.element.attr('disabled','disabled').addClass('multi_ajax_input_single_selected');
      var delete_button = $('<div class="multi_ajax_input_delete visible single_option"></div>');
      delete_button.click(function(){
        $(this).remove();
        hidden.remove();
        if (self.options.input_values_list) self.options.input_values_list = false;
        self.element.attr('name', name);
   self.element.removeAttr('disabled').removeClass('multi_ajax_input_single_selected');
      });
      if (!self.options.input_values_list) self.element.after(hidden);
      self.element.after(delete_button);
    }
  },
  handle_add_item: function(self) {
    var list = $(self.options.input_values_list);
    var input = self.element;
    if (input.val() == '') return false;
    var item = $('<li><div class="multi_ajax_input_moveable"></div><input type="hidden" name="'+input.attr('input_name')+'[]" value="'+(self._ajax_item_id === false ? '0' : self._ajax_item_id)+'::'+input.val()+'" />'+input.val()+'<div class="multi_ajax_input_delete"></div></li>');
    list.append(item);
    item.hover(function(){
      $(this).find('.multi_ajax_input_moveable, .multi_ajax_input_delete').addClass('visible');
    }, function(){
      $(this).find('.multi_ajax_input_moveable, .multi_ajax_input_delete').removeClass('visible');
    });
    item.find('.multi_ajax_input_delete').click(function(){
      self.handle_delete_item(self, item);
    });
    input.val('');
    list.sortable('refresh');
  },
  handle_delete_item: function(self, item){
    if (!confirm(self.options.message_delete)) return false;
    item.remove();
  }
});
