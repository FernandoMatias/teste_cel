Ext.define('Touch2Demo.store.Sincronizar_S', {
    extend: 'Ext.data.Store',
    config: {
	model: 'Touch2Demo.model.Sincronizar_M',
	proxy: {
	    type: 'ajax',
	    //url: 'php/json/listaContatos.php',
	    api: {
		create: '192.168.111.105/php/criaContato.php', //CRUD
		read: '192.168.111.105/php/listaContatos.php',
		update: '192.168.111.105/php/json/atualizaContato.php',
		destroy: '192.168.111.105/json/deletaContato.php'
	    },
	    reader: {
		type: 'json', //json ou xml
		rootProperty: 'contatos'
	    },
	    writer: {
		type: 'json', //json ou xml
		root: 'contatos',
		writeAllFields: true,
		encode: true,
		allowSingle: true
	    }
	},
	autoLoad: true,
	autoSync: true
    }
});