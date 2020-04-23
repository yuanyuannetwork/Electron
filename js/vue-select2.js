	Vue.directive('select2', {
		    inserted: function (el, binding, vnode) {
		        let options = binding.value || {};
		 
		        $(el).select2(options).on("select2:select", (e) => {
		            // v-model looks for
		            // - an event named "change"
		            // - a value with property path "$event.target.value"
		            el.dispatchEvent(new Event('change', {target: e.target})); 
		 
		        });
		    },
		    update: function (el, binding, vnode) {
		        for (var i = 0; i < vnode.data.directives.length; i++) {
		            if (vnode.data.directives[i].name == "model") {
		                $(el).val(vnode.data.directives[i].value);
		 
		            }
		        }
		        $(el).trigger("change");
		 
		    }
		});	