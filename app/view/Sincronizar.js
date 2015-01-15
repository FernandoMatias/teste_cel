Ext.define('Touch2Demo.view.Sincronizar', {
    extend: 'Ext.dataview.List',
    alias: 'widget.Sincronizar',
    config: {
	store: 'Contato',
	itemTpl: 'Nome: {nome}     - Email: {email}',
	onItemDisclosure: true,
	views: [
	    'nome'
	    	],
	items: [
	    {
		docked: 'top',
		xtype: 'toolbar',
		ui: 'light',
		title: 'Sincronização',
		items: [
		    {
			xtype: 'spacer'
		    },
		    {
			xtype: 'button',
			action: 'sincronizar',
			text: 'sincronizar'
		    }
		]
	    }
	]
    }
});