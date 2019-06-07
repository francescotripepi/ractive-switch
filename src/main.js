Ractive.components.switch = Ractive.extend({
	isolated: true,
	template: `
    <div class="dbk-switch">
	    <label>
    	  <input type="checkbox" checked="{{value}}">
     		<span class="switchbar"></span>
  	  </label>
  	</div>  
  `
})
