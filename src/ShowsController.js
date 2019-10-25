export default class ShowsController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.view.addFetchShowsListener(this.handleFetchShows.bind(this))

    }

    handleFetchShows(showName) {
        this.model.fetchShows(showName).then(response => response.json().then((data) => this.view.displayShows(data)))
    }
}