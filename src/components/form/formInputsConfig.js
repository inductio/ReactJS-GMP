export const formInputsConfig = [
        {
            id: 'movie-form-title',
            label: 'Title',
            placeholder: 'Add Movie\'s Name Here',
            inputType: 'text',
            serverName: 'title'
        }, {
            id: 'movie-form-date',
            label: 'Release date',
            placeholder: 'Select Date',
            inputType: 'date',
            serverName: 'release_date'
        }, {
            id: 'movie-form-url',
            label: 'Movie URL',
            placeholder: 'Movie URL here',
            inputType: 'text',
            serverName: 'poster_path'
        }, {
            id: 'movie-form-genre',
            label: 'Genre',
            placeholder: 'Select Genre',
            inputType: 'select',
            serverName: 'genres'
        }, {
            id: 'movie-form-overview',
            label: 'Overview',
            placeholder: 'Overview here',
            inputType: 'text',
            serverName: 'overview'
        }, {
            id: 'movie-form-runtime',
            label: 'Runtime',
            placeholder: 'Runtime here',
            inputType: 'number',
            serverName: 'runtime'
        }
];
