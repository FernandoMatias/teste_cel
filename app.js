Ext.Loader.setConfig({
	enabled : true
});

Ext.application({

	name: 'Touch2Demo',

	controllers: [
		'Main'
	],

	views: [
		'ColetasForm',
		'ColetasList',
		'MenuIniciar',
		'Sincronizar',
		'ContatosForm',
		'ContatosList',
		'SincronizarForm'


	],

	models: [
		'Contato',
		'Coleta',
		'Sincronizar_M'
	],

	
	stores: [
		'Contato',
		'Coletas',
		'Sincronizar_S'
	],
	
	viewport:{
		layout:{
			type: 'card',
			animation: {
				type: 'slide',
				duration: 10	
			}
		}
	},

	launch: function(){	
		    
	}
});
