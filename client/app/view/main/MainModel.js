/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('Spotify.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',
    requires: [
        'Spotify.model.PlayedTrack',
        'Spotify.model.BookmarkedTrack'
    ],
    alias: 'viewmodel.main',

    data: {
        name: 'Spotify',
        token: ''
    },

    formulas: {
        hasToken: function (get) {
            return !(get('token') === '');
        }
    },

    stores: {
        playedTracks: {
            model: 'Spotify.model.PlayedTrack',
            listeners: {
                load: 'onPlayedTracksStoreLoad'
            },
            proxy: {
                type: 'ajax',
                url: '/played',
                extraParams: {
                    'token': '{token}'
                },

                reader: {
                    rootProperty: 'items'
                }
            }
        },
        bookmarked: {
            autoLoad:true,
            storeId: 'bookmarked',
             model: 'Spotify.model.BookmarkedTrack',
            proxy: {
                type: 'localstorage',
                id: 'bookmarked-tracks'
            }
        }
    }

});