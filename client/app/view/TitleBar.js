Ext.define('Spotify.view.TitleBar', {
	extend: 'Ext.TitleBar',

	xtype: 'spotify-titlebar',

	title: 'Bookmarks for Spotify',
	items: [
		{
			iconCls: 'x-fa fa-spotify',
		},
		{
			iconCls: 'x-fa fa-refresh',
			align: 'right',
			handler: 'refreshTracks',
			bind : {
				hidden: '{!hasToken}'
			}
		},
		{
			iconCls: 'x-fa fa-sign-out',
			align: 'right',
			handler: 'onSpotifyLogout',
			bind : {
				hidden: '{!hasToken}'
			}
		}
	]

});
